(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Fu(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Uu(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ze(s)?rw(s):Uu(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ze(t))return t;if(Me(t))return t}}const nw=/;(?![^(]*\))/g,sw=/:([^]+)/,iw=/\/\*.*?\*\//gs;function rw(t){const e={};return t.replace(iw,"").split(nw).forEach(n=>{if(n){const s=n.split(sw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Na(t){let e="";if(ze(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const s=Na(t[n]);s&&(e+=s+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ow="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",aw=Fu(ow);function Lg(t){return!!t||t===""}const Ft=t=>ze(t)?t:t==null?"":X(t)||Me(t)&&(t.toString===Bg||!ee(t.toString))?JSON.stringify(t,Fg,2):String(t),Fg=(t,e)=>e&&e.__v_isRef?Fg(t,e.value):Js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Ug(e)?{[`Set(${e.size})`]:[...e.values()]}:Me(e)&&!X(e)&&!$g(e)?String(e):e,Ne={},Xs=[],tn=()=>{},cw=()=>!1,lw=/^on[^a-z]/,ka=t=>lw.test(t),Vu=t=>t.startsWith("onUpdate:"),vt=Object.assign,Bu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uw=Object.prototype.hasOwnProperty,ue=(t,e)=>uw.call(t,e),X=Array.isArray,Js=t=>Da(t)==="[object Map]",Ug=t=>Da(t)==="[object Set]",ee=t=>typeof t=="function",ze=t=>typeof t=="string",$u=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",Vg=t=>Me(t)&&ee(t.then)&&ee(t.catch),Bg=Object.prototype.toString,Da=t=>Bg.call(t),hw=t=>Da(t).slice(8,-1),$g=t=>Da(t)==="[object Object]",Hu=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Do=Fu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fw=/-(\w)/g,ai=Oa(t=>t.replace(fw,(e,n)=>n?n.toUpperCase():"")),dw=/\B([A-Z])/g,bi=Oa(t=>t.replace(dw,"-$1").toLowerCase()),Hg=Oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Uc=Oa(t=>t?`on${Hg(t)}`:""),mr=(t,e)=>!Object.is(t,e),Oo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ho=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Tl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hf;const pw=()=>Hf||(Hf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let kt;class jg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function gw(t){return new jg(t)}function mw(t,e=kt){e&&e.active&&e.effects.push(t)}function Kg(){return kt}function _w(t){kt&&kt.cleanups.push(t)}const ju=t=>{const e=new Set(t);return e.w=0,e.n=0,e},qg=t=>(t.w&Jn)>0,Wg=t=>(t.n&Jn)>0,yw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jn},vw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];qg(i)&&!Wg(i)?i.delete(t):e[n++]=i,i.w&=~Jn,i.n&=~Jn}e.length=n}},Il=new WeakMap;let Qi=0,Jn=1;const bl=30;let Gt;const ws=Symbol(""),Cl=Symbol("");class Ku{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,mw(this,s)}run(){if(!this.active)return this.fn();let e=Gt,n=Wn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Gt,Gt=this,Wn=!0,Jn=1<<++Qi,Qi<=bl?yw(this):jf(this),this.fn()}finally{Qi<=bl&&vw(this),Jn=1<<--Qi,Gt=this.parent,Wn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Gt===this?this.deferStop=!0:this.active&&(jf(this),this.onStop&&this.onStop(),this.active=!1)}}function jf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Wn=!0;const zg=[];function Ci(){zg.push(Wn),Wn=!1}function Si(){const t=zg.pop();Wn=t===void 0?!0:t}function At(t,e,n){if(Wn&&Gt){let s=Il.get(t);s||Il.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ju()),Gg(i)}}function Gg(t,e){let n=!1;Qi<=bl?Wg(t)||(t.n|=Jn,n=!qg(t)):n=!t.has(Gt),n&&(t.add(Gt),Gt.deps.push(t))}function Pn(t,e,n,s,i,r){const o=Il.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?Hu(n)&&a.push(o.get("length")):(a.push(o.get(ws)),Js(t)&&a.push(o.get(Cl)));break;case"delete":X(t)||(a.push(o.get(ws)),Js(t)&&a.push(o.get(Cl)));break;case"set":Js(t)&&a.push(o.get(ws));break}if(a.length===1)a[0]&&Sl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Sl(ju(c))}}function Sl(t,e){const n=X(t)?t:[...t];for(const s of n)s.computed&&Kf(s);for(const s of n)s.computed||Kf(s)}function Kf(t,e){(t!==Gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ew=Fu("__proto__,__v_isRef,__isVue"),Qg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($u)),ww=qu(),Tw=qu(!1,!0),Iw=qu(!0),qf=bw();function bw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=fe(this);for(let r=0,o=this.length;r<o;r++)At(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(fe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ci();const s=fe(this)[e].apply(this,n);return Si(),s}}),t}function Cw(t){const e=fe(this);return At(e,"has",t),e.hasOwnProperty(t)}function qu(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?$w:em:e?Zg:Jg).get(s))return s;const o=X(s);if(!t){if(o&&ue(qf,i))return Reflect.get(qf,i,r);if(i==="hasOwnProperty")return Cw}const a=Reflect.get(s,i,r);return($u(i)?Qg.has(i):Ew(i))||(t||At(s,"get",i),e)?a:st(a)?o&&Hu(i)?a:a.value:Me(a)?t?tm(a):Br(a):a}}const Sw=Yg(),Aw=Yg(!0);function Yg(t=!1){return function(n,s,i,r){let o=n[s];if(ci(o)&&st(o)&&!st(i))return!1;if(!t&&(!jo(i)&&!ci(i)&&(o=fe(o),i=fe(i)),!X(n)&&st(o)&&!st(i)))return o.value=i,!0;const a=X(n)&&Hu(s)?Number(s)<n.length:ue(n,s),c=Reflect.set(n,s,i,r);return n===fe(r)&&(a?mr(i,o)&&Pn(n,"set",s,i):Pn(n,"add",s,i)),c}}function Rw(t,e){const n=ue(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Pn(t,"delete",e,void 0),s}function Nw(t,e){const n=Reflect.has(t,e);return(!$u(e)||!Qg.has(e))&&At(t,"has",e),n}function kw(t){return At(t,"iterate",X(t)?"length":ws),Reflect.ownKeys(t)}const Xg={get:ww,set:Sw,deleteProperty:Rw,has:Nw,ownKeys:kw},Dw={get:Iw,set(t,e){return!0},deleteProperty(t,e){return!0}},Ow=vt({},Xg,{get:Tw,set:Aw}),Wu=t=>t,Pa=t=>Reflect.getPrototypeOf(t);function ho(t,e,n=!1,s=!1){t=t.__v_raw;const i=fe(t),r=fe(e);n||(e!==r&&At(i,"get",e),At(i,"get",r));const{has:o}=Pa(i),a=s?Wu:n?Yu:_r;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function fo(t,e=!1){const n=this.__v_raw,s=fe(n),i=fe(t);return e||(t!==i&&At(s,"has",t),At(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function po(t,e=!1){return t=t.__v_raw,!e&&At(fe(t),"iterate",ws),Reflect.get(t,"size",t)}function Wf(t){t=fe(t);const e=fe(this);return Pa(e).has.call(e,t)||(e.add(t),Pn(e,"add",t,t)),this}function zf(t,e){e=fe(e);const n=fe(this),{has:s,get:i}=Pa(n);let r=s.call(n,t);r||(t=fe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?mr(e,o)&&Pn(n,"set",t,e):Pn(n,"add",t,e),this}function Gf(t){const e=fe(this),{has:n,get:s}=Pa(e);let i=n.call(e,t);i||(t=fe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Pn(e,"delete",t,void 0),r}function Qf(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&Pn(t,"clear",void 0,void 0),n}function go(t,e){return function(s,i){const r=this,o=r.__v_raw,a=fe(o),c=e?Wu:t?Yu:_r;return!t&&At(a,"iterate",ws),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function mo(t,e,n){return function(...s){const i=this.__v_raw,r=fe(i),o=Js(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?Wu:e?Yu:_r;return!e&&At(r,"iterate",c?Cl:ws),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function $n(t){return function(...e){return t==="delete"?!1:this}}function Pw(){const t={get(r){return ho(this,r)},get size(){return po(this)},has:fo,add:Wf,set:zf,delete:Gf,clear:Qf,forEach:go(!1,!1)},e={get(r){return ho(this,r,!1,!0)},get size(){return po(this)},has:fo,add:Wf,set:zf,delete:Gf,clear:Qf,forEach:go(!1,!0)},n={get(r){return ho(this,r,!0)},get size(){return po(this,!0)},has(r){return fo.call(this,r,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:go(!0,!1)},s={get(r){return ho(this,r,!0,!0)},get size(){return po(this,!0)},has(r){return fo.call(this,r,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:go(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=mo(r,!1,!1),n[r]=mo(r,!0,!1),e[r]=mo(r,!1,!0),s[r]=mo(r,!0,!0)}),[t,n,e,s]}const[xw,Mw,Lw,Fw]=Pw();function zu(t,e){const n=e?t?Fw:Lw:t?Mw:xw;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ue(n,i)&&i in s?n:s,i,r)}const Uw={get:zu(!1,!1)},Vw={get:zu(!1,!0)},Bw={get:zu(!0,!1)},Jg=new WeakMap,Zg=new WeakMap,em=new WeakMap,$w=new WeakMap;function Hw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jw(t){return t.__v_skip||!Object.isExtensible(t)?0:Hw(hw(t))}function Br(t){return ci(t)?t:Gu(t,!1,Xg,Uw,Jg)}function Kw(t){return Gu(t,!1,Ow,Vw,Zg)}function tm(t){return Gu(t,!0,Dw,Bw,em)}function Gu(t,e,n,s,i){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=jw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Zs(t){return ci(t)?Zs(t.__v_raw):!!(t&&t.__v_isReactive)}function ci(t){return!!(t&&t.__v_isReadonly)}function jo(t){return!!(t&&t.__v_isShallow)}function nm(t){return Zs(t)||ci(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Qu(t){return Ho(t,"__v_skip",!0),t}const _r=t=>Me(t)?Br(t):t,Yu=t=>Me(t)?tm(t):t;function sm(t){Wn&&Gt&&(t=fe(t),Gg(t.dep||(t.dep=ju())))}function im(t,e){t=fe(t);const n=t.dep;n&&Sl(n)}function st(t){return!!(t&&t.__v_isRef===!0)}function Bt(t){return om(t,!1)}function rm(t){return om(t,!0)}function om(t,e){return st(t)?t:new qw(t,e)}class qw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:_r(e)}get value(){return sm(this),this._value}set value(e){const n=this.__v_isShallow||jo(e)||ci(e);e=n?e:fe(e),mr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:_r(e),im(this))}}function F(t){return st(t)?t.value:t}const Ww={get:(t,e,n)=>F(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return st(i)&&!st(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function am(t){return Zs(t)?t:new Proxy(t,Ww)}var cm;class zw{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[cm]=!1,this._dirty=!0,this.effect=new Ku(e,()=>{this._dirty||(this._dirty=!0,im(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=fe(this);return sm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}cm="__v_isReadonly";function Gw(t,e,n=!1){let s,i;const r=ee(t);return r?(s=t,i=tn):(s=t.get,i=t.set),new zw(s,i,r||!i,n)}function zn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){xa(r,e,n)}return i}function $t(t,e,n,s){if(ee(t)){const r=zn(t,e,n,s);return r&&Vg(r)&&r.catch(o=>{xa(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push($t(t[r],e,n,s));return i}function xa(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){zn(c,null,10,[t,o,a]);return}}Qw(t,n,i,s)}function Qw(t,e,n,s=!0){console.error(t)}let yr=!1,Al=!1;const pt=[];let un=0;const ei=[];let Cn=null,fs=0;const lm=Promise.resolve();let Xu=null;function um(t){const e=Xu||lm;return t?e.then(this?t.bind(this):t):e}function Yw(t){let e=un+1,n=pt.length;for(;e<n;){const s=e+n>>>1;vr(pt[s])<t?e=s+1:n=s}return e}function Ju(t){(!pt.length||!pt.includes(t,yr&&t.allowRecurse?un+1:un))&&(t.id==null?pt.push(t):pt.splice(Yw(t.id),0,t),hm())}function hm(){!yr&&!Al&&(Al=!0,Xu=lm.then(dm))}function Xw(t){const e=pt.indexOf(t);e>un&&pt.splice(e,1)}function Jw(t){X(t)?ei.push(...t):(!Cn||!Cn.includes(t,t.allowRecurse?fs+1:fs))&&ei.push(t),hm()}function Yf(t,e=yr?un+1:0){for(;e<pt.length;e++){const n=pt[e];n&&n.pre&&(pt.splice(e,1),e--,n())}}function fm(t){if(ei.length){const e=[...new Set(ei)];if(ei.length=0,Cn){Cn.push(...e);return}for(Cn=e,Cn.sort((n,s)=>vr(n)-vr(s)),fs=0;fs<Cn.length;fs++)Cn[fs]();Cn=null,fs=0}}const vr=t=>t.id==null?1/0:t.id,Zw=(t,e)=>{const n=vr(t)-vr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function dm(t){Al=!1,yr=!0,pt.sort(Zw);const e=tn;try{for(un=0;un<pt.length;un++){const n=pt[un];n&&n.active!==!1&&zn(n,null,14)}}finally{un=0,pt.length=0,fm(),yr=!1,Xu=null,(pt.length||ei.length)&&dm()}}function eT(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ne;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ne;f&&(i=n.map(d=>ze(d)?d.trim():d)),h&&(i=n.map(Tl))}let a,c=s[a=Uc(e)]||s[a=Uc(ai(e))];!c&&r&&(c=s[a=Uc(bi(e))]),c&&$t(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$t(l,t,6,i)}}function pm(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=pm(l,e,!0);u&&(a=!0,vt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(Me(t)&&s.set(t,null),null):(X(r)?r.forEach(c=>o[c]=null):vt(o,r),Me(t)&&s.set(t,o),o)}function Ma(t,e){return!t||!ka(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,bi(e))||ue(t,e))}let Ut=null,La=null;function Ko(t){const e=Ut;return Ut=t,La=t&&t.type.__scopeId||null,e}function gm(t){La=t}function mm(){La=null}function tT(t,e=Ut,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&rd(-1);const r=Ko(e);let o;try{o=t(...i)}finally{Ko(r),s._d&&rd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Vc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=t;let y,w;const k=Ko(t);try{if(n.shapeFlag&4){const O=i||s;y=ln(u.call(O,O,h,r,d,f,g)),w=c}else{const O=e;y=ln(O.length>1?O(r,{attrs:c,slots:a,emit:l}):O(r,null)),w=e.props?c:nT(c)}}catch(O){sr.length=0,xa(O,t,1),y=it(nn)}let I=y;if(w&&_!==!1){const O=Object.keys(w),{shapeFlag:z}=I;O.length&&z&7&&(o&&O.some(Vu)&&(w=sT(w,o)),I=Zn(I,w))}return n.dirs&&(I=Zn(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),y=I,Ko(k),y}const nT=t=>{let e;for(const n in t)(n==="class"||n==="style"||ka(n))&&((e||(e={}))[n]=t[n]);return e},sT=(t,e)=>{const n={};for(const s in t)(!Vu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function iT(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Xf(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Ma(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Xf(s,o,l):!0:!!o;return!1}function Xf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ma(n,r))return!0}return!1}function rT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const oT=t=>t.__isSuspense;function aT(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):Jw(t)}function Po(t,e){if(je){let n=je.provides;const s=je.parent&&je.parent.provides;s===n&&(n=je.provides=Object.create(s)),n[t]=e}}function Ot(t,e,n=!1){const s=je||Ut;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ee(e)?e.call(s.proxy):e}}function cT(t,e){return Zu(t,null,{flush:"post"})}const _o={};function tr(t,e,n){return Zu(t,e,n)}function Zu(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ne){const a=Kg()===(je==null?void 0:je.scope)?je:null;let c,l=!1,u=!1;if(st(t)?(c=()=>t.value,l=jo(t)):Zs(t)?(c=()=>t,s=!0):X(t)?(u=!0,l=t.some(I=>Zs(I)||jo(I)),c=()=>t.map(I=>{if(st(I))return I.value;if(Zs(I))return gs(I);if(ee(I))return zn(I,a,2)})):ee(t)?e?c=()=>zn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),$t(t,a,3,[f])}:c=tn,e&&s){const I=c;c=()=>gs(I())}let h,f=I=>{h=w.onStop=()=>{zn(I,a,4)}},d;if(wr)if(f=tn,e?n&&$t(e,a,3,[c(),u?[]:void 0,f]):c(),i==="sync"){const I=JT();d=I.__watcherHandles||(I.__watcherHandles=[])}else return tn;let g=u?new Array(t.length).fill(_o):_o;const _=()=>{if(w.active)if(e){const I=w.run();(s||l||(u?I.some((O,z)=>mr(O,g[z])):mr(I,g)))&&(h&&h(),$t(e,a,3,[I,g===_o?void 0:u&&g[0]===_o?[]:g,f]),g=I)}else w.run()};_.allowRecurse=!!e;let y;i==="sync"?y=_:i==="post"?y=()=>bt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),y=()=>Ju(_));const w=new Ku(c,y);e?n?_():g=w.run():i==="post"?bt(w.run.bind(w),a&&a.suspense):w.run();const k=()=>{w.stop(),a&&a.scope&&Bu(a.scope.effects,w)};return d&&d.push(k),k}function lT(t,e,n){const s=this.proxy,i=ze(t)?t.includes(".")?_m(s,t):()=>s[t]:t.bind(s,s);let r;ee(e)?r=e:(r=e.handler,n=e);const o=je;li(this);const a=Zu(i,r.bind(s),n);return o?li(o):Ts(),a}function _m(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function gs(t,e){if(!Me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),st(t))gs(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)gs(t[n],e);else if(Ug(t)||Js(t))t.forEach(n=>{gs(n,e)});else if($g(t))for(const n in t)gs(t[n],e);return t}function uT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return eh(()=>{t.isMounted=!0}),Tm(()=>{t.isUnmounting=!0}),t}const Lt=[Function,Array],hT={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},setup(t,{slots:e}){const n=$r(),s=uT();let i;return()=>{const r=e.default&&vm(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==nn){o=_;break}}const a=fe(t),{mode:c}=a;if(s.isLeaving)return Bc(o);const l=Jf(o);if(!l)return Bc(o);const u=Rl(l,a,s,n);Nl(l,u);const h=n.subTree,f=h&&Jf(h);let d=!1;const{getTransitionKey:g}=l.type;if(g){const _=g();i===void 0?i=_:_!==i&&(i=_,d=!0)}if(f&&f.type!==nn&&(!ds(l,f)||d)){const _=Rl(f,a,s,n);if(Nl(f,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Bc(o);c==="in-out"&&l.type!==nn&&(_.delayLeave=(y,w,k)=>{const I=ym(s,f);I[String(f.key)]=f,y._leaveCb=()=>{w(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=k})}return o}}},fT=hT;function ym(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Rl(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:_,onAppear:y,onAfterAppear:w,onAppearCancelled:k}=e,I=String(t.key),O=ym(n,t),z=($,be)=>{$&&$t($,s,9,be)},ne=($,be)=>{const _e=be[1];z($,be),X($)?$.every(at=>at.length<=1)&&_e():$.length<=1&&_e()},de={mode:r,persisted:o,beforeEnter($){let be=a;if(!n.isMounted)if(i)be=_||a;else return;$._leaveCb&&$._leaveCb(!0);const _e=O[I];_e&&ds(t,_e)&&_e.el._leaveCb&&_e.el._leaveCb(),z(be,[$])},enter($){let be=c,_e=l,at=u;if(!n.isMounted)if(i)be=y||c,_e=w||l,at=k||u;else return;let ct=!1;const Kt=$._enterCb=In=>{ct||(ct=!0,In?z(at,[$]):z(_e,[$]),de.delayedLeave&&de.delayedLeave(),$._enterCb=void 0)};be?ne(be,[$,Kt]):Kt()},leave($,be){const _e=String(t.key);if($._enterCb&&$._enterCb(!0),n.isUnmounting)return be();z(h,[$]);let at=!1;const ct=$._leaveCb=Kt=>{at||(at=!0,be(),Kt?z(g,[$]):z(d,[$]),$._leaveCb=void 0,O[_e]===t&&delete O[_e])};O[_e]=t,f?ne(f,[$,ct]):ct()},clone($){return Rl($,e,n,s)}};return de}function Bc(t){if(Fa(t))return t=Zn(t),t.children=null,t}function Jf(t){return Fa(t)?t.children?t.children[0]:void 0:t}function Nl(t,e){t.shapeFlag&6&&t.component?Nl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vm(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Je?(o.patchFlag&128&&i++,s=s.concat(vm(o.children,e,a))):(e||o.type!==nn)&&s.push(a!=null?Zn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Em(t){return ee(t)?{setup:t,name:t.name}:t}const xo=t=>!!t.type.__asyncLoader,Fa=t=>t.type.__isKeepAlive;function dT(t,e){wm(t,"a",e)}function pT(t,e){wm(t,"da",e)}function wm(t,e,n=je){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ua(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Fa(i.parent.vnode)&&gT(s,e,n,i),i=i.parent}}function gT(t,e,n,s){const i=Ua(e,t,s,!0);th(()=>{Bu(s[e],i)},n)}function Ua(t,e,n=je,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ci(),li(n);const a=$t(e,n,t,o);return Ts(),Si(),a});return s?i.unshift(r):i.push(r),r}}const Un=t=>(e,n=je)=>(!wr||t==="sp")&&Ua(t,(...s)=>e(...s),n),mT=Un("bm"),eh=Un("m"),_T=Un("bu"),yT=Un("u"),Tm=Un("bum"),th=Un("um"),Im=Un("sp"),vT=Un("rtg"),ET=Un("rtc");function wT(t,e=je){Ua("ec",t,e)}function Va(t,e){const n=Ut;if(n===null)return t;const s=Ha(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Ne]=e[r];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&gs(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function as(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Ci(),$t(c,n,8,[t.el,a,t,e]),Si())}}const TT=Symbol();function nh(t,e,n,s){let i;const r=n&&n[s];if(X(t)||ze(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Me(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const kl=t=>t?xm(t)?Ha(t)||t.proxy:kl(t.parent):null,nr=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>kl(t.parent),$root:t=>kl(t.root),$emit:t=>t.emit,$options:t=>sh(t),$forceUpdate:t=>t.f||(t.f=()=>Ju(t.update)),$nextTick:t=>t.n||(t.n=um.bind(t.proxy)),$watch:t=>lT.bind(t)}),$c=(t,e)=>t!==Ne&&!t.__isScriptSetup&&ue(t,e),IT={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if($c(s,e))return o[e]=1,s[e];if(i!==Ne&&ue(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,r[e];if(n!==Ne&&ue(n,e))return o[e]=4,n[e];Dl&&(o[e]=0)}}const u=nr[e];let h,f;if(u)return e==="$attrs"&&At(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&ue(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ue(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return $c(i,e)?(i[e]=n,!0):s!==Ne&&ue(s,e)?(s[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ne&&ue(t,o)||$c(e,o)||(a=r[0])&&ue(a,o)||ue(s,o)||ue(nr,o)||ue(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Dl=!0;function bT(t){const e=sh(t),n=t.proxy,s=t.ctx;Dl=!1,e.beforeCreate&&Zf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:y,beforeDestroy:w,beforeUnmount:k,destroyed:I,unmounted:O,render:z,renderTracked:ne,renderTriggered:de,errorCaptured:$,serverPrefetch:be,expose:_e,inheritAttrs:at,components:ct,directives:Kt,filters:In}=e;if(l&&CT(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Se in o){const Ee=o[Se];ee(Ee)&&(s[Se]=Ee.bind(n))}if(i){const Se=i.call(n,n);Me(Se)&&(t.data=Br(Se))}if(Dl=!0,r)for(const Se in r){const Ee=r[Se],qt=ee(Ee)?Ee.bind(n,n):ee(Ee.get)?Ee.get.bind(n,n):tn,os=!ee(Ee)&&ee(Ee.set)?Ee.set.bind(n):tn,Wt=Te({get:qt,set:os});Object.defineProperty(s,Se,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:It=>Wt.value=It})}if(a)for(const Se in a)bm(a[Se],s,n,Se);if(c){const Se=ee(c)?c.call(n):c;Reflect.ownKeys(Se).forEach(Ee=>{Po(Ee,Se[Ee])})}u&&Zf(u,t,"c");function Ve(Se,Ee){X(Ee)?Ee.forEach(qt=>Se(qt.bind(n))):Ee&&Se(Ee.bind(n))}if(Ve(mT,h),Ve(eh,f),Ve(_T,d),Ve(yT,g),Ve(dT,_),Ve(pT,y),Ve(wT,$),Ve(ET,ne),Ve(vT,de),Ve(Tm,k),Ve(th,O),Ve(Im,be),X(_e))if(_e.length){const Se=t.exposed||(t.exposed={});_e.forEach(Ee=>{Object.defineProperty(Se,Ee,{get:()=>n[Ee],set:qt=>n[Ee]=qt})})}else t.exposed||(t.exposed={});z&&t.render===tn&&(t.render=z),at!=null&&(t.inheritAttrs=at),ct&&(t.components=ct),Kt&&(t.directives=Kt)}function CT(t,e,n=tn,s=!1){X(t)&&(t=Ol(t));for(const i in t){const r=t[i];let o;Me(r)?"default"in r?o=Ot(r.from||i,r.default,!0):o=Ot(r.from||i):o=Ot(r),st(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Zf(t,e,n){$t(X(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function bm(t,e,n,s){const i=s.includes(".")?_m(n,s):()=>n[s];if(ze(t)){const r=e[t];ee(r)&&tr(i,r)}else if(ee(t))tr(i,t.bind(n));else if(Me(t))if(X(t))t.forEach(r=>bm(r,e,n,s));else{const r=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(r)&&tr(i,r,t)}}function sh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>qo(c,l,o,!0)),qo(c,e,o)),Me(e)&&r.set(e,c),c}function qo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qo(t,r,n,!0),i&&i.forEach(o=>qo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=ST[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ST={data:ed,props:ls,emits:ls,methods:ls,computed:ls,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:ls,directives:ls,watch:RT,provide:ed,inject:AT};function ed(t,e){return e?t?function(){return vt(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function AT(t,e){return ls(Ol(t),Ol(e))}function Ol(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function ls(t,e){return t?vt(vt(Object.create(null),t),e):e}function RT(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const s in e)n[s]=wt(t[s],e[s]);return n}function NT(t,e,n,s=!1){const i={},r={};Ho(r,$a,1),t.propsDefaults=Object.create(null),Cm(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Kw(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function kT(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=fe(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ma(t.emitsOptions,f))continue;const d=e[f];if(c)if(ue(r,f))d!==r[f]&&(r[f]=d,l=!0);else{const g=ai(f);i[g]=Pl(c,a,g,d,t,!1)}else d!==r[f]&&(r[f]=d,l=!0)}}}else{Cm(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!ue(e,h)&&((u=bi(h))===h||!ue(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Pl(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ue(e,h))&&(delete r[h],l=!0)}l&&Pn(t,"set","$attrs")}function Cm(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Do(c))continue;const l=e[c];let u;i&&ue(i,u=ai(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ma(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=fe(n),l=a||Ne;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Pl(i,c,h,l[h],t,!ue(l,h))}}return o}function Pl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ee(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(li(i),s=l[n]=c.call(null,e),Ts())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===bi(n))&&(s=!0))}return s}function Sm(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[f,d]=Sm(h,e,!0);vt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return Me(t)&&s.set(t,Xs),Xs;if(X(r))for(let u=0;u<r.length;u++){const h=ai(r[u]);td(h)&&(o[h]=Ne)}else if(r)for(const u in r){const h=ai(u);if(td(h)){const f=r[u],d=o[h]=X(f)||ee(f)?{type:f}:Object.assign({},f);if(d){const g=id(Boolean,d.type),_=id(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||ue(d,"default"))&&a.push(h)}}}const l=[o,a];return Me(t)&&s.set(t,l),l}function td(t){return t[0]!=="$"}function nd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function sd(t,e){return nd(t)===nd(e)}function id(t,e){return X(e)?e.findIndex(n=>sd(n,t)):ee(e)&&sd(e,t)?0:-1}const Am=t=>t[0]==="_"||t==="$stable",ih=t=>X(t)?t.map(ln):[ln(t)],DT=(t,e,n)=>{if(e._n)return e;const s=tT((...i)=>ih(e(...i)),n);return s._c=!1,s},Rm=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Am(i))continue;const r=t[i];if(ee(r))e[i]=DT(i,r,s);else if(r!=null){const o=ih(r);e[i]=()=>o}}},Nm=(t,e)=>{const n=ih(e);t.slots.default=()=>n},OT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Ho(e,"_",n)):Rm(e,t.slots={})}else t.slots={},e&&Nm(t,e);Ho(t.slots,$a,1)},PT=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ne;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(vt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Rm(e,i)),o=e}else e&&(Nm(t,e),o={default:1});if(r)for(const a in i)!Am(a)&&!(a in o)&&delete i[a]};function km(){return{app:null,config:{isNativeTag:cw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xT=0;function MT(t,e){return function(s,i=null){ee(s)||(s=Object.assign({},s)),i!=null&&!Me(i)&&(i=null);const r=km(),o=new Set;let a=!1;const c=r.app={_uid:xT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ZT,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const f=it(s,i);return f.appContext=r,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ha(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function xl(t,e,n,s,i=!1){if(X(t)){t.forEach((f,d)=>xl(f,e&&(X(e)?e[d]:e),n,s,i));return}if(xo(s)&&!i)return;const r=s.shapeFlag&4?Ha(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ne?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ze(l)?(u[l]=null,ue(h,l)&&(h[l]=null)):st(l)&&(l.value=null)),ee(c))zn(c,a,12,[o,u]);else{const f=ze(c),d=st(c);if(f||d){const g=()=>{if(t.f){const _=f?ue(h,c)?h[c]:u[c]:c.value;i?X(_)&&Bu(_,r):X(_)?_.includes(r)||_.push(r):f?(u[c]=[r],ue(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ue(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,bt(g,n)):g()}}}const bt=aT;function LT(t){return FT(t)}function FT(t,e){const n=pw();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=tn,insertStaticContent:g}=t,_=(p,m,v,E=null,b=null,N=null,M=!1,R=null,D=!!m.dynamicChildren)=>{if(p===m)return;p&&!ds(p,m)&&(E=x(p),It(p,b,N,!0),p=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:S,ref:j,shapeFlag:U}=m;switch(S){case Ba:y(p,m,v,E);break;case nn:w(p,m,v,E);break;case Mo:p==null&&k(m,v,E,M);break;case Je:ct(p,m,v,E,b,N,M,R,D);break;default:U&1?z(p,m,v,E,b,N,M,R,D):U&6?Kt(p,m,v,E,b,N,M,R,D):(U&64||U&128)&&S.process(p,m,v,E,b,N,M,R,D,le)}j!=null&&b&&xl(j,p&&p.ref,N,m||p,!m)},y=(p,m,v,E)=>{if(p==null)s(m.el=a(m.children),v,E);else{const b=m.el=p.el;m.children!==p.children&&l(b,m.children)}},w=(p,m,v,E)=>{p==null?s(m.el=c(m.children||""),v,E):m.el=p.el},k=(p,m,v,E)=>{[p.el,p.anchor]=g(p.children,m,v,E,p.el,p.anchor)},I=({el:p,anchor:m},v,E)=>{let b;for(;p&&p!==m;)b=f(p),s(p,v,E),p=b;s(m,v,E)},O=({el:p,anchor:m})=>{let v;for(;p&&p!==m;)v=f(p),i(p),p=v;i(m)},z=(p,m,v,E,b,N,M,R,D)=>{M=M||m.type==="svg",p==null?ne(m,v,E,b,N,M,R,D):be(p,m,b,N,M,R,D)},ne=(p,m,v,E,b,N,M,R)=>{let D,S;const{type:j,props:U,shapeFlag:K,transition:Y,dirs:se}=p;if(D=p.el=o(p.type,N,U&&U.is,U),K&8?u(D,p.children):K&16&&$(p.children,D,null,E,b,N&&j!=="foreignObject",M,R),se&&as(p,null,E,"created"),de(D,p,p.scopeId,M,E),U){for(const we in U)we!=="value"&&!Do(we)&&r(D,we,null,U[we],N,p.children,E,b,L);"value"in U&&r(D,"value",null,U.value),(S=U.onVnodeBeforeMount)&&cn(S,E,p)}se&&as(p,null,E,"beforeMount");const Ae=(!b||b&&!b.pendingBranch)&&Y&&!Y.persisted;Ae&&Y.beforeEnter(D),s(D,m,v),((S=U&&U.onVnodeMounted)||Ae||se)&&bt(()=>{S&&cn(S,E,p),Ae&&Y.enter(D),se&&as(p,null,E,"mounted")},b)},de=(p,m,v,E,b)=>{if(v&&d(p,v),E)for(let N=0;N<E.length;N++)d(p,E[N]);if(b){let N=b.subTree;if(m===N){const M=b.vnode;de(p,M,M.scopeId,M.slotScopeIds,b.parent)}}},$=(p,m,v,E,b,N,M,R,D=0)=>{for(let S=D;S<p.length;S++){const j=p[S]=R?Kn(p[S]):ln(p[S]);_(null,j,m,v,E,b,N,M,R)}},be=(p,m,v,E,b,N,M)=>{const R=m.el=p.el;let{patchFlag:D,dynamicChildren:S,dirs:j}=m;D|=p.patchFlag&16;const U=p.props||Ne,K=m.props||Ne;let Y;v&&cs(v,!1),(Y=K.onVnodeBeforeUpdate)&&cn(Y,v,m,p),j&&as(m,p,v,"beforeUpdate"),v&&cs(v,!0);const se=b&&m.type!=="foreignObject";if(S?_e(p.dynamicChildren,S,R,v,E,se,N):M||Ee(p,m,R,null,v,E,se,N,!1),D>0){if(D&16)at(R,m,U,K,v,E,b);else if(D&2&&U.class!==K.class&&r(R,"class",null,K.class,b),D&4&&r(R,"style",U.style,K.style,b),D&8){const Ae=m.dynamicProps;for(let we=0;we<Ae.length;we++){const Be=Ae[we],zt=U[Be],$s=K[Be];($s!==zt||Be==="value")&&r(R,Be,zt,$s,b,p.children,v,E,L)}}D&1&&p.children!==m.children&&u(R,m.children)}else!M&&S==null&&at(R,m,U,K,v,E,b);((Y=K.onVnodeUpdated)||j)&&bt(()=>{Y&&cn(Y,v,m,p),j&&as(m,p,v,"updated")},E)},_e=(p,m,v,E,b,N,M)=>{for(let R=0;R<m.length;R++){const D=p[R],S=m[R],j=D.el&&(D.type===Je||!ds(D,S)||D.shapeFlag&70)?h(D.el):v;_(D,S,j,null,E,b,N,M,!0)}},at=(p,m,v,E,b,N,M)=>{if(v!==E){if(v!==Ne)for(const R in v)!Do(R)&&!(R in E)&&r(p,R,v[R],null,M,m.children,b,N,L);for(const R in E){if(Do(R))continue;const D=E[R],S=v[R];D!==S&&R!=="value"&&r(p,R,S,D,M,m.children,b,N,L)}"value"in E&&r(p,"value",v.value,E.value)}},ct=(p,m,v,E,b,N,M,R,D)=>{const S=m.el=p?p.el:a(""),j=m.anchor=p?p.anchor:a("");let{patchFlag:U,dynamicChildren:K,slotScopeIds:Y}=m;Y&&(R=R?R.concat(Y):Y),p==null?(s(S,v,E),s(j,v,E),$(m.children,v,j,b,N,M,R,D)):U>0&&U&64&&K&&p.dynamicChildren?(_e(p.dynamicChildren,K,v,b,N,M,R),(m.key!=null||b&&m===b.subTree)&&Dm(p,m,!0)):Ee(p,m,v,j,b,N,M,R,D)},Kt=(p,m,v,E,b,N,M,R,D)=>{m.slotScopeIds=R,p==null?m.shapeFlag&512?b.ctx.activate(m,v,E,M,D):In(m,v,E,b,N,M,D):$i(p,m,D)},In=(p,m,v,E,b,N,M)=>{const R=p.component=WT(p,E,b);if(Fa(p)&&(R.ctx.renderer=le),zT(R),R.asyncDep){if(b&&b.registerDep(R,Ve),!p.el){const D=R.subTree=it(nn);w(null,D,m,v)}return}Ve(R,p,m,v,b,N,M)},$i=(p,m,v)=>{const E=m.component=p.component;if(iT(p,m,v))if(E.asyncDep&&!E.asyncResolved){Se(E,m,v);return}else E.next=m,Xw(E.update),E.update();else m.el=p.el,E.vnode=m},Ve=(p,m,v,E,b,N,M)=>{const R=()=>{if(p.isMounted){let{next:j,bu:U,u:K,parent:Y,vnode:se}=p,Ae=j,we;cs(p,!1),j?(j.el=se.el,Se(p,j,M)):j=se,U&&Oo(U),(we=j.props&&j.props.onVnodeBeforeUpdate)&&cn(we,Y,j,se),cs(p,!0);const Be=Vc(p),zt=p.subTree;p.subTree=Be,_(zt,Be,h(zt.el),x(zt),p,b,N),j.el=Be.el,Ae===null&&rT(p,Be.el),K&&bt(K,b),(we=j.props&&j.props.onVnodeUpdated)&&bt(()=>cn(we,Y,j,se),b)}else{let j;const{el:U,props:K}=m,{bm:Y,m:se,parent:Ae}=p,we=xo(m);if(cs(p,!1),Y&&Oo(Y),!we&&(j=K&&K.onVnodeBeforeMount)&&cn(j,Ae,m),cs(p,!0),U&&te){const Be=()=>{p.subTree=Vc(p),te(U,p.subTree,p,b,null)};we?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Be()):Be()}else{const Be=p.subTree=Vc(p);_(null,Be,v,E,p,b,N),m.el=Be.el}if(se&&bt(se,b),!we&&(j=K&&K.onVnodeMounted)){const Be=m;bt(()=>cn(j,Ae,Be),b)}(m.shapeFlag&256||Ae&&xo(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&p.a&&bt(p.a,b),p.isMounted=!0,m=v=E=null}},D=p.effect=new Ku(R,()=>Ju(S),p.scope),S=p.update=()=>D.run();S.id=p.uid,cs(p,!0),S()},Se=(p,m,v)=>{m.component=p;const E=p.vnode.props;p.vnode=m,p.next=null,kT(p,m.props,E,v),PT(p,m.children,v),Ci(),Yf(),Si()},Ee=(p,m,v,E,b,N,M,R,D=!1)=>{const S=p&&p.children,j=p?p.shapeFlag:0,U=m.children,{patchFlag:K,shapeFlag:Y}=m;if(K>0){if(K&128){os(S,U,v,E,b,N,M,R,D);return}else if(K&256){qt(S,U,v,E,b,N,M,R,D);return}}Y&8?(j&16&&L(S,b,N),U!==S&&u(v,U)):j&16?Y&16?os(S,U,v,E,b,N,M,R,D):L(S,b,N,!0):(j&8&&u(v,""),Y&16&&$(U,v,E,b,N,M,R,D))},qt=(p,m,v,E,b,N,M,R,D)=>{p=p||Xs,m=m||Xs;const S=p.length,j=m.length,U=Math.min(S,j);let K;for(K=0;K<U;K++){const Y=m[K]=D?Kn(m[K]):ln(m[K]);_(p[K],Y,v,null,b,N,M,R,D)}S>j?L(p,b,N,!0,!1,U):$(m,v,E,b,N,M,R,D,U)},os=(p,m,v,E,b,N,M,R,D)=>{let S=0;const j=m.length;let U=p.length-1,K=j-1;for(;S<=U&&S<=K;){const Y=p[S],se=m[S]=D?Kn(m[S]):ln(m[S]);if(ds(Y,se))_(Y,se,v,null,b,N,M,R,D);else break;S++}for(;S<=U&&S<=K;){const Y=p[U],se=m[K]=D?Kn(m[K]):ln(m[K]);if(ds(Y,se))_(Y,se,v,null,b,N,M,R,D);else break;U--,K--}if(S>U){if(S<=K){const Y=K+1,se=Y<j?m[Y].el:E;for(;S<=K;)_(null,m[S]=D?Kn(m[S]):ln(m[S]),v,se,b,N,M,R,D),S++}}else if(S>K)for(;S<=U;)It(p[S],b,N,!0),S++;else{const Y=S,se=S,Ae=new Map;for(S=se;S<=K;S++){const Nt=m[S]=D?Kn(m[S]):ln(m[S]);Nt.key!=null&&Ae.set(Nt.key,S)}let we,Be=0;const zt=K-se+1;let $s=!1,Vf=0;const Hi=new Array(zt);for(S=0;S<zt;S++)Hi[S]=0;for(S=Y;S<=U;S++){const Nt=p[S];if(Be>=zt){It(Nt,b,N,!0);continue}let an;if(Nt.key!=null)an=Ae.get(Nt.key);else for(we=se;we<=K;we++)if(Hi[we-se]===0&&ds(Nt,m[we])){an=we;break}an===void 0?It(Nt,b,N,!0):(Hi[an-se]=S+1,an>=Vf?Vf=an:$s=!0,_(Nt,m[an],v,null,b,N,M,R,D),Be++)}const Bf=$s?UT(Hi):Xs;for(we=Bf.length-1,S=zt-1;S>=0;S--){const Nt=se+S,an=m[Nt],$f=Nt+1<j?m[Nt+1].el:E;Hi[S]===0?_(null,an,v,$f,b,N,M,R,D):$s&&(we<0||S!==Bf[we]?Wt(an,v,$f,2):we--)}}},Wt=(p,m,v,E,b=null)=>{const{el:N,type:M,transition:R,children:D,shapeFlag:S}=p;if(S&6){Wt(p.component.subTree,m,v,E);return}if(S&128){p.suspense.move(m,v,E);return}if(S&64){M.move(p,m,v,le);return}if(M===Je){s(N,m,v);for(let U=0;U<D.length;U++)Wt(D[U],m,v,E);s(p.anchor,m,v);return}if(M===Mo){I(p,m,v);return}if(E!==2&&S&1&&R)if(E===0)R.beforeEnter(N),s(N,m,v),bt(()=>R.enter(N),b);else{const{leave:U,delayLeave:K,afterLeave:Y}=R,se=()=>s(N,m,v),Ae=()=>{U(N,()=>{se(),Y&&Y()})};K?K(N,se,Ae):Ae()}else s(N,m,v)},It=(p,m,v,E=!1,b=!1)=>{const{type:N,props:M,ref:R,children:D,dynamicChildren:S,shapeFlag:j,patchFlag:U,dirs:K}=p;if(R!=null&&xl(R,null,v,p,!0),j&256){m.ctx.deactivate(p);return}const Y=j&1&&K,se=!xo(p);let Ae;if(se&&(Ae=M&&M.onVnodeBeforeUnmount)&&cn(Ae,m,p),j&6)T(p.component,v,E);else{if(j&128){p.suspense.unmount(v,E);return}Y&&as(p,null,m,"beforeUnmount"),j&64?p.type.remove(p,m,v,b,le,E):S&&(N!==Je||U>0&&U&64)?L(S,m,v,!1,!0):(N===Je&&U&384||!b&&j&16)&&L(D,m,v),E&&Bs(p)}(se&&(Ae=M&&M.onVnodeUnmounted)||Y)&&bt(()=>{Ae&&cn(Ae,m,p),Y&&as(p,null,m,"unmounted")},v)},Bs=p=>{const{type:m,el:v,anchor:E,transition:b}=p;if(m===Je){uo(v,E);return}if(m===Mo){O(p);return}const N=()=>{i(v),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(p.shapeFlag&1&&b&&!b.persisted){const{leave:M,delayLeave:R}=b,D=()=>M(v,N);R?R(p.el,N,D):D()}else N()},uo=(p,m)=>{let v;for(;p!==m;)v=f(p),i(p),p=v;i(m)},T=(p,m,v)=>{const{bum:E,scope:b,update:N,subTree:M,um:R}=p;E&&Oo(E),b.stop(),N&&(N.active=!1,It(M,p,m,v)),R&&bt(R,m),bt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},L=(p,m,v,E=!1,b=!1,N=0)=>{for(let M=N;M<p.length;M++)It(p[M],m,v,E,b)},x=p=>p.shapeFlag&6?x(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),H=(p,m,v)=>{p==null?m._vnode&&It(m._vnode,null,null,!0):_(m._vnode||null,p,m,null,null,null,v),Yf(),fm(),m._vnode=p},le={p:_,um:It,m:Wt,r:Bs,mt:In,mc:$,pc:Ee,pbc:_e,n:x,o:t};let Le,te;return e&&([Le,te]=e(le)),{render:H,hydrate:Le,createApp:MT(H,Le)}}function cs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Dm(t,e,n=!1){const s=t.children,i=e.children;if(X(s)&&X(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Kn(i[r]),a.el=o.el),n||Dm(o,a)),a.type===Ba&&(a.el=o.el)}}function UT(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const VT=t=>t.__isTeleport,Je=Symbol(void 0),Ba=Symbol(void 0),nn=Symbol(void 0),Mo=Symbol(void 0),sr=[];let Yt=null;function Ce(t=!1){sr.push(Yt=t?null:[])}function BT(){sr.pop(),Yt=sr[sr.length-1]||null}let Er=1;function rd(t){Er+=t}function Om(t){return t.dynamicChildren=Er>0?Yt||Xs:null,BT(),Er>0&&Yt&&Yt.push(t),t}function Ue(t,e,n,s,i,r){return Om(ve(t,e,n,s,i,r,!0))}function Ai(t,e,n,s,i){return Om(it(t,e,n,s,i,!0))}function Ml(t){return t?t.__v_isVNode===!0:!1}function ds(t,e){return t.type===e.type&&t.key===e.key}const $a="__vInternal",Pm=({key:t})=>t??null,Lo=({ref:t,ref_key:e,ref_for:n})=>t!=null?ze(t)||st(t)||ee(t)?{i:Ut,r:t,k:e,f:!!n}:t:null;function ve(t,e=null,n=null,s=0,i=null,r=t===Je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pm(e),ref:e&&Lo(e),scopeId:La,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ut};return a?(rh(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),Er>0&&!o&&Yt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Yt.push(c),c}const it=$T;function $T(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===TT)&&(t=nn),Ml(t)){const a=Zn(t,e,!0);return n&&rh(a,n),Er>0&&!r&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag|=-2,a}if(XT(t)&&(t=t.__vccOpts),e){e=HT(e);let{class:a,style:c}=e;a&&!ze(a)&&(e.class=Na(a)),Me(c)&&(nm(c)&&!X(c)&&(c=vt({},c)),e.style=Uu(c))}const o=ze(t)?1:oT(t)?128:VT(t)?64:Me(t)?4:ee(t)?2:0;return ve(t,e,n,s,i,o,r,!0)}function HT(t){return t?nm(t)||$a in t?vt({},t):t:null}function Zn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?jT(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Pm(a),ref:e&&e.ref?n&&i?X(i)?i.concat(Lo(e)):[i,Lo(e)]:Lo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zn(t.ssContent),ssFallback:t.ssFallback&&Zn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Rn(t=" ",e=0){return it(Ba,null,t,e)}function Ht(t="",e=!1){return e?(Ce(),Ai(nn,null,t)):it(nn,null,t)}function ln(t){return t==null||typeof t=="boolean"?it(nn):X(t)?it(Je,null,t.slice()):typeof t=="object"?Kn(t):it(Ba,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zn(t)}function rh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),rh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!($a in e)?e._ctx=Ut:i===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:Ut},n=32):(e=String(e),s&64?(n=16,e=[Rn(e)]):n=8);t.children=e,t.shapeFlag|=n}function jT(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Na([e.class,s.class]));else if(i==="style")e.style=Uu([e.style,s.style]);else if(ka(i)){const r=e[i],o=s[i];o&&r!==o&&!(X(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function cn(t,e,n,s=null){$t(t,e,7,[n,s])}const KT=km();let qT=0;function WT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||KT,r={uid:qT++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new jg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sm(s,i),emitsOptions:pm(s,i),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:s.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=eT.bind(null,r),t.ce&&t.ce(r),r}let je=null;const $r=()=>je||Ut,li=t=>{je=t,t.scope.on()},Ts=()=>{je&&je.scope.off(),je=null};function xm(t){return t.vnode.shapeFlag&4}let wr=!1;function zT(t,e=!1){wr=e;const{props:n,children:s}=t.vnode,i=xm(t);NT(t,n,i,e),OT(t,s);const r=i?GT(t,e):void 0;return wr=!1,r}function GT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qu(new Proxy(t.ctx,IT));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?YT(t):null;li(t),Ci();const r=zn(s,t,0,[t.props,i]);if(Si(),Ts(),Vg(r)){if(r.then(Ts,Ts),e)return r.then(o=>{od(t,o,e)}).catch(o=>{xa(o,t,0)});t.asyncDep=r}else od(t,r,e)}else Mm(t,e)}function od(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=am(e)),Mm(t,n)}let ad;function Mm(t,e,n){const s=t.type;if(!t.render){if(!e&&ad&&!s.render){const i=s.template||sh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=vt(vt({isCustomElement:r,delimiters:a},o),c);s.render=ad(i,l)}}t.render=s.render||tn}li(t),Ci(),bT(t),Si(),Ts()}function QT(t){return new Proxy(t.attrs,{get(e,n){return At(t,"get","$attrs"),e[n]}})}function YT(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=QT(t))},slots:t.slots,emit:t.emit,expose:e}}function Ha(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(am(Qu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in nr)return nr[n](t)},has(e,n){return n in e||n in nr}}))}function XT(t){return ee(t)&&"__vccOpts"in t}const Te=(t,e)=>Gw(t,e,wr);function Lm(t,e,n){const s=arguments.length;return s===2?Me(e)&&!X(e)?Ml(e)?it(t,null,[e]):it(t,e):it(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ml(n)&&(n=[n]),it(t,e,n))}const Fm=Symbol(""),JT=()=>Ot(Fm),ZT="3.2.47",eI="http://www.w3.org/2000/svg",ps=typeof document<"u"?document:null,cd=ps&&ps.createElement("template"),tI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?ps.createElementNS(eI,t):ps.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ps.createTextNode(t),createComment:t=>ps.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ps.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{cd.innerHTML=s?`<svg>${t}</svg>`:t;const a=cd.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function nI(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function sI(t,e,n){const s=t.style,i=ze(n);if(n&&!i){if(e&&!ze(e))for(const r in e)n[r]==null&&Ll(s,r,"");for(const r in n)Ll(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const ld=/\s*!important$/;function Ll(t,e,n){if(X(n))n.forEach(s=>Ll(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=iI(t,e);ld.test(n)?t.setProperty(bi(s),n.replace(ld,""),"important"):t[s]=n}}const ud=["Webkit","Moz","ms"],Hc={};function iI(t,e){const n=Hc[e];if(n)return n;let s=ai(e);if(s!=="filter"&&s in t)return Hc[e]=s;s=Hg(s);for(let i=0;i<ud.length;i++){const r=ud[i]+s;if(r in t)return Hc[e]=r}return e}const hd="http://www.w3.org/1999/xlink";function rI(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hd,e.slice(6,e.length)):t.setAttributeNS(hd,e,n);else{const r=aw(e);n==null||r&&!Lg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function oI(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Lg(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ks(t,e,n,s){t.addEventListener(e,n,s)}function aI(t,e,n,s){t.removeEventListener(e,n,s)}function cI(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=lI(e);if(s){const l=r[e]=fI(s,i);Ks(t,a,l,c)}else o&&(aI(t,a,o,c),r[e]=void 0)}}const fd=/(?:Once|Passive|Capture)$/;function lI(t){let e;if(fd.test(t)){e={};let s;for(;s=t.match(fd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bi(t.slice(2)),e]}let jc=0;const uI=Promise.resolve(),hI=()=>jc||(uI.then(()=>jc=0),jc=Date.now());function fI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$t(dI(s,n.value),e,5,[s])};return n.value=t,n.attached=hI(),n}function dI(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const dd=/^on[a-z]/,pI=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?nI(t,s,i):e==="style"?sI(t,n,s):ka(e)?Vu(e)||cI(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gI(t,e,s,i))?oI(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),rI(t,e,s,i))};function gI(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&dd.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||dd.test(e)&&ze(n)?!1:e in t}function Um(t){const e=$r();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Ul(r,i))},s=()=>{const i=t(e.proxy);Fl(e.subTree,i),n(i)};cT(s),eh(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),th(()=>i.disconnect())})}function Fl(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Fl(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Ul(t.el,e);else if(t.type===Je)t.children.forEach(n=>Fl(n,e));else if(t.type===Mo){let{el:n,anchor:s}=t;for(;n&&(Ul(n,e),n!==s);)n=n.nextSibling}}function Ul(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const mI={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};fT.props;const pd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>Oo(e,n):e};function _I(t){t.target.composing=!0}function gd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ja={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=pd(i);const r=s||i.props&&i.props.type==="number";Ks(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Tl(a)),t._assign(a)}),n&&Ks(t,"change",()=>{t.value=t.value.trim()}),e||(Ks(t,"compositionstart",_I),Ks(t,"compositionend",gd),Ks(t,"change",gd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=pd(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Tl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},yI=["ctrl","shift","alt","meta"],vI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>yI.some(n=>t[`${n}Key`]&&!e.includes(n))},Ka=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=vI[e[i]];if(r&&r(n,e))return}return t(n,...s)},EI=vt({patchProp:pI},tI);let md;function wI(){return md||(md=LT(EI))}const TI=(...t)=>{const e=wI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=II(s);if(!i)return;const r=e._component;!ee(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function II(t){return ze(t)?document.querySelector(t):t}var bI=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const CI=Symbol();var _d;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(_d||(_d={}));function SI(){const t=gw(!0),e=t.run(()=>Bt({}));let n=[],s=[];const i=Qu({install(r){i._a=r,r.provide(CI,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!bI?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw Ri(e)},Ri=function(t){return new Error("Firebase Database ("+Vm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},AI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},qa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new RI;const f=r<<2|a>>4;if(s.push(f),l!==64){const d=a<<4&240|l>>2;if(s.push(d),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $m=function(t){const e=Bm(t);return qa.encodeByteArray(e,!0)},Wo=function(t){return $m(t).replace(/\./g,"")},zo=function(t){try{return qa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){return Hm(void 0,t)}function Hm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!kI(n)||(t[n]=Hm(t[n],e[n]));return t}function kI(t){return t!=="__proto__"}/**
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
 */function DI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const OI=()=>DI().__FIREBASE_DEFAULTS__,PI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zo(t[1]);return e&&JSON.parse(e)},oh=()=>{try{return OI()||PI()||xI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},MI=t=>{var e,n;return(n=(e=oh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},LI=t=>{const e=MI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},FI=()=>{var t;return(t=oh())===null||t===void 0?void 0:t.config},UI=t=>{var e;return(e=oh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function VI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Wo(JSON.stringify(n)),Wo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ah(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function BI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Km(){return Vm.NODE_ADMIN===!0}function qm(){try{return typeof indexedDB=="object"}catch{return!1}}function $I(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="FirebaseError";class Vn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=HI,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?jI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vn(i,a,s)}}function jI(t,e){return t.replace(KI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const KI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ir(zo(r[0])||""),n=Ir(zo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},qI=function(t){const e=Wm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},WI=function(t){const e=Wm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ui(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Go(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Vl(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(vd(r)&&vd(o)){if(!Vl(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function vd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function GI(t,e){const n=new QI(t,e);return n.subscribe.bind(n)}class QI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");YI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Kc),i.error===void 0&&(i.error=Kc),i.complete===void 0&&(i.complete=Kc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kc(){}function XI(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,P(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wa=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Rt(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Tr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tb(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:eb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eb(t){return t===us?void 0:t}function tb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const sb={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},ib=he.INFO,rb={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},ob=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=rb[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hr{constructor(e){this.name=e,this._logLevel=ib,this._logHandler=ob,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const ab=(t,e)=>e.some(n=>t instanceof n);let Ed,wd;function cb(){return Ed||(Ed=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lb(){return wd||(wd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zm=new WeakMap,Bl=new WeakMap,Gm=new WeakMap,qc=new WeakMap,lh=new WeakMap;function ub(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Gn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zm.set(n,t)}).catch(()=>{}),lh.set(e,t),e}function hb(t){if(Bl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Bl.set(t,e)}let $l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fb(t){$l=t($l)}function db(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Wc(this),e,...n);return Gm.set(s,e.sort?e.sort():[e]),Gn(s)}:lb().includes(t)?function(...e){return t.apply(Wc(this),e),Gn(zm.get(this))}:function(...e){return Gn(t.apply(Wc(this),e))}}function pb(t){return typeof t=="function"?db(t):(t instanceof IDBTransaction&&hb(t),ab(t,cb())?new Proxy(t,$l):t)}function Gn(t){if(t instanceof IDBRequest)return ub(t);if(qc.has(t))return qc.get(t);const e=pb(t);return e!==t&&(qc.set(t,e),lh.set(e,t)),e}const Wc=t=>lh.get(t);function gb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Gn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Gn(o.result),c.oldVersion,c.newVersion,Gn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const mb=["get","getKey","getAll","getAllKeys","count"],_b=["put","add","delete","clear"],zc=new Map;function Td(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zc.get(e))return zc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=_b.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||mb.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return zc.set(e,r),r}fb(t=>({...t,get:(e,n,s)=>Td(e,n)||t.get(e,n,s),has:(e,n)=>!!Td(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function vb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hl="@firebase/app",Id="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Hr("@firebase/app"),Eb="@firebase/app-compat",wb="@firebase/analytics-compat",Tb="@firebase/analytics",Ib="@firebase/app-check-compat",bb="@firebase/app-check",Cb="@firebase/auth",Sb="@firebase/auth-compat",Ab="@firebase/database",Rb="@firebase/database-compat",Nb="@firebase/functions",kb="@firebase/functions-compat",Db="@firebase/installations",Ob="@firebase/installations-compat",Pb="@firebase/messaging",xb="@firebase/messaging-compat",Mb="@firebase/performance",Lb="@firebase/performance-compat",Fb="@firebase/remote-config",Ub="@firebase/remote-config-compat",Vb="@firebase/storage",Bb="@firebase/storage-compat",$b="@firebase/firestore",Hb="@firebase/firestore-compat",jb="firebase",Kb="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="[DEFAULT]",qb={[Hl]:"fire-core",[Eb]:"fire-core-compat",[Tb]:"fire-analytics",[wb]:"fire-analytics-compat",[bb]:"fire-app-check",[Ib]:"fire-app-check-compat",[Cb]:"fire-auth",[Sb]:"fire-auth-compat",[Ab]:"fire-rtdb",[Rb]:"fire-rtdb-compat",[Nb]:"fire-fn",[kb]:"fire-fn-compat",[Db]:"fire-iid",[Ob]:"fire-iid-compat",[Pb]:"fire-fcm",[xb]:"fire-fcm-compat",[Mb]:"fire-perf",[Lb]:"fire-perf-compat",[Fb]:"fire-rc",[Ub]:"fire-rc-compat",[Vb]:"fire-gcs",[Bb]:"fire-gcs-compat",[$b]:"fire-fst",[Hb]:"fire-fst-compat","fire-js":"fire-js",[jb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new Map,Kl=new Map;function Wb(t,e){try{t.container.addComponent(e)}catch(n){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(Kl.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;Kl.set(e,t);for(const n of Qo.values())Wb(n,t);return!0}function zb(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qn=new Ni("app","Firebase",Gb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=Kb;function Qm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:jl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=FI()),!n)throw Qn.create("no-options");const r=Qo.get(i);if(r){if(Vl(n,r.options)&&Vl(s,r.config))return r;throw Qn.create("duplicate-app",{appName:i})}const o=new nb(i);for(const c of Kl.values())o.addComponent(c);const a=new Qb(n,s,o);return Qo.set(i,a),a}function Ym(t=jl){const e=Qo.get(t);if(!e&&t===jl)return Qm();if(!e)throw Qn.create("no-app",{appName:t});return e}function Pt(t,e,n){var s;let i=(s=qb[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(a.join(" "));return}_n(new rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Yb="firebase-heartbeat-database",Xb=1,br="firebase-heartbeat-store";let Gc=null;function Xm(){return Gc||(Gc=gb(Yb,Xb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(br)}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),Gc}async function Jb(t){try{return(await Xm()).transaction(br).objectStore(br).get(Jm(t))}catch(e){if(e instanceof Vn)Ss.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ss.warn(n.message)}}}async function bd(t,e){try{const s=(await Xm()).transaction(br,"readwrite");return await s.objectStore(br).put(e,Jm(t)),s.done}catch(n){if(n instanceof Vn)Ss.warn(n.message);else{const s=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ss.warn(s.message)}}}function Jm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Zb=1024,e0=30*24*60*60*1e3;class t0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new s0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=e0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cd(),{heartbeatsToSend:n,unsentEntries:s}=n0(this._heartbeatsCache.heartbeats),i=Wo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Cd(){return new Date().toISOString().substring(0,10)}function n0(t,e=Zb){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Sd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class s0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qm()?$I().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Jb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sd(t){return Wo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t){_n(new rn("platform-logger",e=>new yb(e),"PRIVATE")),_n(new rn("heartbeat",e=>new t0(e),"PRIVATE")),Pt(Hl,Id,t),Pt(Hl,Id,"esm2017"),Pt("fire-js","")}i0("");function Zm(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function e_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const r0=e_,t_=new Ni("auth","Firebase",e_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new Hr("@firebase/auth");function o0(t,...e){Yo.logLevel<=he.WARN&&Yo.warn(`Auth (${ki}): ${t}`,...e)}function Fo(t,...e){Yo.logLevel<=he.ERROR&&Yo.error(`Auth (${ki}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t,...e){throw hh(t,...e)}function uh(t,...e){return hh(t,...e)}function a0(t,e,n){const s=Object.assign(Object.assign({},r0()),{[e]:n});return new Ni("auth","Firebase",s).create(e,{appName:t.name})}function hh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return t_.create(t,...e)}function ge(t,e,...n){if(!t)throw hh(e,...n)}function ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fo(e),new Error(e)}function Xo(t,e){t||ir(e)}function c0(){return Rd()==="http:"||Rd()==="https:"}function Rd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(c0()||BI()||"connection"in navigator)?navigator.onLine:!0}function u0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xo(n>e,"Short delay should be less than long delay!"),this.isMobile=ah()||jm()}get(){return l0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t,e){Xo(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=new jr(3e4,6e4);function p0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fh(t,e,n,s,i={}){return s_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ch(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),n_.fetch()(i_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function s_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},f0),e);try{const i=new g0(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw yo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw yo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw yo(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw a0(t,u,l);Ad(t,u)}}catch(i){if(i instanceof Vn)throw i;Ad(t,"network-request-failed",{message:String(i)})}}function i_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?h0(t.config,i):`${t.config.apiScheme}://${i}`}class g0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(uh(this.auth,"network-request-failed")),d0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=uh(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(t,e){return fh(t,"POST","/v1/accounts:delete",e)}async function _0(t,e){return fh(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function y0(t,e=!1){const n=Rt(t),s=await n.getIdToken(e),i=r_(s);ge(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:rr(Qc(i.auth_time)),issuedAtTime:rr(Qc(i.iat)),expirationTime:rr(Qc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qc(t){return Number(t)*1e3}function r_(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Fo("JWT malformed, contained fewer than 3 sections"),null;try{const i=zo(n);return i?JSON.parse(i):(Fo("Failed to decode base64 JWT payload"),null)}catch(i){return Fo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function v0(t){const e=r_(t);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Vn&&E0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function E0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=rr(this.lastLoginAt),this.creationTime=rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ql(t,_0(n,{idToken:s}));ge(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?b0(r.providerUserInfo):[],a=I0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new o_(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function T0(t){const e=Rt(t);await Jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function I0(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function b0(t){return t.map(e=>{var{providerId:n}=e,s=Zm(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C0(t,e){const n=await s_(t,{},async()=>{const s=ch({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=i_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",n_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):v0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ge(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await C0(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Cr;return s&&(ge(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ge(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ge(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){ge(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ti{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Zm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new w0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new o_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ql(this,this.stsTokenManager.getToken(this.auth,e));return ge(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return y0(this,e)}reload(){return T0(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ti(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Jo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ql(this,m0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:O,isAnonymous:z,providerData:ne,stsTokenManager:de}=n;ge(I&&de,e,"internal-error");const $=Cr.fromJSON(this.name,de);ge(typeof I=="string",e,"internal-error"),Hn(h,e.name),Hn(f,e.name),ge(typeof O=="boolean",e,"internal-error"),ge(typeof z=="boolean",e,"internal-error"),Hn(d,e.name),Hn(g,e.name),Hn(_,e.name),Hn(y,e.name),Hn(w,e.name),Hn(k,e.name);const be=new ti({uid:I,auth:e,email:f,emailVerified:O,displayName:h,isAnonymous:z,photoURL:g,phoneNumber:d,tenantId:_,stsTokenManager:$,createdAt:w,lastLoginAt:k});return ne&&Array.isArray(ne)&&(be.providerData=ne.map(_e=>Object.assign({},_e))),y&&(be._redirectEventId=y),be}static async _fromIdTokenResponse(e,n,s=!1){const i=new Cr;i.updateFromServerResponse(n);const r=new ti({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Jo(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new Map;function ms(t){Xo(t instanceof Function,"Expected a class definition");let e=Nd.get(t);return e?(Xo(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a_.type="NONE";const kd=a_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t,e,n){return`firebase:${t}:${e}:${n}`}class ni{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Yc(this.userKey,i.apiKey,r),this.fullPersistenceKey=Yc("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ti._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ni(ms(kd),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||ms(kd);const o=Yc(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ti._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ni(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new ni(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(S0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(D0(e))return"Blackberry";if(O0(e))return"Webos";if(A0(e))return"Safari";if((e.includes("chrome/")||R0(e))&&!e.includes("edge/"))return"Chrome";if(k0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function S0(t=mn()){return/firefox\//i.test(t)}function A0(t=mn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function R0(t=mn()){return/crios\//i.test(t)}function N0(t=mn()){return/iemobile/i.test(t)}function k0(t=mn()){return/android/i.test(t)}function D0(t=mn()){return/blackberry/i.test(t)}function O0(t=mn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t,e=[]){let n;switch(t){case"Browser":n=Dd(mn());break;case"Worker":n=`${Dd(mn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${s}`}async function l_(t,e){return fh(t,"GET","/v2/recaptchaConfig",p0(t,e))}function Od(t){return t!==void 0&&t.enterprise!==void 0}class u_{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function x0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=uh("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",P0().appendChild(s)})}const M0="https://www.google.com/recaptcha/enterprise.js?render=",L0="recaptcha-enterprise";class F0{constructor(e){this.type=L0,this.auth=h_(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{l_(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new u_(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;Od(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(l=>{a(l)})}catch(l){a(l)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Od(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}x0(M0+a).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class U0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pd(this),this.idTokenSubscription=new Pd(this),this.beforeStateQueue=new U0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ms(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ni.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=u0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Rt(e):null;return n&&ge(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ms(e))})}async initializeRecaptchaConfig(){const e=await l_(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new u_(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new F0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ms(e)||this._popupRedirectResolver;ge(n,this,"argument-error"),this.redirectPersistenceManager=await ni.create(this,[ms(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ge(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=c_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&o0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function h_(t){return Rt(t)}class Pd{constructor(e){this.auth=e,this.observer=null,this.addObserver=GI(n=>this.observer=n)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function B0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ms);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new jr(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new jr(2e3,1e4);/**
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
 */new jr(3e4,6e4);/**
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
 */new jr(5e3,15e3);var xd="@firebase/auth",Md="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function j0(t){_n(new rn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ge(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),ge(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:c_(t)},l=new V0(s,i,r,c);return B0(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_n(new rn("auth-internal",e=>{const n=h_(e.getProvider("auth").getImmediate());return(s=>new $0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(xd,Md,H0(t)),Pt(xd,Md,"esm2017")}/**
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
 */const K0=5*60;UI("authIdTokenMaxAge");j0("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=new Map,W0={activated:!1,tokenObservers:[]};function yn(t){return q0.get(t)||Object.assign({},W0)}const Ld={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Tr,await G0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Tr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function G0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Zo=new Ni("appCheck","AppCheck",Q0);function Y0(t){if(!yn(t).activated)throw Zo.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="firebase-app-check-database",J0=1,Wl="firebase-app-check-store";let vo=null;function Z0(){return vo||(vo=new Promise((t,e)=>{try{const n=indexedDB.open(X0,J0);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Zo.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Wl,{keyPath:"compositeKey"})}}}catch(n){e(Zo.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),vo)}function eC(t,e){return tC(nC(t),e)}async function tC(t,e){const s=(await Z0()).transaction(Wl,"readwrite"),r=s.objectStore(Wl).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var l;a(Zo.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function nC(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Hr("@firebase/app-check");function Fd(t,e){return qm()?eC(t,e).catch(n=>{zl.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC={error:"UNKNOWN_ERROR"};function iC(t){return qa.encodeString(JSON.stringify(t),!1)}async function Gl(t,e=!1){const n=t.app;Y0(n);const s=yn(n);let i=s.token,r;if(i&&!Yi(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(Yi(c)?i=c:await Fd(n,void 0))}if(!e&&i&&Yi(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await yn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?zl.warn(c.message):zl.error(c),r=c}let a;return i?r?Yi(i)?a={token:i.token,internalError:r}:a=Vd(r):(a={token:i.token},s.token=i,await Fd(n,i)):a=Vd(r),o&&aC(n,a),a}function rC(t,e,n,s){const{app:i}=t,r=yn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Yi(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Ud(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Ud(t))}function f_(t,e){const n=yn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Ud(t){const{app:e}=t,n=yn(e);let s=n.tokenRefresher;s||(s=oC(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function oC(t){const{app:e}=t;return new z0(async()=>{const n=yn(e);let s;if(n.token?s=await Gl(t,!0):s=await Gl(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=yn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Ld.RETRIAL_MIN_WAIT,Ld.RETRIAL_MAX_WAIT)}function aC(t,e){const n=yn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Yi(t){return t.expireTimeMillis-Date.now()>0}function Vd(t){return{token:iC(sC),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=yn(this.app);for(const n of e)f_(this.app,n.next);return Promise.resolve()}}function lC(t,e){return new cC(t,e)}function uC(t){return{getToken:e=>Gl(t,e),addTokenListener:e=>rC(t,"INTERNAL",e),removeTokenListener:e=>f_(t.app,e)}}const hC="@firebase/app-check",fC="0.6.5",dC="app-check",Bd="app-check-internal";function pC(){_n(new rn(dC,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return lC(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Bd).initialize()})),_n(new rn(Bd,t=>{const e=t.getProvider("app-check").getImmediate();return uC(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Pt(hC,fC)}pC();var gC="firebase",mC="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(gC,mC,"app");const d_=Symbol("firebaseApp");function dh(t){return $r()&&Ot(d_,null)||Ym(t)}const fn=()=>{};function ph(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function _C(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Ps(t){return!!t&&typeof t=="object"}const yC=Object.prototype;function vC(t){return Ps(t)&&Object.getPrototypeOf(t)===yC}function gh(t){return Ps(t)&&t.type==="document"}function p_(t){return Ps(t)&&t.type==="collection"}function EC(t){return gh(t)||p_(t)}function wC(t){return Ps(t)&&t.type==="query"}function TC(t){return Ps(t)&&"ref"in t}function IC(t){return Ps(t)&&typeof t.bucket=="string"}function bC(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function CC(){return!!($r()&&Ot(Fm,null))}const $d="@firebase/database",Hd="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g_="";function SC(t){g_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ir(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Bn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new AC(e)}}catch{}return new RC},_s=m_("localStorage"),Ql=m_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Hr("@firebase/database"),NC=function(){let t=1;return function(){return t++}}(),__=function(t){const e=JI(t),n=new zI;n.update(e);const s=n.digest();return qa.encodeByteArray(s)},Kr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Kr.apply(null,s):typeof s=="object"?e+=nt(s):e+=s,e+=" "}return e};let Is=null,jd=!0;const kC=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(si.logLevel=he.VERBOSE,Is=si.log.bind(si),e&&Ql.set("logging_enabled",!0)):typeof t=="function"?Is=t:(Is=null,Ql.remove("logging_enabled"))},ht=function(...t){if(jd===!0&&(jd=!1,Is===null&&Ql.get("logging_enabled")===!0&&kC(!0)),Is){const e=Kr.apply(null,t);Is(e)}},qr=function(t){return function(...e){ht(t,...e)}},Yl=function(...t){const e="FIREBASE INTERNAL ERROR: "+Kr(...t);si.error(e)},As=function(...t){const e=`FIREBASE FATAL ERROR: ${Kr(...t)}`;throw si.error(e),new Error(e)},xt=function(...t){const e="FIREBASE WARNING: "+Kr(...t);si.warn(e)},DC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},y_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},OC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hi="[MIN_NAME]",Rs="[MAX_NAME]",Di=function(t,e){if(t===e)return 0;if(t===hi||e===Rs)return-1;if(e===hi||t===Rs)return 1;{const n=Kd(t),s=Kd(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},PC=function(t,e){return t===e?0:t<e?-1:1},ji=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},mh=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=nt(e[s]),n+=":",n+=mh(t[e[s]]);return n+="}",n},v_=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function jt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const E_=function(t){P(!y_(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},xC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},MC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},LC=new RegExp("^-?(0*)\\d{1,10}$"),FC=-2147483648,UC=2147483647,Kd=function(t){if(LC.test(t)){const e=Number(t);if(e>=FC&&e<=UC)return e}return null},Wr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xt("Exception was thrown by user callback.",n),e},Math.floor(0))}},VC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},or=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class BC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xt(e)}}class Xl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="5",w_="v",T_="s",I_="r",b_="f",C_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,S_="ls",A_="p",Jl="ac",R_="websocket",N_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_s.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_s.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function jC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function k_(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let s;if(e===R_)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===N_)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jC(t)&&(n.ns=t.namespace);const i=[];return jt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.counters_={}}incrementCounter(e,n=1){Bn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return NI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc={},Jc={};function yh(t){const e=t.toString();return Xc[e]||(Xc[e]=new KC),Xc[e]}function qC(t,e){const n=t.toString();return Jc[n]||(Jc[n]=e()),Jc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Wr(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="start",zC="close",GC="pLPCommand",QC="pRTLPCB",D_="id",O_="pw",P_="ser",YC="cb",XC="seg",JC="ts",ZC="d",eS="dframe",x_=1870,M_=30,tS=x_-M_,nS=25e3,sS=3e4;class Gs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qr(e),this.stats_=yh(n),this.urlFn=c=>(this.appCheckToken&&(c[Jl]=this.appCheckToken),k_(n,N_,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sS)),OC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vh((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qd)this.id=a,this.password=c;else if(o===zC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[qd]="t",s[P_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[YC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[w_]=_h,this.transportSessionId&&(s[T_]=this.transportSessionId),this.lastSessionId&&(s[S_]=this.lastSessionId),this.applicationId&&(s[A_]=this.applicationId),this.appCheckToken&&(s[Jl]=this.appCheckToken),typeof location<"u"&&location.hostname&&C_.test(location.hostname)&&(s[I_]=b_);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gs.forceAllow_=!0}static forceDisallow(){Gs.forceDisallow_=!0}static isAvailable(){return Gs.forceAllow_?!0:!Gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!xC()&&!MC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$m(n),i=v_(s,tS);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[eS]="t",s[D_]=e,s[O_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class vh{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=NC(),window[GC+this.uniqueCallbackIdentifier]=e,window[QC+this.uniqueCallbackIdentifier]=n,this.myIFrame=vh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ht("frame writing exception"),a.stack&&ht(a.stack),ht(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[D_]=this.myID,e[O_]=this.myPW,e[P_]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+M_+s.length<=x_;){const o=this.pendingSegs.shift();s=s+"&"+XC+i+"="+o.seg+"&"+JC+i+"="+o.ts+"&"+ZC+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(nS)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=16384,rS=45e3;let ea=null;typeof MozWebSocket<"u"?ea=MozWebSocket:typeof WebSocket<"u"&&(ea=WebSocket);class Qt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qr(this.connId),this.stats_=yh(n),this.connURL=Qt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[w_]=_h,typeof location<"u"&&location.hostname&&C_.test(location.hostname)&&(o[I_]=b_),n&&(o[T_]=n),s&&(o[S_]=s),i&&(o[Jl]=i),r&&(o[A_]=r),k_(e,R_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_s.set("previous_websocket_failure",!0);try{let s;Km(),this.mySock=new ea(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ea!==null&&!Qt.forceDisallow_}static previouslyFailed(){return _s.isInMemoryStorage||_s.get("previous_websocket_failure")===!0}markConnectionHealthy(){_s.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ir(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=v_(n,iS);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gs,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qt&&Qt.isAvailable();let s=n&&!Qt.previouslyFailed();if(e.webSocketOnly&&(n||xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Qt];else{const i=this.transports_=[];for(const r of Sr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Sr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Sr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=6e4,aS=5e3,cS=10*1024,lS=100*1024,Zc="t",Wd="d",uS="s",zd="r",hS="e",Gd="o",Qd="a",Yd="n",Xd="p",fS="h";class dS{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qr("c:"+this.id+":"),this.transportManager_=new Sr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=or(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>lS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zc in e){const n=e[Zc];n===Qd?this.upgradeIfSecondaryHealthy_():n===zd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ji("t",e),s=ji("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ji("t",e),s=ji("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ji(Zc,e);if(Wd in e){const s=e[Wd];if(n===fS){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Yd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===uS?this.onConnectionShutdown_(s):n===zd?this.onReset_(s):n===hS?Yl("Server Error: "+s):n===Gd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_h!==s&&xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),or(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(oS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):or(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(aS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_s.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends F_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ah()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ta}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=32,Zd=768;class Oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ie(){return new Oe("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function es(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Oe(t.pieces_,e)}function U_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function V_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function B_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Oe(e,0)}function Ze(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Oe(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function Vt(t,e){const n=ae(t),s=ae(e);if(n===null)return e;if(n===s)return Vt(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $_(t,e){if(es(t)!==es(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Xt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(es(t)>es(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class gS{constructor(e,n){this.errorPrefix_=n,this.parts_=V_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Wa(this.parts_[s]);H_(this)}}function mS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wa(e),H_(t)}function _S(t){const e=t.parts_.pop();t.byteLength_-=Wa(e),t.parts_.length>0&&(t.byteLength_-=1)}function H_(t){if(t.byteLength_>Zd)throw new Error(t.errorPrefix_+"has a key path longer than "+Zd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Jd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jd+") or object contains a cycle "+hs(t))}function hs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends F_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Eh}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=1e3,yS=60*5*1e3,ep=30*1e3,vS=1.3,ES=3e4,wS="server_kill",tp=3;class Nn extends L_{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Nn.nextPersistentConnectionId_++,this.log_=qr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ki,this.maxReconnectDelay_=yS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Km())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Eh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ta.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(nt(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Tr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Nn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Bn(e,"w")){const s=ui(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||WI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ep)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=qI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yl("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ki,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ki,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ES&&(this.reconnectDelay_=Ki),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Nn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new dS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{xt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(wS)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&xt(h),c())}}}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yd(this.interruptReasons_)&&(this.reconnectDelay_=Ki,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>mh(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ht("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=tp&&(this.reconnectDelay_=ep,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ht("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=tp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+g_.replace(/\./g,"-")]=1,ah()?e["framework.cordova"]=1:jm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ta.getInstance().currentlyOnline();return yd(this.interruptReasons_)&&e}}Nn.nextPersistentConnectionId_=0;Nn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ce(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ce(hi,e),i=new ce(hi,n);return this.compare(s,i)!==0}minPost(){return ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo;class j_ extends za{static get __EMPTY_NODE(){return Eo}static set __EMPTY_NODE(e){Eo=e}compare(e,n){return Di(e.name,n.name)}isDefinedOn(e){throw Ri("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(Rs,Eo)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,Eo)}toString(){return".key"}}const ii=new j_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Xe.RED,this.left=i??Ct.EMPTY_NODE,this.right=r??Ct.EMPTY_NODE}copy(e,n,s,i,r){return new Xe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xe.RED=!0;Xe.BLACK=!1;class TS{copy(e,n,s,i,r){return this}insert(e,n,s){return new Xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new wo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new wo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new wo(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new TS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t,e){return Di(t.name,e.name)}function wh(t,e){return Di(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl;function bS(t){Zl=t}const K_=function(t){return typeof t=="number"?"number:"+E_(t):"string:"+t},q_=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Bn(e,".sv"),"Priority must be a string or number.")}else P(t===Zl||t.isEmpty(),"priority of unexpected type.");P(t===Zl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let np;class Qe{constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),q_(this.priorityNode_)}static set __childrenNodeConstructor(e){np=e}static get __childrenNodeConstructor(){return np}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ae(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ae(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(P(s!==".priority"||es(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+K_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=E_(this.value_):e+=this.value_,this.lazyHash_=__(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Qe.VALUE_TYPE_ORDER.indexOf(n),r=Qe.VALUE_TYPE_ORDER.indexOf(s);return P(i>=0,"Unknown leaf type: "+n),P(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let W_,z_;function CS(t){W_=t}function SS(t){z_=t}class AS extends za{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Di(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(Rs,new Qe("[PRIORITY-POST]",z_))}makePost(e,n){const s=W_(e);return new ce(n,new Qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const mt=new AS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=Math.log(2);class NS{constructor(e){const n=r=>parseInt(Math.log(r)/RS,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const na=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new Xe(f,h.node,Xe.BLACK,null,null);{const d=parseInt(u/2,10)+c,g=i(c,d),_=i(d+1,l);return h=t[d],f=n?n(h):h,new Xe(f,h.node,Xe.BLACK,g,_)}},r=function(c){let l=null,u=null,h=t.length;const f=function(g,_){const y=h-g,w=h;h-=g;const k=i(y+1,w),I=t[y],O=n?n(I):I;d(new Xe(O,I.node,_,null,k))},d=function(g){l?(l.left=g,l=g):(u=g,l=g)};for(let g=0;g<c.count;++g){const _=c.nextBitIsOne(),y=Math.pow(2,c.count-(g+1));_?f(y,Xe.BLACK):(f(y,Xe.BLACK),f(y,Xe.RED))}return u},o=new NS(t.length),a=r(o);return new Ct(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;const Hs={};class Sn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Hs&&mt,"ChildrenNode.ts has not been loaded"),el=el||new Sn({".priority":Hs},{".priority":mt}),el}get(e){const n=ui(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return Bn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==ii,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ce.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=na(s,e.getCompare()):a=Hs;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Sn(u,l)}addToIndexes(e,n){const s=Go(this.indexes_,(i,r)=>{const o=ui(this.indexSet_,r);if(P(o,"Missing index implementation for "+r),i===Hs)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ce.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),na(a,o.getCompare())}else return Hs;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new ce(e.name,a))),c.insert(e,e.node)}});return new Sn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Go(this.indexes_,i=>{if(i===Hs)return i;{const r=n.get(e.name);return r?i.remove(new ce(e.name,r)):i}});return new Sn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi;class me{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&q_(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return qi||(qi=new me(new Ct(wh),null,Sn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qi}updatePriority(e){return this.children_.isEmpty()?this:new me(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qi:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ce(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?qi:this.priorityNode_;return new me(i,o,r)}}updateChild(e,n){const s=ae(e);if(s===null)return n;{P(ae(e)!==".priority"||es(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ke(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(mt,(o,a)=>{n[o]=a.val(e),s++,r&&me.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+K_(this.getPriority().val())+":"),this.forEachChild(mt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":__(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ce(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ce.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zr?-1:0}withIndex(e){if(e===ii||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new me(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ii||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(mt),i=n.getIterator(mt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ii?null:this.indexMap_.get(e.toString())}}me.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kS extends me{constructor(){super(new Ct(wh),me.EMPTY_NODE,Sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return me.EMPTY_NODE}isEmpty(){return!1}}const zr=new kS;Object.defineProperties(ce,{MIN:{value:new ce(hi,me.EMPTY_NODE)},MAX:{value:new ce(Rs,zr)}});j_.__EMPTY_NODE=me.EMPTY_NODE;Qe.__childrenNodeConstructor=me;bS(zr);SS(zr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=!0;function ft(t,e=null){if(t===null)return me.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qe(n,ft(e))}if(!(t instanceof Array)&&DS){const n=[];let s=!1;if(jt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=ft(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new ce(o,c)))}}),n.length===0)return me.EMPTY_NODE;const r=na(n,IS,o=>o.name,wh);if(s){const o=na(n,mt.getCompare());return new me(r,ft(e),new Sn({".priority":o},{".priority":mt}))}else return new me(r,ft(e),Sn.Default)}else{let n=me.EMPTY_NODE;return jt(t,(s,i)=>{if(Bn(t,s)&&s.substring(0,1)!=="."){const r=ft(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ft(e))}}CS(ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS extends za{constructor(e){super(),this.indexPath_=e,P(!re(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Di(e.name,n.name):r}makePost(e,n){const s=ft(e),i=me.EMPTY_NODE.updateChild(this.indexPath_,s);return new ce(n,i)}maxPost(){const e=me.EMPTY_NODE.updateChild(this.indexPath_,zr);return new ce(Rs,e)}toString(){return V_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS extends za{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Di(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const s=ft(e);return new ce(n,s)}toString(){return".value"}}const xS=new PS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t){return{type:"value",snapshotNode:t}}function LS(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function FS(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function sp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function US(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hi}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===mt}copy(){const e=new Th;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ip(t){const e={};if(t.isDefault())return e;let n;if(t.index_===mt?n="$priority":t.index_===xS?n="$value":t.index_===ii?n="$key":(P(t.index_ instanceof OS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=nt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+nt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=nt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function rp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==mt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends L_{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=qr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=sa.getListenId_(e,s),a={};this.listens_[o]=a;const c=ip(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),ui(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",i(f,null)}})}unlisten(e,n){const s=sa.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ip(e._queryParams),s=e._path.toString(),i=new Tr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ch(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ir(a.responseText)}catch{xt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&xt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.rootNode_=me.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(){return{value:null,children:new Map}}function G_(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ae(e);t.children.has(s)||t.children.set(s,ia());const i=t.children.get(s);e=ke(e),G_(i,e,n)}}function eu(t,e,n){t.value!==null?n(e,t.value):BS(t,(s,i)=>{const r=new Oe(e.toString()+"/"+s);eu(i,r,n)})}function BS(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&jt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=10*1e3,HS=30*1e3,jS=5*60*1e3;class KS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $S(e);const s=op+(HS-op)*Math.random();or(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;jt(e,(i,r)=>{r>0&&Bn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),or(this.reportStats_.bind(this),Math.floor(Math.random()*2*jS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dn||(dn={}));function Q_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Y_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function X_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=dn.ACK_USER_WRITE,this.source=Q_()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Oe(e));return new ra(Ie(),n,this.revert)}}else return P(ae(this.path)===e,"operationForChild called for unrelated child."),new ra(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=dn.OVERWRITE}operationForChild(e){return re(this.path)?new Ns(this.source,Ie(),this.snap.getImmediateChild(e)):new Ns(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=dn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new Oe(e));return n.isEmpty()?null:n.value?new Ns(this.source,Ie(),n.value):new Ar(this.source,Ie(),n)}else return P(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ar(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function qS(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(US(o.childName,o.snapshotNode))}),Wi(t,i,"child_removed",e,s,n),Wi(t,i,"child_added",e,s,n),Wi(t,i,"child_moved",r,s,n),Wi(t,i,"child_changed",e,s,n),Wi(t,i,"value",e,s,n),i}function Wi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>zS(t,a,c)),o.forEach(a=>{const c=WS(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function WS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zS(t,e,n){if(e.childName==null||n.childName==null)throw Ri("Should only compare child_ events.");const s=new ce(e.childName,e.snapshotNode),i=new ce(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t,e){return{eventCache:t,serverCache:e}}function ar(t,e,n,s){return J_(new Ih(e,n,s),t.serverCache)}function Z_(t,e,n,s){return J_(t.eventCache,new Ih(e,n,s))}function tu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ks(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl;const GS=()=>(tl||(tl=new Ct(PC)),tl);class Re{constructor(e,n=GS()){this.value=e,this.children=n}static fromObject(e){let n=new Re(null);return jt(e,(s,i)=>{n=n.set(new Oe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ie(),value:this.value};if(re(e))return null;{const s=ae(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ke(e),n);return r!=null?{path:Ze(new Oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ae(e),s=this.children.get(n);return s!==null?s.subtree(ke(e)):new Re(null)}}set(e,n){if(re(e))return new Re(n,this.children);{const s=ae(e),r=(this.children.get(s)||new Re(null)).set(ke(e),n),o=this.children.insert(s,r);return new Re(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=ae(e),s=this.children.get(n);if(s){const i=s.remove(ke(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Re(null):new Re(this.value,r)}else return this}}get(e){if(re(e))return this.value;{const n=ae(e),s=this.children.get(n);return s?s.get(ke(e)):null}}setTree(e,n){if(re(e))return n;{const s=ae(e),r=(this.children.get(s)||new Re(null)).setTree(ke(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Re(this.value,o)}}fold(e){return this.fold_(Ie(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ze(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ie(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(re(e))return null;{const r=ae(e),o=this.children.get(r);return o?o.findOnPath_(ke(e),Ze(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ie(),n)}foreachOnPath_(e,n,s){if(re(e))return this;{this.value&&s(n,this.value);const i=ae(e),r=this.children.get(i);return r?r.foreachOnPath_(ke(e),Ze(n,i),s):new Re(null)}}foreach(e){this.foreach_(Ie(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ze(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.writeTree_=e}static empty(){return new sn(new Re(null))}}function cr(t,e,n){if(re(e))return new sn(new Re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Vt(i,e);return r=r.updateChild(o,n),new sn(t.writeTree_.set(i,r))}else{const i=new Re(n),r=t.writeTree_.setTree(e,i);return new sn(r)}}}function ap(t,e,n){let s=t;return jt(n,(i,r)=>{s=cr(s,Ze(e,i),r)}),s}function cp(t,e){if(re(e))return sn.empty();{const n=t.writeTree_.setTree(e,new Re(null));return new sn(n)}}function nu(t,e){return xs(t,e)!=null}function xs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Vt(n.path,e)):null}function lp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(mt,(s,i)=>{e.push(new ce(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ce(s,i.value))}),e}function Yn(t,e){if(re(e))return t;{const n=xs(t,e);return n!=null?new sn(new Re(n)):new sn(t.writeTree_.subtree(e))}}function su(t){return t.writeTree_.isEmpty()}function fi(t,e){return ey(Ie(),t.writeTree_,e)}function ey(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ey(Ze(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ze(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t,e){return oy(e,t)}function QS(t,e,n,s,i){P(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=cr(t.visibleWrites,e,n)),t.lastWriteId=s}function YS(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function XS(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&JS(a,s.path)?i=!1:Xt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return ZS(t),!0;if(s.snap)t.visibleWrites=cp(t.visibleWrites,s.path);else{const a=s.children;jt(a,c=>{t.visibleWrites=cp(t.visibleWrites,Ze(s.path,c))})}return!0}else return!1}function JS(t,e){if(t.snap)return Xt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xt(Ze(t.path,n),e))return!0;return!1}function ZS(t){t.visibleWrites=ny(t.allWrites,eA,Ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function eA(t){return t.visible}function ny(t,e,n){let s=sn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Xt(n,o)?(a=Vt(n,o),s=cr(s,a,r.snap)):Xt(o,n)&&(a=Vt(o,n),s=cr(s,Ie(),r.snap.getChild(a)));else if(r.children){if(Xt(n,o))a=Vt(n,o),s=ap(s,a,r.children);else if(Xt(o,n))if(a=Vt(o,n),re(a))s=ap(s,Ie(),r.children);else{const c=ui(r.children,ae(a));if(c){const l=c.getChild(ke(a));s=cr(s,Ie(),l)}}}else throw Ri("WriteRecord should have .snap or .children")}}return s}function sy(t,e,n,s,i){if(!s&&!i){const r=xs(t.visibleWrites,e);if(r!=null)return r;{const o=Yn(t.visibleWrites,e);if(su(o))return n;if(n==null&&!nu(o,Ie()))return null;{const a=n||me.EMPTY_NODE;return fi(o,a)}}}else{const r=Yn(t.visibleWrites,e);if(!i&&su(r))return n;if(!i&&n==null&&!nu(r,Ie()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(Xt(l.path,e)||Xt(e,l.path))},a=ny(t.allWrites,o,e),c=n||me.EMPTY_NODE;return fi(a,c)}}}function tA(t,e,n){let s=me.EMPTY_NODE;const i=xs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(mt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Yn(t.visibleWrites,e);return n.forEachChild(mt,(o,a)=>{const c=fi(Yn(r,new Oe(o)),a);s=s.updateImmediateChild(o,c)}),lp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Yn(t.visibleWrites,e);return lp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function nA(t,e,n,s,i){P(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ze(e,n);if(nu(t.visibleWrites,r))return null;{const o=Yn(t.visibleWrites,r);return su(o)?i.getChild(n):fi(o,i.getChild(n))}}function sA(t,e,n,s){const i=Ze(e,n),r=xs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Yn(t.visibleWrites,i);return fi(o,s.getNode().getImmediateChild(n))}else return null}function iA(t,e){return xs(t.visibleWrites,e)}function rA(t,e,n,s,i,r,o){let a;const c=Yn(t.visibleWrites,e),l=xs(c,Ie());if(l!=null)a=l;else if(n!=null)a=fi(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let d=f.getNext();for(;d&&u.length<i;)h(d,s)!==0&&u.push(d),d=f.getNext();return u}else return[]}function oA(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function iu(t,e,n,s){return sy(t.writeTree,t.treePath,e,n,s)}function iy(t,e){return tA(t.writeTree,t.treePath,e)}function up(t,e,n,s){return nA(t.writeTree,t.treePath,e,n,s)}function oa(t,e){return iA(t.writeTree,Ze(t.treePath,e))}function aA(t,e,n,s,i,r){return rA(t.writeTree,t.treePath,e,n,s,i,r)}function bh(t,e,n){return sA(t.writeTree,t.treePath,e,n)}function ry(t,e){return oy(Ze(t.treePath,e),t.writeTree)}function oy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,sp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,FS(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,LS(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,sp(s,e.snapshotNode,i.oldSnap));else throw Ri("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ay=new lA;class Ch{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ih(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bh(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ks(this.viewCache_),r=aA(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function uA(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hA(t,e,n,s,i){const r=new cA;let o,a;if(n.type===dn.OVERWRITE){const l=n;l.source.fromUser?o=ru(t,e,l.path,l.snap,s,i,r):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!re(l.path),o=aa(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===dn.MERGE){const l=n;l.source.fromUser?o=dA(t,e,l.path,l.children,s,i,r):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ou(t,e,l.path,l.children,s,i,a,r))}else if(n.type===dn.ACK_USER_WRITE){const l=n;l.revert?o=mA(t,e,l.path,s,i,r):o=pA(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===dn.LISTEN_COMPLETE)o=gA(t,e,n.path,s,r);else throw Ri("Unknown operation type: "+n.type);const c=r.getChanges();return fA(e,o,c),{viewCache:o,changes:c}}function fA(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=tu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(MS(tu(e)))}}function cy(t,e,n,s,i,r){const o=e.eventCache;if(oa(s,n)!=null)return e;{let a,c;if(re(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=ks(e),u=l instanceof me?l:me.EMPTY_NODE,h=iy(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=iu(s,ks(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=ae(n);if(l===".priority"){P(es(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=up(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ke(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=up(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(l).updateChild(u,f):h=o.getNode().getImmediateChild(l)}else h=bh(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return ar(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function aa(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(re(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const d=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),d,null)}else{const d=ae(n);if(!c.isCompleteForPath(n)&&es(n)>1)return e;const g=ke(n),y=c.getNode().getImmediateChild(d).updateChild(g,s);d===".priority"?l=u.updatePriority(c.getNode(),y):l=u.updateChild(c.getNode(),d,y,g,ay,null)}const h=Z_(e,l,c.isFullyInitialized()||re(n),u.filtersNodes()),f=new Ch(i,h,r);return cy(t,h,n,i,f,a)}function ru(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new Ch(i,e,r);if(re(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ar(e,l,!0,t.filter.filtersNodes());else{const h=ae(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=ar(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=ke(n),d=a.getNode().getImmediateChild(h);let g;if(re(f))g=s;else{const _=u.getCompleteChild(h);_!=null?U_(f)===".priority"&&_.getChild(B_(f)).isEmpty()?g=_:g=_.updateChild(f,s):g=me.EMPTY_NODE}if(d.equals(g))c=e;else{const _=t.filter.updateChild(a.getNode(),h,g,f,u,o);c=ar(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function hp(t,e){return t.eventCache.isCompleteForChild(e)}function dA(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=Ze(n,c);hp(e,ae(u))&&(a=ru(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=Ze(n,c);hp(e,ae(u))||(a=ru(t,a,u,l,i,r,o))}),a}function fp(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ou(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;re(n)?l=s:l=new Re(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),g=fp(t,d,f);c=aa(t,c,new Oe(h),g,i,r,o,a)}}),l.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const g=e.serverCache.getNode().getImmediateChild(h),_=fp(t,g,f);c=aa(t,c,new Oe(h),_,i,r,o,a)}}),c}function pA(t,e,n,s,i,r,o){if(oa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(re(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return aa(t,e,n,c.getNode().getChild(n),i,r,a,o);if(re(n)){let l=new Re(null);return c.getNode().forEachChild(ii,(u,h)=>{l=l.set(new Oe(u),h)}),ou(t,e,n,l,i,r,a,o)}else return e}else{let l=new Re(null);return s.foreach((u,h)=>{const f=Ze(n,u);c.isCompleteForPath(f)&&(l=l.set(u,c.getNode().getChild(f)))}),ou(t,e,n,l,i,r,a,o)}}function gA(t,e,n,s,i){const r=e.serverCache,o=Z_(e,r.getNode(),r.isFullyInitialized()||re(n),r.isFiltered());return cy(t,o,n,s,ay,i)}function mA(t,e,n,s,i,r){let o;if(oa(s,n)!=null)return e;{const a=new Ch(s,e,i),c=e.eventCache.getNode();let l;if(re(n)||ae(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=iu(s,ks(e));else{const h=e.serverCache.getNode();P(h instanceof me,"serverChildren would be complete if leaf node"),u=iy(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=ae(n);let h=bh(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,ke(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,me.EMPTY_NODE,ke(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=iu(s,ks(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||oa(s,Ie())!=null,ar(e,l,o,t.filter.filtersNodes())}}function _A(t,e){const n=ks(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function dp(t,e,n,s){e.type===dn.MERGE&&e.source.queryId!==null&&(P(ks(t.viewCache_),"We should always have a full cache before handling merges"),P(tu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=hA(t.processor_,i,e,n,s);return uA(t.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,yA(t,r.changes,r.viewCache.eventCache.getNode(),null)}function yA(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return qS(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pp;function vA(t){P(!pp,"__referenceConstructor has already been defined"),pp=t}function Sh(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return P(r!=null,"SyncTree gave us an op for an invalid query."),dp(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(dp(o,e,n,s));return r}}function Ah(t,e){let n=null;for(const s of t.views.values())n=n||_A(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gp;function EA(t){P(!gp,"__referenceConstructor has already been defined"),gp=t}class mp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=oA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wA(t,e,n,s,i){return QS(t.pendingWriteTree_,e,n,s,i),i?Qa(t,new Ns(Q_(),e,n)):[]}function Qs(t,e,n=!1){const s=YS(t.pendingWriteTree_,e);if(XS(t.pendingWriteTree_,e)){let r=new Re(null);return s.snap!=null?r=r.set(Ie(),!0):jt(s.children,o=>{r=r.set(new Oe(o),!0)}),Qa(t,new ra(s.path,r,n))}else return[]}function Ga(t,e,n){return Qa(t,new Ns(Y_(),e,n))}function TA(t,e,n){const s=Re.fromObject(n);return Qa(t,new Ar(Y_(),e,s))}function IA(t,e,n,s){const i=fy(t,s);if(i!=null){const r=dy(i),o=r.path,a=r.queryId,c=Vt(o,e),l=new Ns(X_(a),c,n);return py(t,o,l)}else return[]}function bA(t,e,n,s){const i=fy(t,s);if(i){const r=dy(i),o=r.path,a=r.queryId,c=Vt(o,e),l=Re.fromObject(n),u=new Ar(X_(a),c,l);return py(t,o,u)}else return[]}function ly(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Vt(o,e),l=Ah(a,c);if(l)return l});return sy(i,e,r,n,!0)}function Qa(t,e){return uy(e,t.syncPointTree_,null,ty(t.pendingWriteTree_,Ie()))}function uy(t,e,n,s){if(re(t.path))return hy(t,e,n,s);{const i=e.get(Ie());n==null&&i!=null&&(n=Ah(i,Ie()));let r=[];const o=ae(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=ry(s,o);r=r.concat(uy(a,c,l,u))}return i&&(r=r.concat(Sh(i,t,s,n))),r}}function hy(t,e,n,s){const i=e.get(Ie());n==null&&i!=null&&(n=Ah(i,Ie()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=ry(s,o),u=t.operationForChild(o);u&&(r=r.concat(hy(u,a,c,l)))}),i&&(r=r.concat(Sh(i,t,s,n))),r}function fy(t,e){return t.tagToQueryMap.get(e)}function dy(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Oe(t.substr(0,e))}}function py(t,e,n){const s=t.syncPointTree_.get(e);P(s,"Missing sync point for query tag that we're tracking");const i=ty(t.pendingWriteTree_,e);return Sh(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Rh(n)}node(){return this.node_}}class Nh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ze(this.path_,e);return new Nh(this.syncTree_,n)}node(){return ly(this.syncTree_,this.path_)}}const CA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_p=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return SA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return AA(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},SA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},AA=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&P(!1,"Unexpected increment value: "+s);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},RA=function(t,e,n,s){return kh(e,new Nh(n,t),s)},NA=function(t,e,n){return kh(t,new Rh(e),n)};function kh(t,e,n){const s=t.getPriority().val(),i=_p(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=_p(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Qe(a,ft(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Qe(i))),o.forEachChild(mt,(a,c)=>{const l=kh(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Oh(t,e){let n=e instanceof Oe?e:new Oe(e),s=t,i=ae(n);for(;i!==null;){const r=ui(s.node.children,i)||{children:{},childCount:0};s=new Dh(i,s,r),n=ke(n),i=ae(n)}return s}function Oi(t){return t.node.value}function gy(t,e){t.node.value=e,au(t)}function my(t){return t.node.childCount>0}function kA(t){return Oi(t)===void 0&&!my(t)}function Ya(t,e){jt(t.node.children,(n,s)=>{e(new Dh(n,t,s))})}function _y(t,e,n,s){n&&!s&&e(t),Ya(t,i=>{_y(i,e,!0,s)}),n&&s&&e(t)}function DA(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Gr(t){return new Oe(t.parent===null?t.name:Gr(t.parent)+"/"+t.name)}function au(t){t.parent!==null&&OA(t.parent,t.name,t)}function OA(t,e,n){const s=kA(n),i=Bn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,au(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,au(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=/[\[\].#$\/\u0000-\u001F\u007F]/,xA=/[\[\].#$\u0000-\u001F\u007F]/,nl=10*1024*1024,yy=function(t){return typeof t=="string"&&t.length!==0&&!PA.test(t)},MA=function(t){return typeof t=="string"&&t.length!==0&&!xA.test(t)},LA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),MA(t)},vy=function(t,e,n){const s=n instanceof Oe?new gS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+hs(s));if(typeof e=="function")throw new Error(t+"contains a function "+hs(s)+" with contents = "+e.toString());if(y_(e))throw new Error(t+"contains "+e.toString()+" "+hs(s));if(typeof e=="string"&&e.length>nl/3&&Wa(e)>nl)throw new Error(t+"contains a string greater than "+nl+" utf8 bytes "+hs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(jt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!yy(o)))throw new Error(t+" contains an invalid key ("+o+") "+hs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mS(s,o),vy(t,a,s),_S(s)}),i&&r)throw new Error(t+' contains ".value" child '+hs(s)+" in addition to actual children.")}},FA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!LA(n))throw new Error(XI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function VA(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!$_(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ms(t,e,n){VA(t,n),BA(t,s=>Xt(s,e)||Xt(e,s))}function BA(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?($A(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $A(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Is&&ht("event: "+n.toString()),Wr(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="repo_interrupt",jA=25;class KA{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ia(),this.transactionQueueTree_=new Dh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qA(t,e,n){if(t.stats_=yh(t.repoInfo_),t.forceRestClient_||VC())t.server_=new sa(t.repoInfo_,(s,i,r,o)=>{yp(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>vp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Nn(t.repoInfo_,e,(s,i,r,o)=>{yp(t,s,i,r,o)},s=>{vp(t,s)},s=>{zA(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=qC(t.repoInfo_,()=>new KS(t.stats_,t.server_)),t.infoData_=new VS,t.infoSyncTree_=new mp({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Ga(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ph(t,"connected",!1),t.serverSyncTree_=new mp({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Ms(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function WA(t){const n=t.infoData_.getNode(new Oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ey(t){return CA({timestamp:WA(t)})}function yp(t,e,n,s,i){t.dataUpdateCount++;const r=new Oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Go(n,l=>ft(l));o=bA(t.serverSyncTree_,r,c,i)}else{const c=ft(n);o=IA(t.serverSyncTree_,r,c,i)}else if(s){const c=Go(n,l=>ft(l));o=TA(t.serverSyncTree_,r,c)}else{const c=ft(n);o=Ga(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Mh(t,r)),Ms(t.eventQueue_,a,o)}function vp(t,e){Ph(t,"connected",e),e===!1&&QA(t)}function zA(t,e){jt(e,(n,s)=>{Ph(t,n,s)})}function Ph(t,e,n){const s=new Oe("/.info/"+e),i=ft(n);t.infoData_.updateSnapshot(s,i);const r=Ga(t.infoSyncTree_,s,i);Ms(t.eventQueue_,s,r)}function GA(t){return t.nextWriteId_++}function QA(t){wy(t,"onDisconnectEvents");const e=Ey(t),n=ia();eu(t.onDisconnect_,Ie(),(i,r)=>{const o=RA(i,r,t.serverSyncTree_,e);G_(n,i,o)});let s=[];eu(n,Ie(),(i,r)=>{s=s.concat(Ga(t.serverSyncTree_,i,r));const o=ZA(t,i);Mh(t,o)}),t.onDisconnect_=ia(),Ms(t.eventQueue_,Ie(),s)}function YA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(HA)}function wy(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ht(n,...e)}function Ty(t,e,n){return ly(t.serverSyncTree_,e,n)||me.EMPTY_NODE}function xh(t,e=t.transactionQueueTree_){if(e||Xa(t,e),Oi(e)){const n=by(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&XA(t,Gr(e),n)}else my(e)&&Ya(e,n=>{xh(t,n)})}function XA(t,e,n){const s=n.map(l=>l.currentWriteId),i=Ty(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Vt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{wy(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Qs(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Xa(t,Oh(t.transactionQueueTree_,e)),xh(t,t.transactionQueueTree_),Ms(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Wr(h[f])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{xt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}Mh(t,e)}},o)}function Mh(t,e){const n=Iy(t,e),s=Gr(n),i=by(t,n);return JA(t,i,s),s}function JA(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Vt(n,c.path);let u=!1,h;if(P(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Qs(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=jA)u=!0,h="maxretry",i=i.concat(Qs(t.serverSyncTree_,c.currentWriteId,!0));else{const f=Ty(t,c.path,o);c.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){vy("transaction failed: Data returned ",d,c.path);let g=ft(d);typeof d=="object"&&d!=null&&Bn(d,".priority")||(g=g.updatePriority(f.getPriority()));const y=c.currentWriteId,w=Ey(t),k=NA(g,f,w);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=k,c.currentWriteId=GA(t),o.splice(o.indexOf(y),1),i=i.concat(wA(t.serverSyncTree_,c.path,k,c.currentWriteId,c.applyLocally)),i=i.concat(Qs(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(Qs(t.serverSyncTree_,c.currentWriteId,!0))}Ms(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Xa(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Wr(s[a]);xh(t,t.transactionQueueTree_)}function Iy(t,e){let n,s=t.transactionQueueTree_;for(n=ae(e);n!==null&&Oi(s)===void 0;)s=Oh(s,n),e=ke(e),n=ae(e);return s}function by(t,e){const n=[];return Cy(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Cy(t,e,n){const s=Oi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ya(e,i=>{Cy(t,i,n)})}function Xa(t,e){const n=Oi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,gy(e,n.length>0?n:void 0)}Ya(e,s=>{Xa(t,s)})}function ZA(t,e){const n=Gr(Iy(t,e)),s=Oh(t.transactionQueueTree_,e);return DA(s,i=>{sl(t,i)}),sl(t,s),_y(s,i=>{sl(t,i)}),n}function sl(t,e){const n=Oi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?gy(e,void 0):n.length=r+1,Ms(t.eventQueue_,Gr(e),i);for(let o=0;o<s.length;o++)Wr(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function tR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ep=function(t,e){const n=nR(t),s=n.namespace;n.domain==="firebase.com"&&As(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&As("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||DC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new HC(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Oe(n.pathString)}},nR=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=eR(t.substring(u,h)));const f=tR(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const d=e.slice(0,l);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return re(this._path)?null:U_(this._path)}get ref(){return new Pi(this._repo,this._path)}get _queryIdentifier(){const e=rp(this._queryParams),n=mh(e);return n==="{}"?"default":n}get _queryObject(){return rp(this._queryParams)}isEqual(e){if(e=Rt(e),!(e instanceof Lh))return!1;const n=this._repo===e._repo,s=$_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pS(this._path)}}class Pi extends Lh{constructor(e,n){super(e,n,new Th,!1)}get parent(){const e=B_(this._path);return e===null?null:new Pi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}vA(Pi);EA(Pi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="FIREBASE_DATABASE_EMULATOR_HOST",cu={};let iR=!1;function rR(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||As("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ep(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[sR]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Ep(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Xl(Xl.OWNER):new $C(t.name,t.options,e);FA("Invalid Firebase Database URL",o),re(o.path)||As("Database URL must point to the root of a Firebase Database (not including a child path).");const h=aR(a,t,u,new BC(t.name,n));return new cR(h,t)}function oR(t,e){const n=cu[e];(!n||n[t.key]!==t)&&As(`Database ${e}(${t.repoInfo_}) has already been deleted.`),YA(t),delete n[t.key]}function aR(t,e,n,s){let i=cu[e.name];i||(i={},cu[e.name]=i);let r=i[t.toURLString()];return r&&As("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new KA(t,iR,n,s),i[t.toURLString()]=r,r}class cR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pi(this._repo,Ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(oR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&As("Cannot call "+e+" on a deleted database.")}}/**
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
 */function lR(t){SC(ki),_n(new rn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return rR(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Pt($d,Hd,t),Pt($d,Hd,"esm2017")}Nn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};lR();var uR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Fh=Fh||{},Q=uR||self;function ca(){}function Ja(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function hR(t){return Object.prototype.hasOwnProperty.call(t,il)&&t[il]||(t[il]=++fR)}var il="closure_uid_"+(1e9*Math.random()>>>0),fR=0;function dR(t,e,n){return t.call.apply(t.bind,arguments)}function pR(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function _t(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_t=dR:_t=pR,_t.apply(null,arguments)}function To(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function is(){this.s=this.s,this.o=this.o}var gR=0;is.prototype.s=!1;is.prototype.na=function(){!this.s&&(this.s=!0,this.M(),gR!=0)&&hR(this)};is.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Uh(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function wp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ja(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function yt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var mR=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",ca,e),Q.removeEventListener("test",ca,e)}catch{}return t}();function la(t){return/^[\s\xa0]*$/.test(t)}var Tp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function rl(t,e){return t<e?-1:t>e?1:0}function Za(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function hn(t){return Za().indexOf(t)!=-1}function Vh(t){return Vh[" "](t),t}Vh[" "]=ca;function _R(t){var e=ER;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var yR=hn("Opera"),di=hn("Trident")||hn("MSIE"),Ay=hn("Edge"),lu=Ay||di,Ry=hn("Gecko")&&!(Za().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge"))&&!(hn("Trident")||hn("MSIE"))&&!hn("Edge"),vR=Za().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge");function Ny(){var t=Q.document;return t?t.documentMode:void 0}var ua;e:{var ol="",al=function(){var t=Za();if(Ry)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ay)return/Edge\/([\d\.]+)/.exec(t);if(di)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(vR)return/WebKit\/(\S+)/.exec(t);if(yR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(al&&(ol=al?al[1]:""),di){var cl=Ny();if(cl!=null&&cl>parseFloat(ol)){ua=String(cl);break e}}ua=ol}var ER={};function wR(){return _R(function(){let t=0;const e=Tp(String(ua)).split("."),n=Tp("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=rl(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||rl(i[2].length==0,r[2].length==0)||rl(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var uu;if(Q.document&&di){var Ip=Ny();uu=Ip||parseInt(ua,10)||void 0}else uu=void 0;var TR=uu;function Rr(t,e){if(yt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ry){e:{try{Vh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:IR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Rr.X.h.call(this)}}ot(Rr,yt);var IR={2:"touch",3:"pen",4:"mouse"};Rr.prototype.h=function(){Rr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yr="closure_listenable_"+(1e6*Math.random()|0),bR=0;function CR(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++bR,this.ba=this.ea=!1}function ec(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Bh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ky(t){const e={};for(const n in t)e[n]=t[n];return e}const bp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dy(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<bp.length;r++)n=bp[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function tc(t){this.src=t,this.g={},this.h=0}tc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=fu(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new CR(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function hu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Sy(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ec(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function fu(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var $h="closure_lm_"+(1e6*Math.random()|0),ll={};function Oy(t,e,n,s,i){if(s&&s.once)return xy(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Oy(t,e[r],n,s,i);return null}return n=Kh(n),t&&t[Yr]?t.N(e,n,Qr(s)?!!s.capture:!!s,i):Py(t,e,n,!1,s,i)}function Py(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Qr(i)?!!i.capture:!!i,a=jh(t);if(a||(t[$h]=a=new tc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=SR(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)mR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ly(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function SR(){function t(n){return e.call(t.src,t.listener,n)}const e=AR;return t}function xy(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)xy(t,e[r],n,s,i);return null}return n=Kh(n),t&&t[Yr]?t.O(e,n,Qr(s)?!!s.capture:!!s,i):Py(t,e,n,!0,s,i)}function My(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)My(t,e[r],n,s,i);else s=Qr(s)?!!s.capture:!!s,n=Kh(n),t&&t[Yr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=fu(r,n,s,i),-1<n&&(ec(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=jh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fu(e,n,s,i)),(n=-1<t?e[t]:null)&&Hh(n))}function Hh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Yr])hu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ly(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=jh(e))?(hu(n,t),n.h==0&&(n.src=null,e[$h]=null)):ec(t)}}}function Ly(t){return t in ll?ll[t]:ll[t]="on"+t}function AR(t,e){if(t.ba)t=!0;else{e=new Rr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Hh(t),t=n.call(s,e)}return t}function jh(t){return t=t[$h],t instanceof tc?t:null}var ul="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kh(t){return typeof t=="function"?t:(t[ul]||(t[ul]=function(e){return t.handleEvent(e)}),t[ul])}function et(){is.call(this),this.i=new tc(this),this.P=this,this.I=null}ot(et,is);et.prototype[Yr]=!0;et.prototype.removeEventListener=function(t,e,n,s){My(this,t,e,n,s)};function rt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new yt(e,t);else if(e instanceof yt)e.target=e.target||t;else{var i=e;e=new yt(s,t),Dy(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Io(o,s,!0,e)&&i}if(o=e.g=t,i=Io(o,s,!0,e)&&i,i=Io(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Io(o,s,!1,e)&&i}et.prototype.M=function(){if(et.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ec(n[s]);delete t.g[e],t.h--}}this.I=null};et.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};et.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Io(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&hu(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var qh=Q.JSON.stringify;function RR(){var t=Vy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class NR{constructor(){this.h=this.g=null}add(e,n){const s=Fy.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Fy=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new kR,t=>t.reset());class kR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function DR(t){Q.setTimeout(()=>{throw t},0)}function Uy(t,e){du||OR(),pu||(du(),pu=!0),Vy.add(t,e)}var du;function OR(){var t=Q.Promise.resolve(void 0);du=function(){t.then(PR)}}var pu=!1,Vy=new NR;function PR(){for(var t;t=RR();){try{t.h.call(t.g)}catch(n){DR(n)}var e=Fy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pu=!1}function nc(t,e){et.call(this),this.h=t||1,this.g=e||Q,this.j=_t(this.lb,this),this.l=Date.now()}ot(nc,et);V=nc.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),rt(this,"tick"),this.ca&&(Wh(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){nc.X.M.call(this),Wh(this),delete this.g};function zh(t,e,n){if(typeof t=="function")n&&(t=_t(t,n));else if(t&&typeof t.handleEvent=="function")t=_t(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function By(t){t.g=zh(()=>{t.g=null,t.i&&(t.i=!1,By(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xR extends is{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:By(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nr(t){is.call(this),this.h=t,this.g={}}ot(Nr,is);var Cp=[];function $y(t,e,n,s){Array.isArray(n)||(n&&(Cp[0]=n.toString()),n=Cp);for(var i=0;i<n.length;i++){var r=Oy(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Hy(t){Bh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hh(e)},t),t.g={}}Nr.prototype.M=function(){Nr.X.M.call(this),Hy(this)};Nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sc(){this.g=!0}sc.prototype.Aa=function(){this.g=!1};function MR(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function LR(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Ys(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+UR(t,n)+(s?" "+s:"")})}function FR(t,e){t.info(function(){return"TIMEOUT: "+e})}sc.prototype.info=function(){};function UR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return qh(n)}catch{return e}}var Ls={},Sp=null;function ic(){return Sp=Sp||new et}Ls.Pa="serverreachability";function jy(t){yt.call(this,Ls.Pa,t)}ot(jy,yt);function kr(t){const e=ic();rt(e,new jy(e))}Ls.STAT_EVENT="statevent";function Ky(t,e){yt.call(this,Ls.STAT_EVENT,t),this.stat=e}ot(Ky,yt);function Tt(t){const e=ic();rt(e,new Ky(e,t))}Ls.Qa="timingevent";function qy(t,e){yt.call(this,Ls.Qa,t),this.size=e}ot(qy,yt);function Xr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var rc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Wy={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Gh(){}Gh.prototype.h=null;function Ap(t){return t.h||(t.h=t.i())}function zy(){}var Jr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Qh(){yt.call(this,"d")}ot(Qh,yt);function Yh(){yt.call(this,"c")}ot(Yh,yt);var gu;function oc(){}ot(oc,Gh);oc.prototype.g=function(){return new XMLHttpRequest};oc.prototype.i=function(){return{}};gu=new oc;function Zr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Nr(this),this.O=VR,t=lu?125:void 0,this.T=new nc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Gy}function Gy(){this.i=null,this.g="",this.h=!1}var VR=45e3,mu={},ha={};V=Zr.prototype;V.setTimeout=function(t){this.O=t};function _u(t,e,n){t.K=1,t.v=cc(xn(e)),t.s=n,t.P=!0,Qy(t,null)}function Qy(t,e){t.F=Date.now(),eo(t),t.A=xn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),sv(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Gy,t.g=bv(t.l,n?e:null,!t.s),0<t.N&&(t.L=new xR(_t(t.La,t,t.g),t.N)),$y(t.S,t.g,"readystatechange",t.ib),e=t.H?ky(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),kr(),MR(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&An(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const u=An(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||lu||this.g&&(this.h.h||this.g.fa()||Dp(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?kr(3):kr(2)),ac(this);var n=this.g.aa();this.Y=n;t:if(Yy(this)){var s=Dp(this.g);t="";var i=s.length,r=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ys(this),lr(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,LR(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!la(a)){var l=a;break t}}l=null}if(n=l)Ys(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yu(this,n);else{this.i=!1,this.o=3,Tt(12),ys(this),lr(this);break e}}this.P?(Xy(this,u,o),lu&&this.i&&u==3&&($y(this.S,this.T,"tick",this.hb),this.T.start())):(Ys(this.j,this.m,o,null),yu(this,o)),u==4&&ys(this),this.i&&!this.I&&(u==4?Ev(this.l,this):(this.i=!1,eo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Tt(12)):(this.o=0,Tt(13)),ys(this),lr(this)}}}catch{}finally{}};function Yy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Xy(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=BR(t,n),i==ha){e==4&&(t.o=4,Tt(14),s=!1),Ys(t.j,t.m,null,"[Incomplete Response]");break}else if(i==mu){t.o=4,Tt(15),Ys(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ys(t.j,t.m,i,null),yu(t,i);Yy(t)&&i!=ha&&i!=mu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Tt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),sf(e),e.K=!0,Tt(11))):(Ys(t.j,t.m,n,"[Invalid Chunked Response]"),ys(t),lr(t))}V.hb=function(){if(this.g){var t=An(this.g),e=this.g.fa();this.C<e.length&&(ac(this),Xy(this,t,e),this.i&&t!=4&&eo(this))}};function BR(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ha:(n=Number(e.substring(n,s)),isNaN(n)?mu:(s+=1,s+n>e.length?ha:(e=e.substr(s,n),t.C=s+n,e)))}V.cancel=function(){this.I=!0,ys(this)};function eo(t){t.V=Date.now()+t.O,Jy(t,t.O)}function Jy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xr(_t(t.gb,t),e)}function ac(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(FR(this.j,this.A),this.K!=2&&(kr(),Tt(17)),ys(this),this.o=2,lr(this)):Jy(this,this.V-t)};function lr(t){t.l.G==0||t.I||Ev(t.l,t)}function ys(t){ac(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wh(t.T),Hy(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function yu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||vu(n.h,t))){if(!t.J&&vu(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)pa(n),hc(n);else break e;nf(n),Tt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Xr(_t(n.cb,n),6e3));if(1>=ov(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else vs(n,11)}else if((t.J||n.g==t)&&pa(n),!la(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Xh(r,r.h),r.h=null))}if(s.D){const _=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Pe(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Iv(s,s.H?s.ka:null,s.V),o.J){av(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ac(a),eo(a)),s.g=o}else yv(s);0<n.i.length&&fc(n)}else l[0]!="stop"&&l[0]!="close"||vs(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?vs(n,7):tf(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}kr(4)}catch{}}function $R(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ja(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function HR(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ja(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Zy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ja(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=HR(t),s=$R(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var ev=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function bs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof bs){this.h=e!==void 0?e:t.h,fa(this,t.j),this.s=t.s,this.g=t.g,da(this,t.m),this.l=t.l,e=t.i;var n=new Dr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Rp(this,n),this.o=t.o}else t&&(n=String(t).match(ev))?(this.h=!!e,fa(this,n[1]||"",!0),this.s=Xi(n[2]||""),this.g=Xi(n[3]||"",!0),da(this,n[4]),this.l=Xi(n[5]||"",!0),Rp(this,n[6]||"",!0),this.o=Xi(n[7]||"")):(this.h=!!e,this.i=new Dr(null,this.h))}bs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ji(e,Np,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ji(e,Np,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ji(n,n.charAt(0)=="/"?WR:qR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ji(n,GR)),t.join("")};function xn(t){return new bs(t)}function fa(t,e,n){t.j=n?Xi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function da(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rp(t,e,n){e instanceof Dr?(t.i=e,QR(t.i,t.h)):(n||(e=Ji(e,zR)),t.i=new Dr(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function cc(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ji(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,KR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function KR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Np=/[#\/\?@]/g,qR=/[#\?:]/g,WR=/[#\?]/g,zR=/[#\?@]/g,GR=/#/g;function Dr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rs(t){t.g||(t.g=new Map,t.h=0,t.i&&jR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Dr.prototype;V.add=function(t,e){rs(this),this.i=null,t=xi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function tv(t,e){rs(t),e=xi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nv(t,e){return rs(t),e=xi(t,e),t.g.has(e)}V.forEach=function(t,e){rs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};V.oa=function(){rs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};V.W=function(t){rs(this);let e=[];if(typeof t=="string")nv(this,t)&&(e=e.concat(this.g.get(xi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return rs(this),this.i=null,t=xi(this,t),nv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function sv(t,e,n){tv(t,e),0<n.length&&(t.i=null,t.g.set(xi(t,e),Uh(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function xi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function QR(t,e){e&&!t.j&&(rs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(tv(this,s),sv(this,i,n))},t)),t.j=e}var YR=class{constructor(e,n){this.h=e,this.g=n}};function iv(t){this.l=t||XR,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var XR=10;function rv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ov(t){return t.h?1:t.g?t.g.size:0}function vu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xh(t,e){t.g?t.g.add(e):t.h=e}function av(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}iv.prototype.cancel=function(){if(this.i=cv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Uh(t.i)}function Jh(){}Jh.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};Jh.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function JR(){this.g=new Jh}function ZR(t,e,n){const s=n||"";try{Zy(t,function(i,r){let o=i;Qr(i)&&(o=qh(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function eN(t,e){const n=new sc;if(Q.Image){const s=new Image;s.onload=To(bo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=To(bo,n,s,"TestLoadImage: error",!1,e),s.onabort=To(bo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=To(bo,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function bo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function to(t){this.l=t.ac||null,this.j=t.jb||!1}ot(to,Gh);to.prototype.g=function(){return new lc(this.l,this.j)};to.prototype.i=function(t){return function(){return t}}({});function lc(t,e){et.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Zh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(lc,et);var Zh=0;V=lc.prototype;V.open=function(t,e){if(this.readyState!=Zh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Or(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,no(this)),this.readyState=Zh};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Or(this)),this.g&&(this.readyState=3,Or(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function lv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?no(this):Or(this),this.readyState==3&&lv(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,no(this))};V.Ua=function(t){this.g&&(this.response=t,no(this))};V.ga=function(){this.g&&no(this)};function no(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Or(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Or(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(lc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var tN=Q.JSON.parse;function Fe(t){et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=uv,this.K=this.L=!1}ot(Fe,et);var uv="",nN=/^https?$/i,sN=["POST","PUT"];V=Fe.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gu.g(),this.C=this.u?Ap(this.u):Ap(gu),this.g.onreadystatechange=_t(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){kp(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=Sy(sN,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{dv(this),0<this.B&&((this.K=iN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_t(this.qa,this)):this.A=zh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){kp(this,r)}};function iN(t){return di&&wR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof Fh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function kp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hv(t),uc(t)}function hv(t){t.D||(t.D=!0,rt(t,"complete"),rt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,rt(this,"complete"),rt(this,"abort"),uc(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),uc(this,!0)),Fe.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?fv(this):this.fb())};V.fb=function(){fv(this)};function fv(t){if(t.h&&typeof Fh<"u"&&(!t.C[1]||An(t)!=4||t.aa()!=2)){if(t.v&&An(t)==4)zh(t.Ha,0,t);else if(rt(t,"readystatechange"),An(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(ev)[1]||null;if(!i&&Q.self&&Q.self.location){var r=Q.self.location.protocol;i=r.substr(0,r.length-1)}s=!nN.test(i?i.toLowerCase():"")}n=s}if(n)rt(t,"complete"),rt(t,"success");else{t.m=6;try{var o=2<An(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",hv(t)}}finally{uc(t)}}}}function uc(t,e){if(t.g){dv(t);const n=t.g,s=t.C[0]?ca:null;t.g=null,t.C=null,e||rt(t,"ready");try{n.onreadystatechange=s}catch{}}}function dv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function An(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),tN(e)}};function Dp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case uv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pv(t){let e="";return Bh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ef(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=pv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function zi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gv(t){this.Ca=0,this.i=[],this.j=new sc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=zi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=zi("baseRetryDelayMs",5e3,t),this.bb=zi("retryDelaySeedMs",1e4,t),this.$a=zi("forwardChannelMaxRetries",2,t),this.ta=zi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new iv(t&&t.concurrentRequestLimit),this.Fa=new JR,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=gv.prototype;V.ma=8;V.G=1;function tf(t){if(mv(t),t.G==3){var e=t.U++,n=xn(t.F);Pe(n,"SID",t.I),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),so(t,n),e=new Zr(t,t.j,e,void 0),e.K=2,e.v=cc(xn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=bv(e.l,null),e.g.da(e.v)),e.F=Date.now(),eo(e)}Tv(t)}function hc(t){t.g&&(sf(t),t.g.cancel(),t.g=null)}function mv(t){hc(t),t.u&&(Q.clearTimeout(t.u),t.u=null),pa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function fc(t){rv(t.h)||t.m||(t.m=!0,Uy(t.Ja,t),t.C=0)}function rN(t,e){return ov(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Xr(_t(t.Ja,t,e),wv(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Zr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ky(r),Dy(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=_v(this,i,e),n=xn(this.F),Pe(n,"RID",t),Pe(n,"CVER",22),this.D&&Pe(n,"X-HTTP-Session-Id",this.D),so(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(pv(r)))+"&"+e:this.o&&ef(n,this.o,r)),Xh(this.h,i),this.Ya&&Pe(n,"TYPE","init"),this.O?(Pe(n,"$req",e),Pe(n,"SID","null"),i.Z=!0,_u(i,n,null)):_u(i,n,e),this.G=2}}else this.G==3&&(t?Op(this,t):this.i.length==0||rv(this.h)||Op(this))};function Op(t,e){var n;e?n=e.m:n=t.U++;const s=xn(t.F);Pe(s,"SID",t.I),Pe(s,"RID",n),Pe(s,"AID",t.T),so(t,s),t.o&&t.s&&ef(s,t.o,t.s),n=new Zr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=_v(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Xh(t.h,n),_u(n,s,e)}function so(t,e){t.ia&&Bh(t.ia,function(n,s){Pe(e,s,n)}),t.l&&Zy({},function(n,s){Pe(e,s,n)})}function _v(t,e,n){n=Math.min(t.i.length,n);var s=t.l?_t(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{ZR(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function yv(t){t.g||t.u||(t.Z=1,Uy(t.Ia,t),t.A=0)}function nf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Xr(_t(t.Ia,t),wv(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,vv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Xr(_t(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Tt(10),hc(this),vv(this))};function sf(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function vv(t){t.g=new Zr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=xn(t.sa);Pe(e,"RID","rpc"),Pe(e,"SID",t.I),Pe(e,"CI",t.L?"0":"1"),Pe(e,"AID",t.T),Pe(e,"TYPE","xmlhttp"),so(t,e),t.o&&t.s&&ef(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=cc(xn(e)),n.s=null,n.P=!0,Qy(n,t)}V.cb=function(){this.v!=null&&(this.v=null,hc(this),nf(this),Tt(19))};function pa(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Ev(t,e){var n=null;if(t.g==e){pa(t),sf(t),t.g=null;var s=2}else if(vu(t.h,e))n=e.D,av(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ic(),rt(s,new qy(s,n)),fc(t)}else yv(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&rN(t,e)||s==2&&nf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:vs(t,5);break;case 4:vs(t,10);break;case 3:vs(t,6);break;default:vs(t,2)}}}function wv(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function vs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=_t(t.kb,t);n||(n=new bs("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||fa(n,"https"),cc(n)),eN(n.toString(),s)}else Tt(2);t.G=0,t.l&&t.l.va(e),Tv(t),mv(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Tv(t){if(t.G=0,t.la=[],t.l){const e=cv(t.h);(e.length!=0||t.i.length!=0)&&(wp(t.la,e),wp(t.la,t.i),t.h.i.length=0,Uh(t.i),t.i.length=0),t.l.ua()}}function Iv(t,e,n){var s=n instanceof bs?xn(n):new bs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),da(s,s.m);else{var i=Q.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new bs(null,void 0);s&&fa(r,s),e&&(r.g=e),i&&da(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Pe(s,n,e),Pe(s,"VER",t.ma),so(t,s),s}function bv(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Fe(new to({jb:!0})):new Fe(t.ra),e.Ka(t.H),e}function Cv(){}V=Cv.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function ga(){if(di&&!(10<=Number(TR)))throw Error("Environmental error: no available transport.")}ga.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){et.call(this),this.g=new gv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!la(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!la(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Mi(this)}ot(Mt,et);Mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Tt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Iv(t,null,t.V),fc(t)};Mt.prototype.close=function(){tf(this.g)};Mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=qh(t),t=n);e.i.push(new YR(e.ab++,t)),e.G==3&&fc(e)};Mt.prototype.M=function(){this.g.l=null,delete this.j,tf(this.g),delete this.g,Mt.X.M.call(this)};function Sv(t){Qh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(Sv,Qh);function Av(){Yh.call(this),this.status=1}ot(Av,Yh);function Mi(t){this.g=t}ot(Mi,Cv);Mi.prototype.xa=function(){rt(this.g,"a")};Mi.prototype.wa=function(t){rt(this.g,new Sv(t))};Mi.prototype.va=function(t){rt(this.g,new Av)};Mi.prototype.ua=function(){rt(this.g,"b")};ga.prototype.createWebChannel=ga.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;rc.NO_ERROR=0;rc.TIMEOUT=8;rc.HTTP_ERROR=6;Wy.COMPLETE="complete";zy.EventType=Jr;Jr.OPEN="a";Jr.CLOSE="b";Jr.ERROR="c";Jr.MESSAGE="d";et.prototype.listen=et.prototype.N;Fe.prototype.listenOnce=Fe.prototype.O;Fe.prototype.getLastError=Fe.prototype.Oa;Fe.prototype.getLastErrorCode=Fe.prototype.Ea;Fe.prototype.getStatus=Fe.prototype.aa;Fe.prototype.getResponseJson=Fe.prototype.Sa;Fe.prototype.getResponseText=Fe.prototype.fa;Fe.prototype.send=Fe.prototype.da;Fe.prototype.setWithCredentials=Fe.prototype.Ka;var oN=function(){return new ga},aN=function(){return ic()},hl=rc,cN=Wy,lN=Ls,Pp={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},uN=to,Co=zy,hN=Fe;const xp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Hr("@firebase/firestore");function Mp(){return Ds.logLevel}function B(t,...e){if(Ds.logLevel<=he.DEBUG){const n=e.map(rf);Ds.debug(`Firestore (${Li}): ${t}`,...n)}}function Mn(t,...e){if(Ds.logLevel<=he.ERROR){const n=e.map(rf);Ds.error(`Firestore (${Li}): ${t}`,...n)}}function ma(t,...e){if(Ds.logLevel<=he.WARN){const n=e.map(rf);Ds.warn(`Firestore (${Li}): ${t}`,...n)}}function rf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Li}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function De(t,e){t||G()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class dN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pN{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(De(typeof s.accessToken=="string"),new Rv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new ut(e)}}class gN{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class mN{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new gN(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yN{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.T=n.token,new _N(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=vN(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function pe(t,e){return t<e?-1:t>e?1:0}function pi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ke(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ke(0,0))}static max(){return new J(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Pr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends Pr{construct(e,n,s){return new xe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const EN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Pr{construct(e,n,s){return new gt(e,n,s)}static isValidIdentifier(e){return EN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new q(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new q(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(xe.fromString(e))}static fromName(e){return new W(xe.fromString(e).popFirst(5))}static empty(){return new W(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new xe(e.slice()))}}function wN(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(s===1e9?new Ke(n+1,0):new Ke(n,s));return new ts(i,W.empty(),e)}function TN(t){return new ts(t.readTime,t.key,-1)}class ts{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ts(J.min(),W.empty(),-1)}static max(){return new ts(J.max(),W.empty(),-1)}}function IN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==bN)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(i=>i?A.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new A((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new A((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function ro(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class of{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}of.ct=-1;function dc(t){return t==null}function _a(t){return t===0&&1/t==-1/0}function SN(t){return typeof t=="number"&&Number.isInteger(t)&&!_a(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new So(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new So(this.root,e,this.comparator,!1)}getReverseIterator(){return new So(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new So(this.root,e,this.comparator,!0)}}class So{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??tt.RED,this.left=i??tt.EMPTY,this.right=r??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new tt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,i){return this}insert(t,e,n){return new tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fp(this.data.getIterator())}getIteratorFrom(e){return new Fp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Fp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new We(gt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class AN extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new AN("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const RN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(t){if(De(!!t),typeof t=="string"){let e=0;const n=RN.exec(t);if(De(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gi(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ov(t){const e=t.mapValue.fields.__previous_value__;return Dv(e)?Ov(e):e}function xr(t){const e=ns(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Mr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dv(t)?4:kN(t)?9007199254740991:10:G()}function vn(t,e){if(t===e)return!0;const n=Os(t);if(n!==Os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xr(t).isEqual(xr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ns(s.timestampValue),o=ns(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return gi(s.bytesValue).isEqual(gi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=He(s.doubleValue),o=He(i.doubleValue);return r===o?_a(r)===_a(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return pi(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Lp(r)!==Lp(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!vn(r[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Lr(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function mi(t,e){if(t===e)return 0;const n=Os(t),s=Os(e);if(n!==s)return pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=He(i.integerValue||i.doubleValue),a=He(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Up(t.timestampValue,e.timestampValue);case 4:return Up(xr(t),xr(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(i,r){const o=gi(i),a=gi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=pe(o[c],a[c]);if(l!==0)return l}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=pe(He(i.latitude),He(r.latitude));return o!==0?o:pe(He(i.longitude),He(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=mi(o[c],a[c]);if(l)return l}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Ao.mapValue&&r===Ao.mapValue)return 0;if(i===Ao.mapValue)return 1;if(r===Ao.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=pe(a[u],l[u]);if(h!==0)return h;const f=mi(o[a[u]],c[l[u]]);if(f!==0)return f}return pe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function Up(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=ns(t),s=ns(e),i=pe(n.seconds,s.seconds);return i!==0?i:pe(n.nanos,s.nanos)}function _i(t){return Eu(t)}function Eu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=ns(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Eu(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Eu(s.fields[a])}`;return r+"}"}(t.mapValue):G();var e,n}function wu(t){return!!t&&"integerValue"in t}function af(t){return!!t&&"arrayValue"in t}function Vp(t){return!!t&&"nullValue"in t}function Bp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function ur(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ur(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ur(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ur(n)}setAll(e){let n=gt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ur(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Uo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Fs(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Dt(ur(this.value))}}function Pv(t){const e=[];return Fs(t.fields,(n,s)=>{const i=new gt([n]);if(Uo(s)){const r=Pv(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new dt(e,0,J.min(),J.min(),J.min(),Dt.empty(),0)}static newFoundDocument(e,n,s,i){return new dt(e,1,n,J.min(),s,i,0)}static newNoDocument(e,n){return new dt(e,2,n,J.min(),J.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,J.min(),J.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ya{constructor(e,n){this.position=e,this.inclusive=n}}function $p(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=mi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Hp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hr{constructor(e,n="asc"){this.field=e,this.dir=n}}function DN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class xv{}class qe extends xv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new PN(e,n,s):n==="array-contains"?new LN(e,s):n==="in"?new FN(e,s):n==="not-in"?new UN(e,s):n==="array-contains-any"?new VN(e,s):new qe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new xN(e,s):new MN(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(mi(n,this.value)):n!==null&&Os(this.value)===Os(n)&&this.matchesComparison(mi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class En extends xv{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new En(e,n)}matches(e){return Mv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Mv(t){return t.op==="and"}function Lv(t){return ON(t)&&Mv(t)}function ON(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function Tu(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+_i(t.value);if(Lv(t))return t.filters.map(e=>Tu(e)).join(",");{const e=t.filters.map(n=>Tu(n)).join(",");return`${t.op}(${e})`}}function Fv(t,e){return t instanceof qe?function(n,s){return s instanceof qe&&n.op===s.op&&n.field.isEqual(s.field)&&vn(n.value,s.value)}(t,e):t instanceof En?function(n,s){return s instanceof En&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Fv(r,s.filters[o]),!0):!1}(t,e):void G()}function Uv(t){return t instanceof qe?function(e){return`${e.field.canonicalString()} ${e.op} ${_i(e.value)}`}(t):t instanceof En?function(e){return e.op.toString()+" {"+e.getFilters().map(Uv).join(" ,")+"}"}(t):"Filter"}class PN extends qe{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class xN extends qe{constructor(e,n){super(e,"in",n),this.keys=Vv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MN extends qe{constructor(e,n){super(e,"not-in",n),this.keys=Vv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class LN extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return af(n)&&Lr(n.arrayValue,this.value)}}class FN extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lr(this.value.arrayValue,n)}}class UN extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lr(this.value.arrayValue,n)}}class VN extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!af(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Lr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function jp(t,e=null,n=[],s=[],i=null,r=null,o=null){return new BN(t,e,n,s,i,r,o)}function cf(t){const e=Z(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Tu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),dc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>_i(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>_i(s)).join(",")),e.ft=n}return e.ft}function lf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!DN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hp(t.startAt,e.startAt)&&Hp(t.endAt,e.endAt)}function Iu(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function $N(t,e,n,s,i,r,o,a){return new pc(t,e,n,s,i,r,o,a)}function gc(t){return new pc(t)}function Kp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jN(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function KN(t){return t.collectionGroup!==null}function ri(t){const e=Z(t);if(e.dt===null){e.dt=[];const n=jN(e),s=HN(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new hr(n)),e.dt.push(new hr(gt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new hr(gt.keyField(),r))}}}return e.dt}function Ln(t){const e=Z(t);if(!e.wt)if(e.limitType==="F")e.wt=jp(e.path,e.collectionGroup,ri(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of ri(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new hr(r.field,o))}const s=e.endAt?new ya(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ya(e.startAt.position,e.startAt.inclusive):null;e.wt=jp(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function bu(t,e,n){return new pc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mc(t,e){return lf(Ln(t),Ln(e))&&t.limitType===e.limitType}function Bv(t){return`${cf(Ln(t))}|lt:${t.limitType}`}function Cu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Uv(s)).join(", ")}]`),dc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>_i(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>_i(s)).join(",")),`Target(${n})`}(Ln(t))}; limitType=${t.limitType})`}function _c(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):W.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of ri(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=$p(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ri(n),s)||n.endAt&&!function(i,r,o){const a=$p(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ri(n),s))}(t,e)}function qN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $v(t){return(e,n)=>{let s=!1;for(const i of ri(t)){const r=WN(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function WN(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?mi(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fs(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return kv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=new Ge(W.comparator);function Fn(){return zN}const Hv=new Ge(W.comparator);function Zi(...t){let e=Hv;for(const n of t)e=e.insert(n.key,n);return e}function jv(t){let e=Hv;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Es(){return fr()}function Kv(){return fr()}function fr(){return new Fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const GN=new Ge(W.comparator),QN=new We(W.comparator);function ie(...t){let e=QN;for(const n of t)e=e.add(n);return e}const YN=new We(pe);function qv(){return YN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_a(e)?"-0":e}}function zv(t){return{integerValue:""+t}}function XN(t,e){return SN(e)?zv(e):Wv(t,e)}/**
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
 */class yc{constructor(){this._=void 0}}function JN(t,e,n){return t instanceof va?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Fr?Qv(t,e):t instanceof Ur?Yv(t,e):function(s,i){const r=Gv(s,i),o=qp(r)+qp(s._t);return wu(r)&&wu(s._t)?zv(o):Wv(s.serializer,o)}(t,e)}function ZN(t,e,n){return t instanceof Fr?Qv(t,e):t instanceof Ur?Yv(t,e):n}function Gv(t,e){return t instanceof Ea?wu(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class va extends yc{}class Fr extends yc{constructor(e){super(),this.elements=e}}function Qv(t,e){const n=Xv(e);for(const s of t.elements)n.some(i=>vn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ur extends yc{constructor(e){super(),this.elements=e}}function Yv(t,e){let n=Xv(e);for(const s of t.elements)n=n.filter(i=>!vn(i,s));return{arrayValue:{values:n}}}class Ea extends yc{constructor(e,n){super(),this.serializer=e,this._t=n}}function qp(t){return He(t.integerValue||t.doubleValue)}function Xv(t){return af(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ek(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Fr&&s instanceof Fr||n instanceof Ur&&s instanceof Ur?pi(n.elements,s.elements,vn):n instanceof Ea&&s instanceof Ea?vn(n._t,s._t):n instanceof va&&s instanceof va}(t.transform,e.transform)}class tk{constructor(e,n){this.version=e,this.transformResults=n}}class Dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vc{}function Jv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eE(t.key,Dn.none()):new Ec(t.key,t.data,Dn.none());{const n=t.data,s=Dt.empty();let i=new We(gt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Us(t.key,s,new Jt(i.toArray()),Dn.none())}}function nk(t,e,n){t instanceof Ec?function(s,i,r){const o=s.value.clone(),a=zp(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Us?function(s,i,r){if(!Vo(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=zp(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Zv(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function dr(t,e,n,s){return t instanceof Ec?function(i,r,o,a){if(!Vo(i.precondition,r))return o;const c=i.value.clone(),l=Gp(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Us?function(i,r,o,a){if(!Vo(i.precondition,r))return o;const c=Gp(i.fieldTransforms,a,r),l=r.data;return l.setAll(Zv(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Vo(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function sk(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Gv(s.transform,i||null);r!=null&&(n===null&&(n=Dt.empty()),n.set(s.field,r))}return n||null}function Wp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&pi(n,s,(i,r)=>ek(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ec extends vc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Us extends vc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Zv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function zp(t,e,n){const s=new Map;De(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,ZN(o,a,n[i]))}return s}function Gp(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,JN(r,o,e))}return s}class eE extends vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ik extends vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&nk(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=dr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=dr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Kv();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Jv(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&pi(this.mutations,e.mutations,(n,s)=>Wp(n,s))&&pi(this.baseMutations,e.baseMutations,(n,s)=>Wp(n,s))}}class uf{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){De(e.mutations.length===s.length);let i=GN;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new uf(e,n,s,i)}}/**
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
 */class ok{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ak{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,oe;function ck(t){switch(t){default:return G();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function tE(t){if(t===void 0)return Mn("GRPC error has no .code"),C.UNKNOWN;switch(t){case $e.OK:return C.OK;case $e.CANCELLED:return C.CANCELLED;case $e.UNKNOWN:return C.UNKNOWN;case $e.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case $e.INTERNAL:return C.INTERNAL;case $e.UNAVAILABLE:return C.UNAVAILABLE;case $e.UNAUTHENTICATED:return C.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case $e.NOT_FOUND:return C.NOT_FOUND;case $e.ALREADY_EXISTS:return C.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return C.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case $e.ABORTED:return C.ABORTED;case $e.OUT_OF_RANGE:return C.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return C.UNIMPLEMENTED;case $e.DATA_LOSS:return C.DATA_LOSS;default:return G()}}(oe=$e||($e={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class hf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ro}static getOrCreateInstance(){return Ro===null&&(Ro=new hf),Ro}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ro=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,oo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new wc(J.min(),i,qv(),Fn(),ie())}}class oo{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new oo(s,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class nE{constructor(e,n){this.targetId=e,this.Et=n}}class sE{constructor(e,n,s=Et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Qp{constructor(){this.At=0,this.Rt=Xp(),this.vt=Et.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ie(),n=ie(),s=ie();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:G()}}),new oo(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Xp()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class lk{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Fn(),this.qt=Yp(),this.Ut=new We(pe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(Iu(o))if(i===0){const a=new W(o.path);this.Qt(s,a,dt.newNoDocument(a,J.min()))}else De(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=hf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Iu(a.target)){const c=new W(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,dt.newNoDocument(c,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=ie();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new wc(e,n,this.Ut,this.Lt,s);return this.Lt=Fn(),this.qt=Yp(),this.Ut=new We(pe),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Qp,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new We(pe),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Qp),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Yp(){return new Ge(W.comparator)}function Xp(){return new Ge(W.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),fk=(()=>({and:"AND",or:"OR"}))();class dk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pk(t,e){return wa(t,e.toTimestamp())}function pn(t){return De(!!t),J.fromTimestamp(function(e){const n=ns(e);return new Ke(n.seconds,n.nanos)}(t))}function ff(t,e){return function(n){return new xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function rE(t){const e=xe.fromString(t);return De(lE(e)),e}function Su(t,e){return ff(t.databaseId,e.path)}function fl(t,e){const n=rE(e);if(n.get(1)!==t.databaseId.projectId)throw new q(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(oE(n))}function Au(t,e){return ff(t.databaseId,e)}function gk(t){const e=rE(t);return e.length===4?xe.emptyPath():oE(e)}function Ru(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oE(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Jp(t,e,n){return{name:Su(t,e),fields:n.value.mapValue.fields}}function mk(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.useProto3Json?(De(l===void 0||typeof l=="string"),Et.fromBase64String(l||"")):(De(l===void 0||l instanceof Uint8Array),Et.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?C.UNKNOWN:tE(c.code);return new q(l,c.message||"")}(o);n=new sE(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=fl(t,s.document.name),r=pn(s.document.updateTime),o=s.document.createTime?pn(s.document.createTime):J.min(),a=new Dt({mapValue:{fields:s.document.fields}}),c=dt.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Bo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=fl(t,s.document),r=s.readTime?pn(s.readTime):J.min(),o=dt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Bo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=fl(t,s.document),r=s.removedTargetIds||[];n=new Bo([],r,i,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new ak(i),o=s.targetId;n=new nE(o,r)}}return n}function _k(t,e){let n;if(e instanceof Ec)n={update:Jp(t,e.key,e.value)};else if(e instanceof eE)n={delete:Su(t,e.key)};else if(e instanceof Us)n={update:Jp(t,e.key,e.data),updateMask:Sk(e.fieldMask)};else{if(!(e instanceof ik))return G();n={verify:Su(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof va)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Fr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ur)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ea)return{fieldPath:r.field.canonicalString(),increment:o._t};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:pk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function yk(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?pn(s.updateTime):pn(i);return r.isEqual(J.min())&&(r=pn(i)),new tk(r,s.transformResults||[])}(n,e))):[]}function vk(t,e){return{documents:[Au(t,e.path)]}}function Ek(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Au(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Au(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return cE(En.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:qs(u.field),direction:Ik(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.useProto3Json||dc(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function wk(t){let e=gk(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){De(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=aE(u);return h instanceof En&&Lv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new hr(Ws(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,dc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new ya(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new ya(f,h)}(n.endAt)),$N(e,i,o,r,a,"F",c,l)}function Tk(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function aE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ws(e.unaryFilter.field);return qe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ws(e.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ws(e.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ws(e.unaryFilter.field);return qe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return qe.create(Ws(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return En.create(e.compositeFilter.filters.map(n=>aE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function Ik(t){return uk[t]}function bk(t){return hk[t]}function Ck(t){return fk[t]}function qs(t){return{fieldPath:t.canonicalString()}}function Ws(t){return gt.fromServerFormat(t.fieldPath)}function cE(t){return t instanceof qe?function(e){if(e.op==="=="){if(Bp(e.value))return{unaryFilter:{field:qs(e.field),op:"IS_NAN"}};if(Vp(e.value))return{unaryFilter:{field:qs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Bp(e.value))return{unaryFilter:{field:qs(e.field),op:"IS_NOT_NAN"}};if(Vp(e.value))return{unaryFilter:{field:qs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qs(e.field),op:bk(e.op),value:e.value}}}(t):t instanceof En?function(e){const n=e.getFilters().map(s=>cE(s));return n.length===1?n[0]:{compositeFilter:{op:Ck(e.op),filters:n}}}(t):G()}function Sk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function lE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,s,i,r=J.min(),o=J.min(),a=Et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.se=e}}function Rk(t){const e=wk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.He=new kk}addToCollectionParentIndex(e,n){return this.He.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(ts.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(ts.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class kk{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new We(xe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new We(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new yi(0)}static bn(){return new yi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(){this.changes=new Fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ok{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&dr(s.mutation,i,Jt.empty(),Ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ie()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ie()){const i=Es();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Zi();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Es();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ie()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Fn();const o=fr(),a=fr();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Us)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),dr(u.mutation,l,u.mutation.getFieldMask(),Ke.now())):o.set(l.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Ok(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=fr();let i=new Ge((o,a)=>o-a),r=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Jt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||ie()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Kv();u.forEach(f=>{if(!r.has(f)){const d=Jv(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return W.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):KN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):A.resolve(Es());let a=-1,c=r;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,ie())).next(u=>({batchId:a,changes:jv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(s=>{let i=Zi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Zi();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const c=function(l,u){return new pc(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,dt.newInvalidDocument(l)))});let o=Zi();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&dr(l.mutation,c,Jt.empty(),Ke.now()),_c(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:pn(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:Rk(s.bundledQuery),readTime:pn(s.readTime)}}(n)),A.resolve()}}/**
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
 */class Mk{constructor(){this.overlays=new Ge(W.comparator),this.ts=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Es();return A.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const i=Es(),r=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ge((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Es(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Es(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return A.resolve(a)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ok(n,s));let r=this.ts.get(n);r===void 0&&(r=ie(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.es=new We(Ye.ns),this.ss=new We(Ye.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new Ye(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new Ye(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new W(new xe([])),s=new Ye(n,e),i=new Ye(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new W(new xe([])),s=new Ye(n,e),i=new Ye(n,e+1);let r=ie();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ye(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ye{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return W.comparator(e.key,n.key)||pe(e.ds,n.ds)}static rs(e,n){return pe(e.ds,n.ds)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new We(Ye.ns)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rk(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Ye(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return A.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),A.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new We(pe);return n.forEach(i=>{const r=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),A.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;W.isDocumentKey(r)||(r=r.child(""));const o=new Ye(new W(r),0);let a=new We(pe);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ds)),!0)},o),A.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){De(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return A.forEach(n.mutations,i=>{const r=new Ye(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new Ye(n,0),i=this._s.firstAfterOrEqual(s);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.Ts=e,this.docs=new Ge(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let s=Fn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():dt.newInvalidDocument(i))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Fn();const o=n.path,a=new W(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||IN(TN(u),s)<=0||(i.has(u.key)||_c(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return A.resolve(r)}getAllFromCollectionGroup(e,n,s,i){G()}Es(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Uk(this)}getSize(e){return A.resolve(this.size)}}class Uk extends Dk{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.persistence=e,this.As=new Fi(n=>cf(n),lf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Rs=0,this.vs=new df,this.targetCount=0,this.bs=yi.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),A.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new yi(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Sn(n),A.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(r).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new of(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Vk(this),this.indexManager=new Nk,this.remoteDocumentCache=function(s){return new Fk(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Ak(n),this.xs=new xk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Mk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new Lk(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const i=new $k(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return A.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class $k extends CN{constructor(e){super(),this.currentSequenceNumber=e}}class pf{constructor(e){this.persistence=e,this.$s=new df,this.Ms=null}static Fs(e){return new pf(e)}get Bs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),A.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Bs,s=>{const i=W.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,J.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return A.or([()=>A.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=i}static Di(e,n){let s=ie(),i=ie();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new gf(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(Kp(n))return A.resolve(null);let s=Ln(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bu(n,null,"F"),s=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ie(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,bu(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,i){return Kp(n)||i.isEqual(J.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(Mp()<=he.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cu(n)),this.Fi(e,o,n,wN(i,-1)))})}$i(e,n){let s=new We($v(e));return n.forEach((i,r)=>{_c(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return Mp()<=he.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Cu(n)),this.xi.getDocumentsMatchingQuery(e,n,ts.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new Ge(pe),this.qi=new Fi(r=>cf(r),lf),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pk(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function Kk(t,e,n,s){return new jk(t,e,n,s)}async function uE(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=ie();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function qk(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=A.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(g=>{const _=c.docVersions.get(d);De(_!==null),g.version.compareTo(_)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ie();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function hE(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function Wk(t,e){const n=Z(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(Et.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),i=i.insert(h,d),function(g,_,y){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(r,d))});let c=Fn(),l=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(zk(r,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(J.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return A.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Li=i,r))}function zk(t,e,n){let s=ie(),i=ie();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Fn();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:i}})}function Gk(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Qk(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,A.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new Cs(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Nu(t,e,n){const s=Z(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ro(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function Zp(t,e,n){const s=Z(t);let i=J.min(),r=ie();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Z(a),h=u.qi.get(l);return h!==void 0?A.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(s,o,Ln(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?r:ie())).next(a=>(Yk(s,qN(e),a),{documents:a,Wi:r})))}function Yk(t,e,n){let s=t.Ui.get(e)||J.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class eg{constructor(){this.activeTargetIds=qv()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xk{constructor(){this.Br=new eg,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new eg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let No=null;function dl(){return No===null?No=268435456+Math.round(2147483648*Math.random()):No++,"0x"+No.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class tD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=dl(),a=this.ao(e,n);B("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,i,r),this.lo(e,a,c,s).then(l=>(B("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw ma("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Li,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=Zk[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=dl();return new Promise((o,a)=>{const c=new hN;c.setWithCredentials(!0),c.listenOnce(cN.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case hl.NO_ERROR:const u=c.getResponseJson();B(lt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case hl.TIMEOUT:B(lt,`RPC '${e}' ${r} timed out`),a(new q(C.DEADLINE_EXCEEDED,"Request time out"));break;case hl.HTTP_ERROR:const h=c.getStatus();if(B(lt,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const g=function(_){const y=_.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(y)>=0?y:C.UNKNOWN}(d.status);a(new q(g,d.message))}else a(new q(C.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new q(C.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{B(lt,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(i);B(lt,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",l,s,15)})}wo(e,n,s){const i=dl(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=oN(),a=aN(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new uN({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=r.join("");B(lt,`Creating RPC '${e}' stream ${i}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const d=new eD({Wr:_=>{f?B(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||(B(lt,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),B(lt,`RPC '${e}' stream ${i} sending:`,_),u.send(_))},Hr:()=>u.close()}),g=(_,y,w)=>{_.listen(y,k=>{try{w(k)}catch(I){setTimeout(()=>{throw I},0)}})};return g(u,Co.EventType.OPEN,()=>{f||B(lt,`RPC '${e}' stream ${i} transport opened.`)}),g(u,Co.EventType.CLOSE,()=>{f||(f=!0,B(lt,`RPC '${e}' stream ${i} transport closed`),d.so())}),g(u,Co.EventType.ERROR,_=>{f||(f=!0,ma(lt,`RPC '${e}' stream ${i} transport errored:`,_),d.so(new q(C.UNAVAILABLE,"The operation could not be completed")))}),g(u,Co.EventType.MESSAGE,_=>{var y;if(!f){const w=_.data[0];De(!!w);const k=w,I=k.error||((y=k[0])===null||y===void 0?void 0:y.error);if(I){B(lt,`RPC '${e}' stream ${i} received error:`,I);const O=I.status;let z=function(de){const $=$e[de];if($!==void 0)return tE($)}(O),ne=I.message;z===void 0&&(z=C.INTERNAL,ne="Unknown error status: "+O+" with message "+I.message),f=!0,d.so(new q(z,ne)),u.close()}else B(lt,`RPC '${e}' stream ${i} received:`,w),d.io(w)}}),g(a,lN.STAT_EVENT,_=>{_.stat===Pp.PROXY?B(lt,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Pp.NOPROXY&&B(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function pl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){return new dk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n,s,i,r,o,a,c){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new fE(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new q(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nD extends dE{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=mk(this.serializer,e),s=function(i){if(!("targetChange"in i))return J.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?J.min():r.readTime?pn(r.readTime):J.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Ru(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=Iu(a)?{documents:vk(i,a)}:{query:Ek(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=iE(i,r.resumeToken):r.snapshotVersion.compareTo(J.min())>0&&(o.readTime=wa(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=Tk(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Ru(this.serializer),n.removeTarget=e,this.Fo(n)}}class sD extends dE{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=yk(e.writeResults,e.commitTime),s=pn(e.commitTime);return this.listener.Zo(s,n)}return De(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Ru(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>_k(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new q(C.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(C.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(C.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class rD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Mn(n),this.ru=!1):B("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{Vs(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Z(a);c.du.add(4),await ao(c),c.mu.set("Unknown"),c.du.delete(4),await Ic(c)}(this))})}),this.mu=new rD(s,i)}}async function Ic(t){if(Vs(t))for(const e of t.wu)await e(!0)}async function ao(t){for(const e of t.wu)await e(!1)}function pE(t,e){const n=Z(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),yf(n)?_f(n):Ui(n).No()&&mf(n,e))}function gE(t,e){const n=Z(t),s=Ui(n);n.fu.delete(e),s.No()&&mE(n,e),n.fu.size===0&&(s.No()?s.$o():Vs(n)&&n.mu.set("Unknown"))}function mf(t,e){t.gu.Ot(e.targetId),Ui(t).jo(e)}function mE(t,e){t.gu.Ot(e),Ui(t).Wo(e)}function _f(t){t.gu=new lk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Ui(t).start(),t.mu.ou()}function yf(t){return Vs(t)&&!Ui(t).xo()&&t.fu.size>0}function Vs(t){return Z(t).du.size===0}function _E(t){t.gu=void 0}async function aD(t){t.fu.forEach((e,n)=>{mf(t,e)})}async function cD(t,e){_E(t),yf(t)?(t.mu.au(e),_f(t)):t.mu.set("Unknown")}async function lD(t,e,n){if(t.mu.set("Online"),e instanceof sE&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ta(t,s)}else if(e instanceof Bo?t.gu.Kt(e):e instanceof nE?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(J.min()))try{const s=await hE(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.fu.get(c);l&&i.fu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(Et.EMPTY_BYTE_STRING,c.snapshotVersion)),mE(i,a);const l=new Cs(c.target,a,1,c.sequenceNumber);mf(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await Ta(t,s)}}async function Ta(t,e,n){if(!ro(e))throw e;t.du.add(1),await ao(t),t.mu.set("Offline"),n||(n=()=>hE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Ic(t)})}function yE(t,e){return e().catch(n=>Ta(t,n,e))}async function bc(t){const e=Z(t),n=ss(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;uD(e);)try{const i=await Gk(e.localStore,s);if(i===null){e.lu.length===0&&n.$o();break}s=i.batchId,hD(e,i)}catch(i){await Ta(e,i)}vE(e)&&EE(e)}function uD(t){return Vs(t)&&t.lu.length<10}function hD(t,e){t.lu.push(e);const n=ss(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function vE(t){return Vs(t)&&!ss(t).xo()&&t.lu.length>0}function EE(t){ss(t).start()}async function fD(t){ss(t).tu()}async function dD(t){const e=ss(t);for(const n of t.lu)e.Yo(n.mutations)}async function pD(t,e,n){const s=t.lu.shift(),i=uf.from(s,e,n);await yE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bc(t)}async function gD(t,e){e&&ss(t).Jo&&await async function(n,s){if(i=s.code,ck(i)&&i!==C.ABORTED){const r=n.lu.shift();ss(n).Oo(),await yE(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await bc(n)}var i}(t,e),vE(t)&&EE(t)}async function ng(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=Vs(n);n.du.add(3),await ao(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Ic(n)}async function mD(t,e){const n=Z(t);e?(n.du.delete(2),await Ic(n)):e||(n.du.add(2),await ao(n),n.mu.set("Unknown"))}function Ui(t){return t.yu||(t.yu=function(e,n,s){const i=Z(e);return i.nu(),new nD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:aD.bind(null,t),Zr:cD.bind(null,t),zo:lD.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),yf(t)?_f(t):t.mu.set("Unknown")):(await t.yu.stop(),_E(t))})),t.yu}function ss(t){return t.pu||(t.pu=function(e,n,s){const i=Z(e);return i.nu(),new sD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:fD.bind(null,t),Zr:gD.bind(null,t),Xo:dD.bind(null,t),Zo:pD.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await bc(t)):(await t.pu.stop(),t.lu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new vf(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ef(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),ro(t))return new q(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||W.comparator(n.key,s.key):(n,s)=>W.comparator(n.key,s.key),this.keyedMap=Zi(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new oi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(){this.Iu=new Ge(W.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):G():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class vi{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vi(e,n,oi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(){this.Eu=void 0,this.listeners=[]}}class yD{constructor(){this.queries=new Fi(e=>Bv(e),mc),this.onlineState="Unknown",this.Au=new Set}}async function wf(t,e){const n=Z(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new _D),i)try{r.Eu=await n.onListen(s)}catch(o){const a=Ef(o,`Initialization of query '${Cu(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&If(n)}async function Tf(t,e){const n=Z(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function vD(t,e){const n=Z(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&If(n)}function ED(t,e,n){const s=Z(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function If(t){t.Au.forEach(e=>{e.next()})}class bf{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new vi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this.key=e}}class TE{constructor(e){this.key=e}}class wD{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ie(),this.mutatedKeys=ie(),this.Ku=$v(e),this.Gu=new oi(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new sg,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=_c(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),_=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?g!==_&&(s.track({type:3,doc:d}),y=!0):this.Wu(f,d)||(s.track({type:2,doc:d}),y=!0,(c&&this.Ku(d,c)>0||l&&this.Ku(d,l)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),y=!0):f&&!d&&(s.track({type:1,doc:f}),y=!0,(c||l)&&(a=!0)),y&&(d?(o=o.add(d),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((l,u)=>function(h,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return d(h)-d(f)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new vi(this.query,e.Gu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new sg,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ie(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new TE(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new wE(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ie();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return vi.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class TD{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ID{constructor(e){this.key=e,this.ec=!1}}class bD{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Fi(a=>Bv(a),mc),this.ic=new Map,this.rc=new Set,this.oc=new Ge(W.comparator),this.uc=new Map,this.cc=new df,this.ac={},this.hc=new Map,this.lc=yi.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function CD(t,e){const n=MD(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await Qk(n.localStore,Ln(e));n.isPrimaryClient&&pE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await SD(n,e,s,a==="current",o.resumeToken)}return i}async function SD(t,e,n,s,i){t.dc=(h,f,d)=>async function(g,_,y,w){let k=_.view.zu(y);k.Mi&&(k=await Zp(g.localStore,_.query,!1).then(({documents:z})=>_.view.zu(z,k)));const I=w&&w.targetChanges.get(_.targetId),O=_.view.applyChanges(k,g.isPrimaryClient,I);return rg(g,_.targetId,O.Yu),O.snapshot}(t,h,f,d);const r=await Zp(t.localStore,e,!0),o=new wD(e,r.Wi),a=o.zu(r.documents),c=oo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);rg(t,n,l.Yu);const u=new TD(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function AD(t,e){const n=Z(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!mc(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Nu(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),gE(n.remoteStore,s.targetId),ku(n,s.targetId)}).catch(io)):(ku(n,s.targetId),await Nu(n.localStore,s.targetId,!0))}async function RD(t,e,n){const s=LD(t);try{const i=await function(r,o){const a=Z(r),c=Ke.now(),l=o.reduce((f,d)=>f.add(d.key),ie());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Fn(),g=ie();return a.Ki.getEntries(f,l).next(_=>{d=_,d.forEach((y,w)=>{w.isValidDocument()||(g=g.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(_=>{u=_;const y=[];for(const w of o){const k=sk(w,u.get(w.key).overlayedDocument);k!=null&&y.push(new Us(w.key,k,Pv(k.value.mapValue),Dn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,y,o)}).next(_=>{h=_;const y=_.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,_.batchId,y)})}).then(()=>({batchId:h.batchId,changes:jv(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.ac[r.currentUser.toKey()];c||(c=new Ge(pe)),c=c.insert(o,a),r.ac[r.currentUser.toKey()]=c}(s,i.batchId,n),await co(s,i.changes),await bc(s.remoteStore)}catch(i){const r=Ef(i,"Failed to persist write");n.reject(r)}}async function IE(t,e){const n=Z(t);try{const s=await Wk(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(De(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?De(o.ec):i.removedDocuments.size>0&&(De(o.ec),o.ec=!1))}),await co(n,s,e)}catch(s){await io(s)}}function ig(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Z(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&If(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ND(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new Ge(W.comparator);o=o.insert(r,dt.newNoDocument(r,J.min()));const a=ie().add(r),c=new wc(J.min(),new Map,new We(pe),o,a);await IE(s,c),s.oc=s.oc.remove(r),s.uc.delete(e),Cf(s)}else await Nu(s.localStore,e,!1).then(()=>ku(s,e,n)).catch(io)}async function kD(t,e){const n=Z(t),s=e.batch.batchId;try{const i=await qk(n.localStore,e);CE(n,s,null),bE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await co(n,i)}catch(i){await io(i)}}async function DD(t,e,n){const s=Z(t);try{const i=await function(r,o){const a=Z(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(De(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);CE(s,e,n),bE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await co(s,i)}catch(i){await io(i)}}function bE(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function CE(t,e,n){const s=Z(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function ku(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||SE(t,s)})}function SE(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(gE(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Cf(t))}function rg(t,e,n){for(const s of n)s instanceof wE?(t.cc.addReference(s.key,e),OD(t,s)):s instanceof TE?(B("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||SE(t,s.key)):G()}function OD(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(B("SyncEngine","New document in limbo: "+n),t.rc.add(s),Cf(t))}function Cf(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new W(xe.fromString(e)),s=t.lc.next();t.uc.set(s,new ID(n)),t.oc=t.oc.insert(n,s),pE(t.remoteStore,new Cs(Ln(gc(n.path)),s,2,of.ct))}}async function co(t,e,n){const s=Z(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=gf.Di(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,c){const l=Z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.Vi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>A.forEach(h.Si,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!ro(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Li.get(h),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);l.Li=l.Li.insert(h,g)}}}(s.localStore,r))}async function PD(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await uE(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(C.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await co(n,s.Qi)}}function xD(t,e){const n=Z(t),s=n.uc.get(e);if(s&&s.ec)return ie().add(s.key);{let i=ie();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function MD(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=IE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ND.bind(null,e),e.nc.zo=vD.bind(null,e.eventManager),e.nc.wc=ED.bind(null,e.eventManager),e}function LD(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DD.bind(null,e),e}class og{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Kk(this.persistence,new Hk,e.initialUser,this.serializer)}createPersistence(e){return new Bk(pf.Fs,this.serializer)}createSharedClientState(e){return new Xk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ig(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=PD.bind(null,this.syncEngine),await mD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yD}createDatastore(e){const n=Tc(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new tD(i));var i;return function(r,o,a,c){return new iD(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>ig(this.syncEngine,a,0),o=tg.D()?new tg:new Jk,new oD(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new bD(s,i,r,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);B("RemoteStore","RemoteStore shutting down."),n.du.add(5),await ao(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=Nv.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{B("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(B("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ef(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function gl(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await uE(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ag(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BD(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>ng(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>ng(e.remoteStore,r)),t._onlineComponents=e}function VD(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function BD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await gl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!VD(n))throw n;ma("Error using user provided cache. Falling back to memory cache: "+n),await gl(t,new og)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await gl(t,new og);return t._offlineComponents}async function AE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await ag(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await ag(t,new FD))),t._onlineComponents}function $D(t){return AE(t).then(e=>e.syncEngine)}async function Ia(t){const e=await AE(t),n=e.eventManager;return n.onListen=CD.bind(null,e.syncEngine),n.onUnlisten=AD.bind(null,e.syncEngine),n}function HD(t,e,n={}){const s=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Sf({next:h=>{r.enqueueAndForget(()=>Tf(i,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new q(C.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new q(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new bf(gc(o.path),l,{includeMetadataChanges:!0,xu:!0});return wf(i,u)}(await Ia(t),t.asyncQueue,e,n,s)),s.promise}function jD(t,e,n={}){const s=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Sf({next:h=>{r.enqueueAndForget(()=>Tf(i,u)),h.fromCache&&a.source==="server"?c.reject(new q(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new bf(o,l,{includeMetadataChanges:!0,xu:!0});return wf(i,u)}(await Ia(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t,e,n){if(!n)throw new q(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KD(t,e,n,s){if(e===!0&&s===!0)throw new q(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lg(t){if(!W.isDocumentKey(t))throw new q(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ug(t){if(W.isDocumentKey(t))throw new q(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Af(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Af(t);throw new q(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,KD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new fN;switch(n.type){case"firstParty":return new mN(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=cg.get(e);n&&(B("ComponentProvider","Removing Datastore"),cg.delete(e),n.terminate())}(this),Promise.resolve()}}function qD(t,e,n,s={}){var i;const r=(t=gn(t,Cc))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&ma("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ut.MOCK_USER;else{o=VI(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new q(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ut(c)}t._authCredentials=new dN(new Rv(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class lo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new lo(this.firestore,e,this._query)}}class Xn extends lo{constructor(e,n,s){super(e,n,gc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new W(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function Sc(t,e,...n){if(t=Rt(t),RE("collection","path",e),t instanceof Cc){const s=xe.fromString(e,...n);return ug(s),new Xn(t,null,s)}{if(!(t instanceof St||t instanceof Xn))throw new q(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return ug(s),new Xn(t.firestore,null,s)}}function On(t,e,...n){if(t=Rt(t),arguments.length===1&&(e=Nv.A()),RE("doc","path",e),t instanceof Cc){const s=xe.fromString(e,...n);return lg(s),new St(t,null,new W(s))}{if(!(t instanceof St||t instanceof Xn))throw new q(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return lg(s),new St(t.firestore,t instanceof Xn?t.converter:null,new W(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new fE(this,"async_queue_retry"),this.qc=()=>{const n=pl();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=pl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=pl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new kn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!ro(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Mn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=vf.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function fg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ei extends Cc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new WD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kE(this),this._firestoreClient.terminate()}}function NE(t,e){const n=typeof t=="object"?t:Ym(),s=typeof t=="string"?t:e||"(default)",i=zb(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=LI("firestore");r&&qD(i,...r)}return i}function Ac(t){return t._firestoreClient||kE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kE(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,c,l){return new NN(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new UD(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wi(Et.fromBase64String(e))}catch(n){throw new q(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wi(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=/^__.*__$/;class DE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Us(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function OE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Nf{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.ea(e),i}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ba(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(OE(this.Yc)&&zD.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class GD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Tc(e)}ua(e,n,s,i=!1){return new Nf({Yc:e,methodName:n,oa:s,path:gt.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function QD(t){const e=t._freezeSettings(),n=Tc(t._databaseId);return new GD(t._databaseId,!!e.ignoreUndefinedProperties,n)}class kc extends Rf{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kc}}function YD(t,e,n,s){const i=t.ua(1,e,n);xE("Data must be an object, but it was:",i,s);const r=[],o=Dt.empty();Fs(s,(c,l)=>{const u=kf(e,c,n);l=Rt(l);const h=i.na(u);if(l instanceof kc)r.push(u);else{const f=Dc(l,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new Jt(r);return new DE(o,a,i.fieldTransforms)}function XD(t,e,n,s,i,r){const o=t.ua(1,e,n),a=[dg(e,s,n)],c=[i];if(r.length%2!=0)throw new q(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(dg(e,r[f])),c.push(r[f+1]);const l=[],u=Dt.empty();for(let f=a.length-1;f>=0;--f)if(!eO(l,a[f])){const d=a[f];let g=c[f];g=Rt(g);const _=o.na(d);if(g instanceof kc)l.push(d);else{const y=Dc(g,_);y!=null&&(l.push(d),u.set(d,y))}}const h=new Jt(l);return new DE(u,h,o.fieldTransforms)}function Dc(t,e){if(PE(t=Rt(t)))return xE("Unsupported field value:",e,t),JD(t,e);if(t instanceof Rf)return function(n,s){if(!OE(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Dc(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return XN(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ke.fromDate(n);return{timestampValue:wa(s.serializer,i)}}if(n instanceof Ke){const i=new Ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:wa(s.serializer,i)}}if(n instanceof Nc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wi)return{bytesValue:iE(s.serializer,n._byteString)};if(n instanceof St){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ff(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Af(n)}`)}(t,e)}function JD(t,e){const n={};return kv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fs(t,(s,i)=>{const r=Dc(i,e.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function PE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Nc||t instanceof wi||t instanceof St||t instanceof Rf)}function xE(t,e,n){if(!PE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Af(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function dg(t,e,n){if((e=Rt(e))instanceof Rc)return e._internalPath;if(typeof e=="string")return kf(t,e);throw ba("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZD=new RegExp("[~\\*/\\[\\]]");function kf(t,e,n){if(e.search(ZD)>=0)throw ba(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rc(...e.split("."))._internalPath}catch{throw ba(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ba(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new q(C.INVALID_ARGUMENT,a+t+c)}function eO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(LE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tO extends ME{data(){return super.data()}}function LE(t,e){return typeof e=="string"?kf(t,e):e instanceof Rc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nO{convertValue(e,n="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const s={};return Fs(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Nc(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ov(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(xr(e));default:return null}}convertTimestamp(e){const n=ns(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=xe.fromString(e);De(lE(s));const i=new Mr(s.get(1),s.get(3)),r=new W(s.popFirst(5));return i.isEqual(n)||Mn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class UE extends ME{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(LE("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class $o extends UE{data(e={}){return super.data(e)}}class VE{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new er(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new $o(this._firestore,this._userDataWriter,s.key,s,new er(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new $o(s._firestore,s._userDataWriter,o.doc.key,o.doc,new er(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new $o(s._firestore,s._userDataWriter,o.doc.key,o.doc,new er(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:sO(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t){t=gn(t,St);const e=gn(t.firestore,Ei);return HD(Ac(e),t._key).then(n=>$E(e,t,n))}class Df extends nO{constructor(e){super(),this.firestore=e}convertBytes(e){return new wi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function iO(t){t=gn(t,lo);const e=gn(t.firestore,Ei),n=Ac(e),s=new Df(e);return FE(t._query),jD(n,t._query).then(i=>new VE(e,s,t,i))}function rO(t,e,n,...s){t=gn(t,St);const i=gn(t.firestore,Ei),r=QD(i);let o;return o=typeof(e=Rt(e))=="string"||e instanceof Rc?XD(r,"updateDoc",t._key,e,n,s):YD(r,"updateDoc",t._key,e),oO(i,[o.toMutation(t._key,Dn.exists(!0))])}function Of(t,...e){var n,s,i;t=Rt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||fg(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(fg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof St)l=gn(t.firestore,Ei),u=gc(t._key.path),c={next:h=>{e[o]&&e[o]($E(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=gn(t,lo);l=gn(h.firestore,Ei),u=h._query;const f=new Df(l);c={next:d=>{e[o]&&e[o](new VE(l,f,h,d))},error:e[o+1],complete:e[o+2]},FE(t._query)}return function(h,f,d,g){const _=new Sf(g),y=new bf(f,_,d);return h.asyncQueue.enqueueAndForget(async()=>wf(await Ia(h),y)),()=>{_.yc(),h.asyncQueue.enqueueAndForget(async()=>Tf(await Ia(h),y))}}(Ac(l),u,a,c)}function oO(t,e){return function(n,s){const i=new kn;return n.asyncQueue.enqueueAndForget(async()=>RD(await $D(n),s,i)),i.promise}(Ac(t),e)}function $E(t,e,n){const s=n.docs.get(e._key),i=new Df(t);return new UE(t,i,e._key,s,new er(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Li=n})(ki),_n(new rn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Ei(new pN(n.getProvider("auth-internal")),new yN(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Pt(xp,"3.10.1",t),Pt(xp,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="firebasestorage.googleapis.com",aO="storageBucket",cO=2*60*1e3,lO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Vn{constructor(e,n,s=0){super(ml(e),`Firebase Storage: ${n} (${ml(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ml(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var wn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(wn||(wn={}));function ml(t){return"storage/"+t}function uO(){const t="An unknown error occurred, please check the error payload for server response.";return new Tn(wn.UNKNOWN,t)}function hO(){return new Tn(wn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fO(){return new Tn(wn.CANCELED,"User canceled the upload/download.")}function dO(t){return new Tn(wn.INVALID_URL,"Invalid URL '"+t+"'.")}function pO(t){return new Tn(wn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function pg(t){return new Tn(wn.INVALID_ARGUMENT,t)}function jE(){return new Tn(wn.APP_DELETED,"The Firebase app was deleted.")}function gO(t){return new Tn(wn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Zt.makeFromUrl(e,n)}catch{return new Zt(e,"")}if(s.path==="")return s;throw pO(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(O){O.path_=decodeURIComponent(O.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},_=n===HE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",w=new RegExp(`^https?://${_}/${i}/${y}`,"i"),I=[{regex:a,indices:c,postModify:r},{regex:d,indices:g,postModify:l},{regex:w,indices:{bucket:1,path:2},postModify:l}];for(let O=0;O<I.length;O++){const z=I[O],ne=z.regex.exec(e);if(ne){const de=ne[z.indices.bucket];let $=ne[z.indices.path];$||($=""),s=new Zt(de,$),z.postModify(s);break}}if(s==null)throw dO(e);return s}}class mO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _O(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...y){l||(l=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(d,c())},y)}function f(){r&&clearTimeout(r)}function d(y,...w){if(l){f();return}if(y){f(),u.call(null,y,...w);return}if(c()||o){f(),u.call(null,y,...w);return}s<64&&(s*=2);let I;a===1?(a=2,I=0):I=(s+Math.random())*1e3,h(I)}let g=!1;function _(y){g||(g=!0,f(),!l&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function yO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vO(t){return t!==void 0}function gg(t,e,n,s){if(s<e)throw pg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw pg(`Invalid value for '${t}'. Expected ${n} or less.`)}function EO(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ca;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ca||(Ca={}));/**
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
 */function wO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e,n,s,i,r,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ko(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ca.NO_ERROR,c=r.getStatus();if(!a||wO(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ca.ABORT;s(!1,new ko(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new ko(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());vO(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=uO();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?jE():fO();o(c)}else{const c=hO();o(c)}};this.canceled_?n(!1,new ko(!1,null,!0)):this.backoffId_=_O(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&yO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ko{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function IO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function CO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function SO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function AO(t,e,n,s,i,r,o=!0){const a=EO(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return CO(l,e),IO(l,n),bO(l,r),SO(l,s),new TO(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this._service=e,n instanceof Zt?this._location=n:this._location=Zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Sa(e,n)}get root(){const e=new Zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return NO(this._location.path)}get storage(){return this._service}get parent(){const e=RO(this._location.path);if(e===null)return null;const n=new Zt(this._location.bucket,e);return new Sa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw gO(e)}}function mg(t,e){const n=e==null?void 0:e[aO];return n==null?null:Zt.makeFromBucketSpec(n,t)}class kO{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=HE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cO,this._maxUploadRetryTime=lO,this._requests=new Set,i!=null?this._bucket=Zt.makeFromBucketSpec(i,this._host):this._bucket=mg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Zt.makeFromBucketSpec(this._url,e):this._bucket=mg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Sa(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new mO(jE());{const o=AO(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const _g="@firebase/storage",yg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO="storage";function OO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new kO(n,s,i,e,ki)}function PO(){_n(new rn(DO,OO,"PUBLIC").setMultipleInstances(!0)),Pt(_g,yg,""),Pt(_g,yg,"esm2017")}PO();const _l=new WeakMap;function KE(t,e){return _l.has(e)||_l.set(e,t||{f:{},r:{},s:{},u:{}}),_l.get(e)}function xO(t,e,n,s){if(!t)return n;const[i,r]=qE(t);if(!i)return n;const o=KE(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function MO(t,e,n,s){if(!t)return;const[i,r]=qE(t);if(!i)return;const o=KE(void 0,s)[i],a=e||r;if(a)return n.then(c=>{o[a]=c}).catch(fn),a}function qE(t){return EC(t)||wC(t)?["f",t.path]:TC(t)?["r",t.toString()]:IC(t)?["s",t.toString()]:[]}const yl=new WeakMap;function LO(t,e,n){const s=dh();yl.has(s)||yl.set(s,new Map);const i=yl.get(s),r=MO(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):fn}const FO={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Du(t,e,n,s){if(!vC(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const g=Object.getOwnPropertyDescriptor(a,d);g&&!g.enumerable&&Object.defineProperty(h,d,g)});for(const d in a){const g=a[d];if(g==null||g instanceof Date||g instanceof Ke||g instanceof Nc)h[d]=g;else if(gh(g)){const _=l+d;h[d]=_ in n?c[d]:g.path,f[_]=g.converter?g:g.withConverter(s.converter)}else if(Array.isArray(g)){h[d]=Array(g.length);for(let _=0;_<g.length;_++){const y=g[_];y&&y.path in r&&(h[d][_]=r[y.path])}o(g,c[d]||h[d],l+d+".",[h[d],f])}else Ps(g)?(h[d]={},o(g,c[d],l+d+".",[h[d],f])):h[d]=g}}return o(t,e,"",i),i}const Pf={reset:!1,wait:!0,maxRefDepth:2,converter:FO,snapshotOptions:{serverTimestamps:"estimate"}};function Aa(t){for(const e in t)t[e].unsub()}function Ou(t,e,n,s,i,r,o,a,c){const[l,u]=Du(s.data(t.snapshotOptions),ph(e,n),i,t);r.set(e,n,l),Pu(t,e,n,i,u,r,o,a,c)}function UO({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const c=Object.create(null);let l=fn;return a.once?BE(t).then(u=>{u.exists()?Ou(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())}).catch(r):l=Of(t,u=>{u.exists()?Ou(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())},r),()=>{l(),Aa(c)}}function Pu(t,e,n,s,i,r,o,a,c){const l=Object.keys(i);if(Object.keys(s).filter(_=>l.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const f=l.length,d=Object.create(null);function g(_){_ in d&&++h>=f&&a(n)}l.forEach(_=>{const y=s[_],w=i[_],k=`${n}.${_}`;if(d[k]=!0,y)if(y.path!==w.path)y.unsub();else return;s[_]={data:()=>ph(e,k),unsub:UO({ref:w,target:e,path:k,depth:o,ops:r,resolve:g.bind(null,k),reject:c},t),path:w.path}})}function VO(t,e,n,s,i,r){const o=Object.assign({},Pf,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let f=Bt(l?[]:t.value);l||n.set(t,h,[]);const d=s;let g,_=fn;const y=[],w={added:({newIndex:I,doc:O})=>{y.splice(I,0,Object.create(null));const z=y[I],[ne,de]=Du(O.data(c),void 0,z,o);n.add(F(f),I,ne),Pu(o,f,`${h}.${I}`,z,de,n,0,s.bind(null,O),i)},modified:({oldIndex:I,newIndex:O,doc:z})=>{const ne=F(f),de=y[I],$=ne[I],[be,_e]=Du(z.data(c),$,de,o);y.splice(O,0,de),n.remove(ne,I),n.add(ne,O,be),Pu(o,f,`${h}.${O}`,de,_e,n,0,s,i)},removed:({oldIndex:I})=>{const O=F(f);n.remove(O,I),Aa(y.splice(I,1)[0])}};function k(I){const O=I.docChanges(a);if(!g&&O.length){g=!0;let z=0;const ne=O.length,de=Object.create(null);for(let $=0;$<ne;$++)de[O[$].doc.id]=!0;s=$=>{$&&$.id in de&&++z>=ne&&(l&&(n.set(t,h,F(f)),f=t),d(F(f)),s=fn)}}O.forEach(z=>{w[z.type](z)}),O.length||(l&&(n.set(t,h,F(f)),f=t),s(F(f)))}return u?iO(e).then(k).catch(i):_=Of(e,k,i),I=>{if(_(),I){const O=typeof I=="function"?I():[];n.set(t,h,O)}y.forEach(Aa)}}function BO(t,e,n,s,i,r){const o=Object.assign({},Pf,r),a="value",c=Object.create(null);s=bC(s,()=>ph(t,a));let l=fn;function u(h){h.exists()?Ou(o,t,a,h,c,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?BE(e).then(u).catch(i):l=Of(e,u,i),h=>{if(l(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Aa(c)}}function $O(t,e){let n=fn;const s=Object.assign({},Pf,e),i=F(t),r=s.target||Bt();CC()&&(s.once=!0);const o=xO(i,s.ssrKey,r.value,dh());r.value=o;let c=!(p_(i)?(o||[]).length>0:o!==void 0);const l=Bt(!1),u=Bt(),h=rm(),f=Kg();let d=fn;function g(){let w=F(t);const k=new Promise((I,O)=>{if(n(s.reset),!w)return n=fn,I(null);l.value=c,c=!0,w.converter||(w=w.withConverter(s.converter)),n=(gh(w)?BO:VO)(r,w,HO,I,O,s)}).catch(I=>(h.value===k&&(u.value=I),Promise.reject(I))).finally(()=>{h.value===k&&(l.value=!1)});h.value=k}let _=fn;st(t)&&(_=tr(t,g)),g(),i&&(d=LO(h.value,i,s.ssrKey)),$r()&&Im(()=>h.value),f&&_w(y);function y(w=s.reset){_(),d(),n(w)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>y}})}const HO={set:(t,e,n)=>_C(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function en(t,e){return $O(t,e)}function Oc(t){return NE(dh(t))}function jO(t,{firebaseApp:e,modules:n=[]}){t.provide(d_,e);for(const s of n)t.use(s.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const zs=typeof window<"u";function KO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function vl(t,e){const n={};for(const s in e){const i=e[s];n[s]=on(i)?i.map(t):t(i)}return n}const pr=()=>{},on=Array.isArray,qO=/\/$/,WO=t=>t.replace(qO,"");function El(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=YO(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function zO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function GO(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ti(e.matched[s],n.matched[i])&&WE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ti(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function WE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!QO(t[n],e[n]))return!1;return!0}function QO(t,e){return on(t)?Eg(t,e):on(e)?Eg(e,t):t===e}function Eg(t,e){return on(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function YO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Vr;(function(t){t.pop="pop",t.push="push"})(Vr||(Vr={}));var gr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(gr||(gr={}));function XO(t){if(!t)if(zs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),WO(t)}const JO=/^[^#]+#/;function ZO(t,e){return t.replace(JO,"#")+e}function e1(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Pc=()=>({left:window.pageXOffset,top:window.pageYOffset});function t1(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=e1(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function wg(t,e){return(history.state?history.state.position-e:-1)+t}const xu=new Map;function n1(t,e){xu.set(t,e)}function s1(t){const e=xu.get(t);return xu.delete(t),e}let i1=()=>location.protocol+"//"+location.host;function zE(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),vg(c,"")}return vg(n,t)+s+i}function r1(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const d=zE(t,location),g=n.value,_=e.value;let y=0;if(f){if(n.value=d,e.value=f,o&&o===g){o=null;return}y=_?f.position-_.position:0}else s(d);i.forEach(w=>{w(n.value,g,{delta:y,type:Vr.pop,direction:y?y>0?gr.forward:gr.back:gr.unknown})})};function c(){o=n.value}function l(f){i.push(f);const d=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(ye({},f.state,{scroll:Pc()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Tg(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Pc():null}}function o1(t){const{history:e,location:n}=window,s={value:zE(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:i1()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),i.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=ye({},e.state,Tg(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=ye({},i.value,e.state,{forward:c,scroll:Pc()});r(u.current,u,!0);const h=ye({},Tg(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function a1(t){t=XO(t);const e=o1(t),n=r1(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ye({location:"",base:t,go:s,createHref:ZO.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function c1(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),a1(t)}function l1(t){return typeof t=="string"||t&&typeof t=="object"}function GE(t){return typeof t=="string"||typeof t=="symbol"}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},QE=Symbol("");var Ig;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ig||(Ig={}));function Ii(t,e){return ye(new Error,{type:t,[QE]:!0},e)}function bn(t,e){return t instanceof Error&&QE in t&&(e==null||!!(t.type&e))}const bg="[^/]+?",u1={sensitive:!1,strict:!1,start:!0,end:!0},h1=/[.+*?^${}()[\]/\\]/g;function f1(t,e){const n=ye({},u1,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(h1,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:_,optional:y,regexp:w}=f;r.push({name:g,repeatable:_,optional:y});const k=w||bg;if(k!==bg){d+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${g}" (${k}): `+O.message)}}let I=_?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(I=y&&l.length<2?`(?:/${I})`:"/"+I),y&&(I+="?"),i+=I,d+=20,y&&(d+=-8),_&&(d+=-20),k===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:y}=d,w=g in l?l[g]:"";if(on(w)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const k=on(w)?w.join("/"):w;if(!k)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=k}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function d1(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function p1(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=d1(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Cg(s))return 1;if(Cg(i))return-1}return i.length-s.length}function Cg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const g1={type:0,value:""},m1=/[a-zA-Z0-9_]/;function _1(t){if(!t)return[[]];if(t==="/")return[[g1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:m1.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function y1(t,e,n){const s=f1(_1(t.path),n),i=ye(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function v1(t,e){const n=[],s=new Map;e=Rg({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const d=!f,g=E1(u);g.aliasOf=f&&f.record;const _=Rg(e,u),y=[g];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of I)y.push(ye({},g,{components:f?f.record.components:g.components,path:O,aliasOf:f?f.record:g}))}let w,k;for(const I of y){const{path:O}=I;if(h&&O[0]!=="/"){const z=h.record.path,ne=z[z.length-1]==="/"?"":"/";I.path=h.record.path+(O&&ne+O)}if(w=y1(I,h,_),f?f.alias.push(w):(k=k||w,k!==w&&k.alias.push(w),d&&u.name&&!Ag(w)&&o(u.name)),g.children){const z=g.children;for(let ne=0;ne<z.length;ne++)r(z[ne],w,f&&f.children[ne])}f=f||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return k?()=>{o(k)}:pr}function o(u){if(GE(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&p1(u,n[h])>=0&&(u.record.path!==n[h].record.path||!YE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ag(u)&&s.set(u.record.name,u)}function l(u,h){let f,d={},g,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Ii(1,{location:u});_=f.record.name,d=ye(Sg(h.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Sg(u.params,f.keys.map(k=>k.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=n.find(k=>k.re.test(g)),f&&(d=f.parse(g),_=f.record.name);else{if(f=h.name?s.get(h.name):n.find(k=>k.re.test(h.path)),!f)throw Ii(1,{location:u,currentLocation:h});_=f.record.name,d=ye({},h.params,u.params),g=f.stringify(d)}const y=[];let w=f;for(;w;)y.unshift(w.record),w=w.parent;return{name:_,path:g,params:d,matched:y,meta:T1(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Sg(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function E1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:w1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function w1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ag(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function T1(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function Rg(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function YE(t,e){return e.children.some(n=>n===t||YE(t,n))}const XE=/#/g,I1=/&/g,b1=/\//g,C1=/=/g,S1=/\?/g,JE=/\+/g,A1=/%5B/g,R1=/%5D/g,ZE=/%5E/g,N1=/%60/g,ew=/%7B/g,k1=/%7C/g,tw=/%7D/g,D1=/%20/g;function xf(t){return encodeURI(""+t).replace(k1,"|").replace(A1,"[").replace(R1,"]")}function O1(t){return xf(t).replace(ew,"{").replace(tw,"}").replace(ZE,"^")}function Mu(t){return xf(t).replace(JE,"%2B").replace(D1,"+").replace(XE,"%23").replace(I1,"%26").replace(N1,"`").replace(ew,"{").replace(tw,"}").replace(ZE,"^")}function P1(t){return Mu(t).replace(C1,"%3D")}function x1(t){return xf(t).replace(XE,"%23").replace(S1,"%3F")}function M1(t){return t==null?"":x1(t).replace(b1,"%2F")}function Ra(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function L1(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(JE," "),o=r.indexOf("="),a=Ra(o<0?r:r.slice(0,o)),c=o<0?null:Ra(r.slice(o+1));if(a in e){let l=e[a];on(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ng(t){let e="";for(let n in t){const s=t[n];if(n=P1(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(s)?s.map(r=>r&&Mu(r)):[s&&Mu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function F1(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=on(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const U1=Symbol(""),kg=Symbol(""),xc=Symbol(""),Mf=Symbol(""),Lu=Symbol("");function Gi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ii(4,{from:n,to:e})):h instanceof Error?a(h):l1(h)?a(Ii(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function wl(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(V1(a)){const l=(a.__vccOpts||a)[e];l&&i.push(qn(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=KO(l)?l.default:l;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&qn(f,n,s,r,o)()}))}}return i}function V1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Dg(t){const e=Ot(xc),n=Ot(Mf),s=Te(()=>e.resolve(F(t.to))),i=Te(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ti.bind(null,u));if(f>-1)return f;const d=Og(c[l-2]);return l>1&&Og(u)===d&&h[h.length-1].path!==d?h.findIndex(Ti.bind(null,c[l-2])):f}),r=Te(()=>i.value>-1&&j1(n.params,s.value.params)),o=Te(()=>i.value>-1&&i.value===n.matched.length-1&&WE(n.params,s.value.params));function a(c={}){return H1(c)?e[F(t.replace)?"replace":"push"](F(t.to)).catch(pr):Promise.resolve()}return{route:s,href:Te(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const B1=Em({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dg,setup(t,{slots:e}){const n=Br(Dg(t)),{options:s}=Ot(xc),i=Te(()=>({[Pg(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Pg(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Lm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),$1=B1;function H1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function j1(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!on(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Og(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pg=(t,e,n)=>t??e??n,K1=Em({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ot(Lu),i=Te(()=>t.route||s.value),r=Ot(kg,0),o=Te(()=>{let l=F(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Te(()=>i.value.matched[o.value]);Po(kg,Te(()=>o.value+1)),Po(U1,a),Po(Lu,i);const c=Bt();return tr(()=>[c.value,a.value,t.name],([l,u,h],[f,d,g])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!Ti(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return xg(n.default,{Component:f,route:l});const d=h.props[u],g=d?d===!0?l.params:typeof d=="function"?d(l):d:null,y=Lm(f,ye({},g,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return xg(n.default,{Component:y,route:l})||y}}});function xg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lf=K1;function q1(t){const e=v1(t.routes,t),n=t.parseQuery||L1,s=t.stringifyQuery||Ng,i=t.history,r=Gi(),o=Gi(),a=Gi(),c=rm(jn);let l=jn;zs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vl.bind(null,T=>""+T),h=vl.bind(null,M1),f=vl.bind(null,Ra);function d(T,L){let x,H;return GE(T)?(x=e.getRecordMatcher(T),H=L):H=T,e.addRoute(H,x)}function g(T){const L=e.getRecordMatcher(T);L&&e.removeRoute(L)}function _(){return e.getRoutes().map(T=>T.record)}function y(T){return!!e.getRecordMatcher(T)}function w(T,L){if(L=ye({},L||c.value),typeof T=="string"){const p=El(n,T,L.path),m=e.resolve({path:p.path},L),v=i.createHref(p.fullPath);return ye(p,m,{params:f(m.params),hash:Ra(p.hash),redirectedFrom:void 0,href:v})}let x;if("path"in T)x=ye({},T,{path:El(n,T.path,L.path).path});else{const p=ye({},T.params);for(const m in p)p[m]==null&&delete p[m];x=ye({},T,{params:h(T.params)}),L.params=h(L.params)}const H=e.resolve(x,L),le=T.hash||"";H.params=u(f(H.params));const Le=zO(s,ye({},T,{hash:O1(le),path:H.path})),te=i.createHref(Le);return ye({fullPath:Le,hash:le,query:s===Ng?F1(T.query):T.query||{}},H,{redirectedFrom:void 0,href:te})}function k(T){return typeof T=="string"?El(n,T,c.value.path):ye({},T)}function I(T,L){if(l!==T)return Ii(8,{from:L,to:T})}function O(T){return de(T)}function z(T){return O(ye(k(T),{replace:!0}))}function ne(T){const L=T.matched[T.matched.length-1];if(L&&L.redirect){const{redirect:x}=L;let H=typeof x=="function"?x(T):x;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=k(H):{path:H},H.params={}),ye({query:T.query,hash:T.hash,params:"path"in H?{}:T.params},H)}}function de(T,L){const x=l=w(T),H=c.value,le=T.state,Le=T.force,te=T.replace===!0,p=ne(x);if(p)return de(ye(k(p),{state:typeof p=="object"?ye({},le,p.state):le,force:Le,replace:te}),L||x);const m=x;m.redirectedFrom=L;let v;return!Le&&GO(s,H,x)&&(v=Ii(16,{to:m,from:H}),os(H,H,!0,!1)),(v?Promise.resolve(v):be(m,H)).catch(E=>bn(E)?bn(E,2)?E:qt(E):Se(E,m,H)).then(E=>{if(E){if(bn(E,2))return de(ye({replace:te},k(E.to),{state:typeof E.to=="object"?ye({},le,E.to.state):le,force:Le}),L||m)}else E=at(m,H,!0,te,le);return _e(m,H,E),E})}function $(T,L){const x=I(T,L);return x?Promise.reject(x):Promise.resolve()}function be(T,L){let x;const[H,le,Le]=W1(T,L);x=wl(H.reverse(),"beforeRouteLeave",T,L);for(const p of H)p.leaveGuards.forEach(m=>{x.push(qn(m,T,L))});const te=$.bind(null,T,L);return x.push(te),js(x).then(()=>{x=[];for(const p of r.list())x.push(qn(p,T,L));return x.push(te),js(x)}).then(()=>{x=wl(le,"beforeRouteUpdate",T,L);for(const p of le)p.updateGuards.forEach(m=>{x.push(qn(m,T,L))});return x.push(te),js(x)}).then(()=>{x=[];for(const p of T.matched)if(p.beforeEnter&&!L.matched.includes(p))if(on(p.beforeEnter))for(const m of p.beforeEnter)x.push(qn(m,T,L));else x.push(qn(p.beforeEnter,T,L));return x.push(te),js(x)}).then(()=>(T.matched.forEach(p=>p.enterCallbacks={}),x=wl(Le,"beforeRouteEnter",T,L),x.push(te),js(x))).then(()=>{x=[];for(const p of o.list())x.push(qn(p,T,L));return x.push(te),js(x)}).catch(p=>bn(p,8)?p:Promise.reject(p))}function _e(T,L,x){for(const H of a.list())H(T,L,x)}function at(T,L,x,H,le){const Le=I(T,L);if(Le)return Le;const te=L===jn,p=zs?history.state:{};x&&(H||te?i.replace(T.fullPath,ye({scroll:te&&p&&p.scroll},le)):i.push(T.fullPath,le)),c.value=T,os(T,L,x,te),qt()}let ct;function Kt(){ct||(ct=i.listen((T,L,x)=>{if(!uo.listening)return;const H=w(T),le=ne(H);if(le){de(ye(le,{replace:!0}),H).catch(pr);return}l=H;const Le=c.value;zs&&n1(wg(Le.fullPath,x.delta),Pc()),be(H,Le).catch(te=>bn(te,12)?te:bn(te,2)?(de(te.to,H).then(p=>{bn(p,20)&&!x.delta&&x.type===Vr.pop&&i.go(-1,!1)}).catch(pr),Promise.reject()):(x.delta&&i.go(-x.delta,!1),Se(te,H,Le))).then(te=>{te=te||at(H,Le,!1),te&&(x.delta&&!bn(te,8)?i.go(-x.delta,!1):x.type===Vr.pop&&bn(te,20)&&i.go(-1,!1)),_e(H,Le,te)}).catch(pr)}))}let In=Gi(),$i=Gi(),Ve;function Se(T,L,x){qt(T);const H=$i.list();return H.length?H.forEach(le=>le(T,L,x)):console.error(T),Promise.reject(T)}function Ee(){return Ve&&c.value!==jn?Promise.resolve():new Promise((T,L)=>{In.add([T,L])})}function qt(T){return Ve||(Ve=!T,Kt(),In.list().forEach(([L,x])=>T?x(T):L()),In.reset()),T}function os(T,L,x,H){const{scrollBehavior:le}=t;if(!zs||!le)return Promise.resolve();const Le=!x&&s1(wg(T.fullPath,0))||(H||!x)&&history.state&&history.state.scroll||null;return um().then(()=>le(T,L,Le)).then(te=>te&&t1(te)).catch(te=>Se(te,T,L))}const Wt=T=>i.go(T);let It;const Bs=new Set,uo={currentRoute:c,listening:!0,addRoute:d,removeRoute:g,hasRoute:y,getRoutes:_,resolve:w,options:t,push:O,replace:z,go:Wt,back:()=>Wt(-1),forward:()=>Wt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:$i.add,isReady:Ee,install(T){const L=this;T.component("RouterLink",$1),T.component("RouterView",Lf),T.config.globalProperties.$router=L,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>F(c)}),zs&&!It&&c.value===jn&&(It=!0,O(i.location).catch(le=>{}));const x={};for(const le in jn)x[le]=Te(()=>c.value[le]);T.provide(xc,L),T.provide(Mf,Br(x)),T.provide(Lu,c);const H=T.unmount;Bs.add(T),T.unmount=function(){Bs.delete(T),Bs.size<1&&(l=jn,ct&&ct(),ct=null,c.value=jn,It=!1,Ve=!1),H()}}};return uo}function js(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function W1(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ti(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ti(l,c))||i.push(c))}return[n,s,i]}function Ff(){return Ot(xc)}function Mc(){return Ot(Mf)}const z1={class:"container"},G1={__name:"App",setup(t){const e=Mc();return(n,s)=>(Ce(),Ue("div",z1,[(Ce(),Ai(F(Lf),{key:F(e).fullPath}))]))}},Vi=Qm({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),Q1=NE(Vi);Sc(Q1,"todos");const Bi=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Y1=["data-coord"],X1=["src"],J1={__name:"BoardTile",props:{tile:{type:Object,required:!0},collected:{type:Array,default:()=>{}}},setup(t){const e=t,n=Te(()=>e.tile),s=Te(()=>{var i;return(i=e.collected)==null?void 0:i.includes(n.value.id)});return(i,r)=>F(n)?(Ce(),Ue("div",{key:0,class:Na(["tile",{isCollected:F(s)}]),"data-coord":F(n).id},[ve("img",{src:F(n).img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,X1)],10,Y1)):Ht("",!0)}},Uf=Bi(J1,[["__scopeId","data-v-2189f464"]]),Z1={key:0},eP=ve("button",{class:"prevent-select"},"Mark Collected",-1),tP={__name:"sidePannel",props:{tileData:{type:Object,required:!0},collected:{type:Array,default:()=>{}}},setup(t){const e=t,n=Te(()=>e.tileData);return(s,i)=>e.tileData?(Ce(),Ue("div",Z1,[it(Uf,{tile:F(n),collected:e.collected},null,8,["tile","collected"]),ve("h2",null,"{ "+Ft(F(n).id.split("")[0])+" , "+Ft(F(n).id.split("")[1])+" }",1),ve("h1",null,Ft(F(n).title),1),ve("p",null,Ft(F(n).description),1),eP])):Ht("",!0)}};const nP={key:0,class:"bingo-board"},sP={key:0},iP=["onSubmit"],rP={__name:"BingoBoard",props:{boardUUID:{type:String},teamCode:{type:String}},setup(t){const e=t;Um(g=>({"5766b637":F(l),"7ba116d6":F(u)}));const n=Oc(Vi),s=Ff(),i=Bt(""),r=Bt(""),o=en(On(n,"Boards",e.boardUUID)),a=en(Sc(n,`Boards/${e.boardUUID}/Tiles`)),{data:c}=en(On(n,`Boards/${e.boardUUID}/Groups/${e.teamCode}/`)),l=Te(()=>{var g;return((g=o==null?void 0:o.value)==null?void 0:g.settings.width)||7}),u=Te(()=>{var g;return((g=o==null?void 0:o.value)==null?void 0:g.settings.height)||7}),h=Te(()=>{var g;return((g=c==null?void 0:c.value)==null?void 0:g.collected)||[]}),f=async()=>{if(i.value!==""){let g={name:"private-board",params:{boardUUID:e.boardUUID,teamCode:i.value}};const{data:_}=en(On(n,"Boards",e.boardUUID,"Groups",i.value));_&&_.value.name=="moderator"&&(g.name="moderator"),s.push(g)}},d=g=>{r.value=g};return(g,_)=>(Ce(),Ue(Je,null,[F(a)?(Ce(),Ue("main",nP,[(Ce(!0),Ue(Je,null,nh(F(a),y=>(Ce(),Ai(Uf,{key:y.id,tile:y,collected:F(h),onClick:w=>d(y)},null,8,["tile","collected","onClick"]))),128))])):Ht("",!0),ve("aside",null,[F(c)?(Ce(),Ue("p",sP,Ft(F(c).name),1)):Ht("",!0),F(c)?Ht("",!0):(Ce(),Ue("form",{key:1,onSubmit:Ka(f,["prevent"])},[Rn(" team code: "),Va(ve("input",{type:"text",name:"teamId","onUpdate:modelValue":_[0]||(_[0]=y=>i.value=y)},null,512),[[ja,i.value]])],40,iP)),it(tP,{tileData:r.value,collected:F(h)},null,8,["tileData","collected"])])],64))}},oP=Bi(rP,[["__scopeId","data-v-d6b67640"]]);const aP=t=>(gm("data-v-2c91e7bf"),t=t(),mm(),t),cP={key:0,class:"heading"},lP=aP(()=>ve("h2",null,"Notes",-1)),uP=["disabled"],hP={__name:"BoardView",setup(t){const e=Oc(Vi),n=Mc(),s=Bt(""),i=Te(()=>n.params.teamCode),r=Te(()=>n.params.boardUUID),{data:o}=en(On(e,`Boards/${r.value}/Groups/${i.value}/`)),a=async()=>{s.value=o.value.notes,await rO(On(e,`Boards/${r.value}/Groups/${i.value}/`),{notes:s.value})};return(c,l)=>(Ce(),Ue(Je,null,[ve("section",null,[it(oP,{boardUUID:F(r),teamCode:F(i)},null,8,["boardUUID","teamCode"])]),F(o)?(Ce(),Ue("div",cP,[lP,Rn(),ve("button",{class:"btn",onClick:a,disabled:s.value==F(o).notes},"Save notes",8,uP)])):Ht("",!0),F(o)?Va((Ce(),Ue("textarea",{key:1,name:"teamNotes",id:"teamNotes",rows:"10","onUpdate:modelValue":l[0]||(l[0]=u=>F(o).notes=u),onSubmit:l[1]||(l[1]=Ka(()=>{},["prevent"]))},null,544)),[[ja,F(o).notes]]):Ht("",!0)],64))}},Mg=Bi(hP,[["__scopeId","data-v-2c91e7bf"]]),fP=ve("button",{class:"prevent-select"},"Toggle Collected",-1),dP=ve("br",null,null,-1),pP=["checked"],gP={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},groups:{type:Object,required:!0}},setup(t){const e=t,n=Te(()=>e.tileData);Te(()=>e.MODERATOR);const s=Te(()=>e.groups.filter(r=>r.name!=="moderator")),i=r=>{console.log(r)};return(r,o)=>e.tileData?(Ce(),Ue("div",{key:e.tileData.id},[ve("h2",null,"{ "+Ft(F(n).id.split("")[0])+" , "+Ft(F(n).id.split("")[1])+" }",1),ve("h1",null,Ft(F(n).title),1),ve("p",null,Ft(F(n).description),1),fP,ve("ul",null,[(Ce(!0),Ue(Je,null,nh(F(s),a=>(Ce(),Ue("li",null,[Rn(Ft(a.name)+" : "+Ft(a.verify.includes(F(n).id)),1),dP,Rn(" collected: "),ve("input",{type:"checkbox",checked:a.verify.includes(F(n).id),onClick:o[0]||(o[0]=c=>i(F(n).id))},null,8,pP)]))),256))])])):Ht("",!0)}};const mP={key:0,class:"bingo-board"},_P={key:0},yP={__name:"ModeratorBoard",props:{boardUUID:{type:String},teamCode:{type:String},groups:{type:Object}},setup(t){const e=t;Um(h=>({c6305e70:F(a),33796336:F(c)}));const n=Oc(Vi),s=Bt(""),i=en(On(n,"Boards",e.boardUUID)),r=en(Sc(n,`Boards/${e.boardUUID}/Tiles`)),{data:o}=en(On(n,`Boards/${e.boardUUID}/Groups/${e.teamCode}/`)),a=Te(()=>{var h;return((h=i==null?void 0:i.value)==null?void 0:h.settings.width)||7}),c=Te(()=>{var h;return((h=i==null?void 0:i.value)==null?void 0:h.settings.height)||7}),l=Te(()=>{var h;return((h=o==null?void 0:o.value)==null?void 0:h.collected)||[]}),u=h=>{s.value=h};return(h,f)=>(Ce(),Ue(Je,null,[F(r)?(Ce(),Ue("main",mP,[(Ce(!0),Ue(Je,null,nh(F(r),d=>(Ce(),Ai(Uf,{key:d.id,collected:F(l),tile:d,onClick:g=>u(d)},null,8,["collected","tile","onClick"]))),128))])):Ht("",!0),ve("aside",null,[F(o)?(Ce(),Ue("p",_P,Ft(F(o).name),1)):Ht("",!0),it(gP,{tileData:s.value,groups:e.groups},null,8,["tileData","groups"])])],64))}},vP=Bi(yP,[["__scopeId","data-v-e8ddf67f"]]);const Lc=t=>(gm("data-v-313e8530"),t=t(),mm(),t),EP=["onSubmit"],wP=Lc(()=>ve("br",null,null,-1)),TP=Lc(()=>ve("br",null,null,-1)),IP=Lc(()=>ve("br",null,null,-1)),bP=Lc(()=>ve("button",{type:"submit",class:"btn"},"Go To Board",-1)),CP={__name:"ModeratorView",setup(t){const e=Oc(Vi),n=Mc(),s=Ff(),i=Te(()=>n.params.teamCode),r=Bt(""),o=Te(()=>n.params.boardUUID),{data:a}=en(On(e,`Boards/${o.value}/Groups/${i.value}/`)),{data:c}=en(Sc(e,"Boards",o.value,"Groups")),l=h=>{},u=async()=>{if(i.value!==""){let h={name:"private-board",params:{boardUUID:o.value,teamCode:r.value}};const{data:f}=en(On(e,"Boards",o.value,"Groups",r.value));f&&f.value.name=="moderator"&&(h.name="moderator"),s.push(h)}};return(h,f)=>(Ce(),Ue("section",null,[F(a)&&F(a).name=="moderator"?(Ce(),Ai(vP,{key:0,boardUUID:F(o),teamCode:F(i),onVerifyTile:f[0]||(f[0]=d=>l(h.tile,h.groupid)),groups:F(c)},null,8,["boardUUID","teamCode","groups"])):Ht("",!0),ve("aside",null,[F(a)&&F(a).name!="moderator"?(Ce(),Ue("form",{key:0,onSubmit:Ka(u,["prevent"])},[Rn(" You are not a moderator, "),wP,Rn("please enter your code to go to the appropriate board for your team"),TP,IP,Rn(" team code: "),Va(ve("input",{type:"text",name:"teamId","onUpdate:modelValue":f[1]||(f[1]=d=>r.value=d)},null,512),[[ja,r.value]]),bP],40,EP)):Ht("",!0)])]))}},SP=Bi(CP,[["__scopeId","data-v-313e8530"]]);const AP=["onSubmit"],RP=["disabled"],NP={__name:"Home",setup(t){const e=Mc(),n=Ff(),s=Bt(""),i=()=>{n.push({name:"overview",params:{boardUUID:s.value}})};return(r,o)=>(Ce(),Ue(Je,null,[ve("form",{onSubmit:Ka(i,["prevent"])},[Rn(" Enter your bingo key: "),Va(ve("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a)},null,512),[[ja,s.value]]),ve("button",{class:"btn",disabled:s.value==""},"Open Board",8,RP)],40,AP),(Ce(),Ai(F(Lf),{key:F(e).fullPath}))],64))}},kP=Bi(NP,[["__scopeId","data-v-629c09ef"]]),DP=q1({history:c1(),mode:"hash",routes:[{path:"/",name:"Home",component:kP},{path:"/b/:boardUUID",name:"overview",param:!0,component:Mg},{path:"/b/:boardUUID/team/:teamCode",name:"private-board",param:!0,component:Mg},{path:"/b/:boardUUID/m/:teamCode",name:"moderator",param:!0,component:SP}]}),Fc=TI(G1);Fc.use(SI());Fc.use(DP);Fc.use(jO,{firebaseApp:Vi});Fc.mount("#app");
