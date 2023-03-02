function kc(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function ba(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=ft(n)?rg(n):ba(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ft(i))return i;if(it(i))return i}}const tg=/;(?![^(]*\))/g,ng=/:([^]+)/,ig=/\/\*.*?\*\//gs;function rg(i){const e={};return i.replace(ig,"").split(tg).forEach(t=>{if(t){const n=t.split(ng);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Ma(i){let e="";if(ft(i))e=i;else if(Ie(i))for(let t=0;t<i.length;t++){const n=Ma(i[t]);n&&(e+=n+" ")}else if(it(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}function YE(i){if(!i)return null;let{class:e,style:t}=i;return e&&!ft(e)&&(i.class=Ma(e)),t&&(i.style=ba(t)),i}const sg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",og=kc(sg);function Jh(i){return!!i||i===""}const ag=i=>ft(i)?i:i==null?"":Ie(i)||it(i)&&(i.toString===nd||!Re(i.toString))?JSON.stringify(i,Qh,2):String(i),Qh=(i,e)=>e&&e.__v_isRef?Qh(i,e.value):zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:ed(e)?{[`Set(${e.size})`]:[...e.values()]}:it(e)&&!Ie(e)&&!id(e)?String(e):e,Je={},Ur=[],Rn=()=>{},lg=()=>!1,cg=/^on[^a-z]/,no=i=>cg.test(i),Bc=i=>i.startsWith("onUpdate:"),Ut=Object.assign,Hc=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},ug=Object.prototype.hasOwnProperty,He=(i,e)=>ug.call(i,e),Ie=Array.isArray,zr=i=>Sa(i)==="[object Map]",ed=i=>Sa(i)==="[object Set]",Re=i=>typeof i=="function",ft=i=>typeof i=="string",Vc=i=>typeof i=="symbol",it=i=>i!==null&&typeof i=="object",td=i=>it(i)&&Re(i.then)&&Re(i.catch),nd=Object.prototype.toString,Sa=i=>nd.call(i),fg=i=>Sa(i).slice(8,-1),id=i=>Sa(i)==="[object Object]",Gc=i=>ft(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ds=kc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wa=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},hg=/-(\w)/g,Hn=wa(i=>i.replace(hg,(e,t)=>t?t.toUpperCase():"")),dg=/\B([A-Z])/g,fs=wa(i=>i.replace(dg,"-$1").toLowerCase()),Ta=wa(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ya=wa(i=>i?`on${Ta(i)}`:""),Hs=(i,e)=>!Object.is(i,e),Ka=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},ta=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},pg=i=>{const e=parseFloat(i);return isNaN(e)?i:e},mg=i=>{const e=ft(i)?Number(i):NaN;return isNaN(e)?i:e};let Fu;const gg=()=>Fu||(Fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Tn;class _g{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tn,!e&&Tn&&(this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Tn;try{return Tn=this,e()}finally{Tn=t}}}on(){Tn=this}off(){Tn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function xg(i,e=Tn){e&&e.active&&e.effects.push(i)}function vg(){return Tn}const Wc=i=>{const e=new Set(i);return e.w=0,e.n=0,e},rd=i=>(i.w&Ci)>0,sd=i=>(i.n&Ci)>0,yg=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Ci},bg=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];rd(r)&&!sd(r)?r.delete(i):e[t++]=r,r.w&=~Ci,r.n&=~Ci}e.length=t}},na=new WeakMap;let Es=0,Ci=1;const Zl=30;let Cn;const ir=Symbol(""),Jl=Symbol("");class qc{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,xg(this,n)}run(){if(!this.active)return this.fn();let e=Cn,t=Mi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Cn,Cn=this,Mi=!0,Ci=1<<++Es,Es<=Zl?yg(this):Nu(this),this.fn()}finally{Es<=Zl&&bg(this),Ci=1<<--Es,Cn=this.parent,Mi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Cn===this?this.deferStop=!0:this.active&&(Nu(this),this.onStop&&this.onStop(),this.active=!1)}}function Nu(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Mi=!0;const od=[];function hs(){od.push(Mi),Mi=!1}function ds(){const i=od.pop();Mi=i===void 0?!0:i}function qt(i,e,t){if(Mi&&Cn){let n=na.get(i);n||na.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=Wc()),ad(r)}}function ad(i,e){let t=!1;Es<=Zl?sd(i)||(i.n|=Ci,t=!rd(i)):t=!i.has(Cn),t&&(i.add(Cn),Cn.deps.push(i))}function oi(i,e,t,n,r,s){const o=na.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(i)?Gc(t)&&a.push(o.get("length")):(a.push(o.get(ir)),zr(i)&&a.push(o.get(Jl)));break;case"delete":Ie(i)||(a.push(o.get(ir)),zr(i)&&a.push(o.get(Jl)));break;case"set":zr(i)&&a.push(o.get(ir));break}if(a.length===1)a[0]&&Ql(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ql(Wc(l))}}function Ql(i,e){const t=Ie(i)?i:[...i];for(const n of t)n.computed&&Uu(n);for(const n of t)n.computed||Uu(n)}function Uu(i,e){(i!==Cn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}function Mg(i,e){var t;return(t=na.get(i))===null||t===void 0?void 0:t.get(e)}const Sg=kc("__proto__,__v_isRef,__isVue"),ld=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Vc)),wg=$c(),Tg=$c(!1,!0),Eg=$c(!0),zu=Cg();function Cg(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Ge(this);for(let s=0,o=this.length;s<o;s++)qt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(Ge)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){hs();const n=Ge(this)[e].apply(this,t);return ds(),n}}),i}function Ag(i){const e=Ge(this);return qt(e,"has",i),e.hasOwnProperty(i)}function $c(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Wg:dd:e?hd:fd).get(n))return n;const o=Ie(n);if(!i){if(o&&He(zu,r))return Reflect.get(zu,r,s);if(r==="hasOwnProperty")return Ag}const a=Reflect.get(n,r,s);return(Vc(r)?ld.has(r):Sg(r))||(i||qt(n,"get",r),e)?a:pt(a)?o&&Gc(r)?a:a.value:it(a)?i?pd(a):ur(a):a}}const Pg=cd(),Rg=cd(!0);function cd(i=!1){return function(t,n,r,s){let o=t[n];if(fr(o)&&pt(o)&&!pt(r))return!1;if(!i&&(!ia(r)&&!fr(r)&&(o=Ge(o),r=Ge(r)),!Ie(t)&&pt(o)&&!pt(r)))return o.value=r,!0;const a=Ie(t)&&Gc(n)?Number(n)<t.length:He(t,n),l=Reflect.set(t,n,r,s);return t===Ge(s)&&(a?Hs(r,o)&&oi(t,"set",n,r):oi(t,"add",n,r)),l}}function Lg(i,e){const t=He(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&oi(i,"delete",e,void 0),n}function Dg(i,e){const t=Reflect.has(i,e);return(!Vc(e)||!ld.has(e))&&qt(i,"has",e),t}function Ig(i){return qt(i,"iterate",Ie(i)?"length":ir),Reflect.ownKeys(i)}const ud={get:wg,set:Pg,deleteProperty:Lg,has:Dg,ownKeys:Ig},Og={get:Eg,set(i,e){return!0},deleteProperty(i,e){return!0}},Fg=Ut({},ud,{get:Tg,set:Rg}),Xc=i=>i,Ea=i=>Reflect.getPrototypeOf(i);function po(i,e,t=!1,n=!1){i=i.__v_raw;const r=Ge(i),s=Ge(e);t||(e!==s&&qt(r,"get",e),qt(r,"get",s));const{has:o}=Ea(r),a=n?Xc:t?Kc:Vs;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function mo(i,e=!1){const t=this.__v_raw,n=Ge(t),r=Ge(i);return e||(i!==r&&qt(n,"has",i),qt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function go(i,e=!1){return i=i.__v_raw,!e&&qt(Ge(i),"iterate",ir),Reflect.get(i,"size",i)}function ku(i){i=Ge(i);const e=Ge(this);return Ea(e).has.call(e,i)||(e.add(i),oi(e,"add",i,i)),this}function Bu(i,e){e=Ge(e);const t=Ge(this),{has:n,get:r}=Ea(t);let s=n.call(t,i);s||(i=Ge(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Hs(e,o)&&oi(t,"set",i,e):oi(t,"add",i,e),this}function Hu(i){const e=Ge(this),{has:t,get:n}=Ea(e);let r=t.call(e,i);r||(i=Ge(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&oi(e,"delete",i,void 0),s}function Vu(){const i=Ge(this),e=i.size!==0,t=i.clear();return e&&oi(i,"clear",void 0,void 0),t}function _o(i,e){return function(n,r){const s=this,o=s.__v_raw,a=Ge(o),l=e?Xc:i?Kc:Vs;return!i&&qt(a,"iterate",ir),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function xo(i,e,t){return function(...n){const r=this.__v_raw,s=Ge(r),o=zr(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Xc:e?Kc:Vs;return!e&&qt(s,"iterate",l?Jl:ir),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ui(i){return function(...e){return i==="delete"?!1:this}}function Ng(){const i={get(s){return po(this,s)},get size(){return go(this)},has:mo,add:ku,set:Bu,delete:Hu,clear:Vu,forEach:_o(!1,!1)},e={get(s){return po(this,s,!1,!0)},get size(){return go(this)},has:mo,add:ku,set:Bu,delete:Hu,clear:Vu,forEach:_o(!1,!0)},t={get(s){return po(this,s,!0)},get size(){return go(this,!0)},has(s){return mo.call(this,s,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:_o(!0,!1)},n={get(s){return po(this,s,!0,!0)},get size(){return go(this,!0)},has(s){return mo.call(this,s,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:_o(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=xo(s,!1,!1),t[s]=xo(s,!0,!1),e[s]=xo(s,!1,!0),n[s]=xo(s,!0,!0)}),[i,t,e,n]}const[Ug,zg,kg,Bg]=Ng();function jc(i,e){const t=e?i?Bg:kg:i?zg:Ug;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(He(t,r)&&r in n?t:n,r,s)}const Hg={get:jc(!1,!1)},Vg={get:jc(!1,!0)},Gg={get:jc(!0,!1)},fd=new WeakMap,hd=new WeakMap,dd=new WeakMap,Wg=new WeakMap;function qg(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $g(i){return i.__v_skip||!Object.isExtensible(i)?0:qg(fg(i))}function ur(i){return fr(i)?i:Yc(i,!1,ud,Hg,fd)}function Xg(i){return Yc(i,!1,Fg,Vg,hd)}function pd(i){return Yc(i,!0,Og,Gg,dd)}function Yc(i,e,t,n,r){if(!it(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=$g(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function kr(i){return fr(i)?kr(i.__v_raw):!!(i&&i.__v_isReactive)}function fr(i){return!!(i&&i.__v_isReadonly)}function ia(i){return!!(i&&i.__v_isShallow)}function md(i){return kr(i)||fr(i)}function Ge(i){const e=i&&i.__v_raw;return e?Ge(e):i}function gd(i){return ta(i,"__v_skip",!0),i}const Vs=i=>it(i)?ur(i):i,Kc=i=>it(i)?pd(i):i;function _d(i){Mi&&Cn&&(i=Ge(i),ad(i.dep||(i.dep=Wc())))}function xd(i,e){i=Ge(i);const t=i.dep;t&&Ql(t)}function pt(i){return!!(i&&i.__v_isRef===!0)}function Bt(i){return jg(i,!1)}function jg(i,e){return pt(i)?i:new Yg(i,e)}class Yg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ge(e),this._value=t?e:Vs(e)}get value(){return _d(this),this._value}set value(e){const t=this.__v_isShallow||ia(e)||fr(e);e=t?e:Ge(e),Hs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Vs(e),xd(this))}}function dn(i){return pt(i)?i.value:i}const Kg={get:(i,e,t)=>dn(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return pt(r)&&!pt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function vd(i){return kr(i)?i:new Proxy(i,Kg)}class Zg{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Mg(Ge(this._object),this._key)}}function yd(i,e,t){const n=i[e];return pt(n)?n:new Zg(i,e,t)}var bd;class Jg{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[bd]=!1,this._dirty=!0,this.effect=new qc(e,()=>{this._dirty||(this._dirty=!0,xd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=Ge(this);return _d(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}bd="__v_isReadonly";function Qg(i,e,t=!1){let n,r;const s=Re(i);return s?(n=i,r=Rn):(n=i.get,r=i.set),new Jg(n,r,s||!r,t)}function Si(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){ps(s,e,t)}return r}function Ln(i,e,t,n){if(Re(i)){const s=Si(i,e,t,n);return s&&td(s)&&s.catch(o=>{ps(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(Ln(i[s],e,t,n));return r}function ps(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Si(l,null,10,[i,o,a]);return}}e_(i,t,r,n)}function e_(i,e,t,n=!0){console.error(i)}let Gs=!1,ec=!1;const Ct=[];let Nn=0;const Br=[];let Zn=null,Yi=0;const Md=Promise.resolve();let Zc=null;function Jc(i){const e=Zc||Md;return i?e.then(this?i.bind(this):i):e}function t_(i){let e=Nn+1,t=Ct.length;for(;e<t;){const n=e+t>>>1;Ws(Ct[n])<i?e=n+1:t=n}return e}function Ca(i){(!Ct.length||!Ct.includes(i,Gs&&i.allowRecurse?Nn+1:Nn))&&(i.id==null?Ct.push(i):Ct.splice(t_(i.id),0,i),Sd())}function Sd(){!Gs&&!ec&&(ec=!0,Zc=Md.then(Td))}function n_(i){const e=Ct.indexOf(i);e>Nn&&Ct.splice(e,1)}function wd(i){Ie(i)?Br.push(...i):(!Zn||!Zn.includes(i,i.allowRecurse?Yi+1:Yi))&&Br.push(i),Sd()}function Gu(i,e=Gs?Nn+1:0){for(;e<Ct.length;e++){const t=Ct[e];t&&t.pre&&(Ct.splice(e,1),e--,t())}}function ra(i){if(Br.length){const e=[...new Set(Br)];if(Br.length=0,Zn){Zn.push(...e);return}for(Zn=e,Zn.sort((t,n)=>Ws(t)-Ws(n)),Yi=0;Yi<Zn.length;Yi++)Zn[Yi]();Zn=null,Yi=0}}const Ws=i=>i.id==null?1/0:i.id,i_=(i,e)=>{const t=Ws(i)-Ws(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Td(i){ec=!1,Gs=!0,Ct.sort(i_);const e=Rn;try{for(Nn=0;Nn<Ct.length;Nn++){const t=Ct[Nn];t&&t.active!==!1&&Si(t,null,14)}}finally{Nn=0,Ct.length=0,ra(),Gs=!1,Zc=null,(Ct.length||Br.length)&&Td()}}function r_(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Je;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||Je;f&&(r=t.map(p=>ft(p)?p.trim():p)),h&&(r=t.map(pg))}let a,l=n[a=Ya(e)]||n[a=Ya(Hn(e))];!l&&s&&(l=n[a=Ya(fs(e))]),l&&Ln(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Ln(c,i,6,r)}}function Ed(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Re(i)){const l=c=>{const u=Ed(c,e,!0);u&&(a=!0,Ut(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(it(i)&&n.set(i,null),null):(Ie(s)?s.forEach(l=>o[l]=null):Ut(o,s),it(i)&&n.set(i,o),o)}function Aa(i,e){return!i||!no(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(i,e[0].toLowerCase()+e.slice(1))||He(i,fs(e))||He(i,e))}let en=null,Pa=null;function sa(i){const e=en;return en=i,Pa=i&&i.type.__scopeId||null,e}function KE(i){Pa=i}function ZE(){Pa=null}function Cd(i,e=en,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Qu(-1);const s=sa(e);let o;try{o=i(...r)}finally{sa(s),n._d&&Qu(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Za(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:d}=i;let m,_;const v=sa(i);try{if(t.shapeFlag&4){const b=r||n;m=pn(u.call(b,b,h,s,p,f,g)),_=l}else{const b=e;m=pn(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),_=e.props?l:o_(l)}}catch(b){Ns.length=0,ps(b,i,1),m=Ke(Ai)}let x=m;if(_&&d!==!1){const b=Object.keys(_),{shapeFlag:S}=x;b.length&&S&7&&(o&&b.some(Bc)&&(_=a_(_,o)),x=Zr(x,_))}return t.dirs&&(x=Zr(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,sa(v),m}function s_(i){let e;for(let t=0;t<i.length;t++){const n=i[t];if(la(n)){if(n.type!==Ai||n.children==="v-if"){if(e)return;e=n}}else return}return e}const o_=i=>{let e;for(const t in i)(t==="class"||t==="style"||no(t))&&((e||(e={}))[t]=i[t]);return e},a_=(i,e)=>{const t={};for(const n in i)(!Bc(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function l_(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Wu(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Aa(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Wu(n,o,c):!0:!!o;return!1}function Wu(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Aa(t,s))return!0}return!1}function Qc({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const c_=i=>i.__isSuspense,u_={name:"Suspense",__isSuspense:!0,process(i,e,t,n,r,s,o,a,l,c){i==null?h_(e,t,n,r,s,o,a,l,c):d_(i,e,t,n,r,o,a,l,c)},hydrate:p_,create:eu,normalize:m_},f_=u_;function qs(i,e){const t=i.props&&i.props[e];Re(t)&&t()}function h_(i,e,t,n,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=i.suspense=eu(i,r,n,e,h,t,s,o,a,l);c(null,f.pendingBranch=i.ssContent,h,null,n,f,s,o),f.deps>0?(qs(i,"onPending"),qs(i,"onFallback"),c(null,i.ssFallback,e,t,n,null,s,o),Hr(f,i.ssFallback)):f.resolve()}function d_(i,e,t,n,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=i.suspense;h.vnode=e,e.el=i.el;const f=e.ssContent,p=e.ssFallback,{activeBranch:g,pendingBranch:d,isInFallback:m,isHydrating:_}=h;if(d)h.pendingBranch=f,_i(f,d)?(l(d,f,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0?h.resolve():m&&(l(g,p,t,n,r,null,s,o,a),Hr(h,p))):(h.pendingId++,_?(h.isHydrating=!1,h.activeBranch=d):c(d,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),m?(l(null,f,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0?h.resolve():(l(g,p,t,n,r,null,s,o,a),Hr(h,p))):g&&_i(f,g)?(l(g,f,t,n,r,h,s,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0&&h.resolve()));else if(g&&_i(f,g))l(g,f,t,n,r,h,s,o,a),Hr(h,f);else if(qs(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0)h.resolve();else{const{timeout:v,pendingId:x}=h;v>0?setTimeout(()=>{h.pendingId===x&&h.fallback(p)},v):v===0&&h.fallback(p)}}function eu(i,e,t,n,r,s,o,a,l,c,u=!1){const{p:h,m:f,um:p,n:g,o:{parentNode:d,remove:m}}=c,_=i.props?mg(i.props.timeout):void 0,v={vnode:i,parent:e,parentComponent:t,isSVG:o,container:n,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(x=!1){const{vnode:b,activeBranch:S,pendingBranch:C,pendingId:P,effects:y,parentComponent:w,container:D}=v;if(v.isHydrating)v.isHydrating=!1;else if(!x){const O=S&&C.transition&&C.transition.mode==="out-in";O&&(S.transition.afterLeave=()=>{P===v.pendingId&&f(C,D,L,0)});let{anchor:L}=v;S&&(L=g(S),p(S,w,v,!0)),O||f(C,D,L,0)}Hr(v,C),v.pendingBranch=null,v.isInFallback=!1;let U=v.parent,X=!1;for(;U;){if(U.pendingBranch){U.effects.push(...y),X=!0;break}U=U.parent}X||wd(y),v.effects=[],qs(b,"onResolve")},fallback(x){if(!v.pendingBranch)return;const{vnode:b,activeBranch:S,parentComponent:C,container:P,isSVG:y}=v;qs(b,"onFallback");const w=g(S),D=()=>{v.isInFallback&&(h(null,x,P,w,C,null,y,a,l),Hr(v,x))},U=x.transition&&x.transition.mode==="out-in";U&&(S.transition.afterLeave=D),v.isInFallback=!0,p(S,C,null,!0),U||D()},move(x,b,S){v.activeBranch&&f(v.activeBranch,x,b,S),v.container=x},next(){return v.activeBranch&&g(v.activeBranch)},registerDep(x,b){const S=!!v.pendingBranch;S&&v.deps++;const C=x.vnode.el;x.asyncDep.catch(P=>{ps(P,x,0)}).then(P=>{if(x.isUnmounted||v.isUnmounted||v.pendingId!==x.suspenseId)return;x.asyncResolved=!0;const{vnode:y}=x;sc(x,P,!1),C&&(y.el=C);const w=!C&&x.subTree.el;b(x,y,d(C||x.subTree.el),C?null:g(x.subTree),v,o,l),w&&m(w),Qc(x,y.el),S&&--v.deps===0&&v.resolve()})},unmount(x,b){v.isUnmounted=!0,v.activeBranch&&p(v.activeBranch,t,x,b),v.pendingBranch&&p(v.pendingBranch,t,x,b)}};return v}function p_(i,e,t,n,r,s,o,a,l){const c=e.suspense=eu(e,n,t,i.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(i,c.pendingBranch=e.ssContent,t,c,s,o);return c.deps===0&&c.resolve(),u}function m_(i){const{shapeFlag:e,children:t}=i,n=e&32;i.ssContent=qu(n?t.default:t),i.ssFallback=n?qu(t.fallback):Ke(Ai)}function qu(i){let e;if(Re(i)){const t=Kr&&i._c;t&&(i._d=!1,ti()),i=i(),t&&(i._d=!0,e=_n,Xd())}return Ie(i)&&(i=s_(i)),i=pn(i),e&&!i.dynamicChildren&&(i.dynamicChildren=e.filter(t=>t!==i)),i}function Ad(i,e){e&&e.pendingBranch?Ie(i)?e.effects.push(...i):e.effects.push(i):wd(i)}function Hr(i,e){i.activeBranch=e;const{vnode:t,parentComponent:n}=i,r=t.el=e.el;n&&n.subTree===t&&(n.vnode.el=r,Qc(n,r))}function Pd(i,e){if(rt){let t=rt.provides;const n=rt.parent&&rt.parent.provides;n===t&&(t=rt.provides=Object.create(n)),t[i]=e}}function Vr(i,e,t=!1){const n=rt||en;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Re(e)?e.call(n.proxy):e}}function g_(i,e){return tu(i,null,e)}const vo={};function Is(i,e,t){return tu(i,e,t)}function tu(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=Je){const a=vg()===(rt==null?void 0:rt.scope)?rt:null;let l,c=!1,u=!1;if(pt(i)?(l=()=>i.value,c=ia(i)):kr(i)?(l=()=>i,n=!0):Ie(i)?(u=!0,c=i.some(x=>kr(x)||ia(x)),l=()=>i.map(x=>{if(pt(x))return x.value;if(kr(x))return Ji(x);if(Re(x))return Si(x,a,2)})):Re(i)?e?l=()=>Si(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ln(i,a,3,[f])}:l=Rn,e&&n){const x=l;l=()=>Ji(x())}let h,f=x=>{h=_.onStop=()=>{Si(x,a,4)}},p;if(Qr)if(f=Rn,e?t&&Ln(e,a,3,[l(),u?[]:void 0,f]):l(),r==="sync"){const x=a0();p=x.__watcherHandles||(x.__watcherHandles=[])}else return Rn;let g=u?new Array(i.length).fill(vo):vo;const d=()=>{if(_.active)if(e){const x=_.run();(n||c||(u?x.some((b,S)=>Hs(b,g[S])):Hs(x,g)))&&(h&&h(),Ln(e,a,3,[x,g===vo?void 0:u&&g[0]===vo?[]:g,f]),g=x)}else _.run()};d.allowRecurse=!!e;let m;r==="sync"?m=d:r==="post"?m=()=>zt(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),m=()=>Ca(d));const _=new qc(l,m);e?t?d():g=_.run():r==="post"?zt(_.run.bind(_),a&&a.suspense):_.run();const v=()=>{_.stop(),a&&a.scope&&Hc(a.scope.effects,_)};return p&&p.push(v),v}function __(i,e,t){const n=this.proxy,r=ft(i)?i.includes(".")?Rd(n,i):()=>n[i]:i.bind(n,n);let s;Re(e)?s=e:(s=e.handler,t=e);const o=rt;Jr(this);const a=tu(r,s.bind(n),t);return o?Jr(o):rr(),a}function Rd(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Ji(i,e){if(!it(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),pt(i))Ji(i.value,e);else if(Ie(i))for(let t=0;t<i.length;t++)Ji(i[t],e);else if(ed(i)||zr(i))i.forEach(t=>{Ji(t,e)});else if(id(i))for(const t in i)Ji(i[t],e);return i}function nu(i){return Re(i)?{setup:i,name:i.name}:i}const Os=i=>!!i.type.__asyncLoader;function x_(i){Re(i)&&(i={loader:i});const{loader:e,loadingComponent:t,errorComponent:n,delay:r=200,timeout:s,suspensible:o=!0,onError:a}=i;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let p;return l||(p=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((d,m)=>{a(g,()=>d(h()),()=>m(g),u+1)});throw g}).then(g=>p!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return nu({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const p=rt;if(c)return()=>Ja(c,p);const g=v=>{l=null,ps(v,p,13,!n)};if(o&&p.suspense||Qr)return f().then(v=>()=>Ja(v,p)).catch(v=>(g(v),()=>n?Ke(n,{error:v}):null));const d=Bt(!1),m=Bt(),_=Bt(!!r);return r&&setTimeout(()=>{_.value=!1},r),s!=null&&setTimeout(()=>{if(!d.value&&!m.value){const v=new Error(`Async component timed out after ${s}ms.`);g(v),m.value=v}},s),f().then(()=>{d.value=!0,p.parent&&iu(p.parent.vnode)&&Ca(p.parent.update)}).catch(v=>{g(v),m.value=v}),()=>{if(d.value&&c)return Ja(c,p);if(m.value&&n)return Ke(n,{error:m.value});if(t&&!_.value)return Ke(t)}}})}function Ja(i,e){const{ref:t,props:n,children:r,ce:s}=e.vnode,o=Ke(i,n,r);return o.ref=t,o.ce=s,delete e.vnode.ce,o}const iu=i=>i.type.__isKeepAlive;function Ld(i,e){Id(i,"a",e)}function Dd(i,e){Id(i,"da",e)}function Id(i,e,t=rt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Ra(e,n,t),t){let r=t.parent;for(;r&&r.parent;)iu(r.parent.vnode)&&v_(n,e,t,r),r=r.parent}}function v_(i,e,t,n){const r=Ra(e,i,n,!0);Od(()=>{Hc(n[e],r)},t)}function Ra(i,e,t=rt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;hs(),Jr(t);const a=Ln(e,t,i,o);return rr(),ds(),a});return n?r.unshift(s):r.push(s),s}}const ci=i=>(e,t=rt)=>(!Qr||i==="sp")&&Ra(i,(...n)=>e(...n),t),y_=ci("bm"),io=ci("m"),b_=ci("bu"),M_=ci("u"),ru=ci("bum"),Od=ci("um"),S_=ci("sp"),w_=ci("rtg"),T_=ci("rtc");function Fd(i,e=rt){Ra("ec",i,e)}function gr(i,e){const t=en;if(t===null)return i;const n=Ia(t)||t.proxy,r=i.dirs||(i.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Je]=e[s];o&&(Re(o)&&(o={mounted:o,updated:o}),o.deep&&Ji(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return i}function In(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(hs(),Ln(l,t,8,[i.el,a,i,e]),ds())}}const Nd="components",E_="directives";function C_(i,e){return Ud(Nd,i,!0,e)||i}const A_=Symbol();function P_(i){return Ud(E_,i)}function Ud(i,e,t=!0,n=!1){const r=en||rt;if(r){const s=r.type;if(i===Nd){const a=r0(s,!1);if(a&&(a===e||a===Hn(e)||a===Ta(Hn(e))))return s}const o=$u(r[i]||s[i],e)||$u(r.appContext[i],e);return!o&&n?s:o}}function $u(i,e){return i&&(i[e]||i[Hn(e)]||i[Ta(Hn(e))])}const tc=i=>i?Zd(i)?Ia(i)||i.proxy:tc(i.parent):null,Fs=Ut(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>tc(i.parent),$root:i=>tc(i.root),$emit:i=>i.emit,$options:i=>su(i),$forceUpdate:i=>i.f||(i.f=()=>Ca(i.update)),$nextTick:i=>i.n||(i.n=Jc.bind(i.proxy)),$watch:i=>__.bind(i)}),Qa=(i,e)=>i!==Je&&!i.__isScriptSetup&&He(i,e),R_={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Qa(n,e))return o[e]=1,n[e];if(r!==Je&&He(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&He(c,e))return o[e]=3,s[e];if(t!==Je&&He(t,e))return o[e]=4,t[e];nc&&(o[e]=0)}}const u=Fs[e];let h,f;if(u)return e==="$attrs"&&qt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Je&&He(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,He(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Qa(r,e)?(r[e]=t,!0):n!==Je&&He(n,e)?(n[e]=t,!0):He(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==Je&&He(i,o)||Qa(e,o)||(a=s[0])&&He(a,o)||He(n,o)||He(Fs,o)||He(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:He(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let nc=!0;function L_(i){const e=su(i),t=i.proxy,n=i.ctx;nc=!1,e.beforeCreate&&Xu(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:d,deactivated:m,beforeDestroy:_,beforeUnmount:v,destroyed:x,unmounted:b,render:S,renderTracked:C,renderTriggered:P,errorCaptured:y,serverPrefetch:w,expose:D,inheritAttrs:U,components:X,directives:O,filters:L}=e;if(c&&D_(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const j in o){const k=o[j];Re(k)&&(n[j]=k.bind(t))}if(r){const j=r.call(t,t);it(j)&&(i.data=ur(j))}if(nc=!0,s)for(const j in s){const k=s[j],se=Re(k)?k.bind(t,t):Re(k.get)?k.get.bind(t,t):Rn,ie=!Re(k)&&Re(k.set)?k.set.bind(t):Rn,ye=oc({get:se,set:ie});Object.defineProperty(n,j,{enumerable:!0,configurable:!0,get:()=>ye.value,set:z=>ye.value=z})}if(a)for(const j in a)zd(a[j],n,t,j);if(l){const j=Re(l)?l.call(t):l;Reflect.ownKeys(j).forEach(k=>{Pd(k,j[k])})}u&&Xu(u,i,"c");function W(j,k){Ie(k)?k.forEach(se=>j(se.bind(t))):k&&j(k.bind(t))}if(W(y_,h),W(io,f),W(b_,p),W(M_,g),W(Ld,d),W(Dd,m),W(Fd,y),W(T_,C),W(w_,P),W(ru,v),W(Od,b),W(S_,w),Ie(D))if(D.length){const j=i.exposed||(i.exposed={});D.forEach(k=>{Object.defineProperty(j,k,{get:()=>t[k],set:se=>t[k]=se})})}else i.exposed||(i.exposed={});S&&i.render===Rn&&(i.render=S),U!=null&&(i.inheritAttrs=U),X&&(i.components=X),O&&(i.directives=O)}function D_(i,e,t=Rn,n=!1){Ie(i)&&(i=ic(i));for(const r in i){const s=i[r];let o;it(s)?"default"in s?o=Vr(s.from||r,s.default,!0):o=Vr(s.from||r):o=Vr(s),pt(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Xu(i,e,t){Ln(Ie(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function zd(i,e,t,n){const r=n.includes(".")?Rd(t,n):()=>t[n];if(ft(i)){const s=e[i];Re(s)&&Is(r,s)}else if(Re(i))Is(r,i.bind(t));else if(it(i))if(Ie(i))i.forEach(s=>zd(s,e,t,n));else{const s=Re(i.handler)?i.handler.bind(t):e[i.handler];Re(s)&&Is(r,s,i)}}function su(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>oa(l,c,o,!0)),oa(l,e,o)),it(e)&&s.set(e,l),l}function oa(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&oa(i,s,t,!0),r&&r.forEach(o=>oa(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=I_[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const I_={data:ju,props:qi,emits:qi,methods:qi,computed:qi,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:qi,directives:qi,watch:F_,provide:ju,inject:O_};function ju(i,e){return e?i?function(){return Ut(Re(i)?i.call(this,this):i,Re(e)?e.call(this,this):e)}:e:i}function O_(i,e){return qi(ic(i),ic(e))}function ic(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Ot(i,e){return i?[...new Set([].concat(i,e))]:e}function qi(i,e){return i?Ut(Ut(Object.create(null),i),e):e}function F_(i,e){if(!i)return e;if(!e)return i;const t=Ut(Object.create(null),i);for(const n in e)t[n]=Ot(i[n],e[n]);return t}function N_(i,e,t,n=!1){const r={},s={};ta(s,La,1),i.propsDefaults=Object.create(null),kd(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Xg(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function U_(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=Ge(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Aa(i.emitsOptions,f))continue;const p=e[f];if(l)if(He(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=Hn(f);r[g]=rc(l,a,g,p,i,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{kd(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!He(e,h)&&((u=fs(h))===h||!He(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=rc(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!He(e,h))&&(delete s[h],c=!0)}c&&oi(i,"set","$attrs")}function kd(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ds(l))continue;const c=e[l];let u;r&&He(r,u=Hn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Aa(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Ge(t),c=a||Je;for(let u=0;u<s.length;u++){const h=s[u];t[h]=rc(r,l,h,c[h],i,!He(c,h))}}return o}function rc(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=He(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Re(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(Jr(r),n=c[t]=l.call(null,e),rr())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===fs(t))&&(n=!0))}return n}function Bd(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Re(i)){const u=h=>{l=!0;const[f,p]=Bd(h,e,!0);Ut(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return it(i)&&n.set(i,Ur),Ur;if(Ie(s))for(let u=0;u<s.length;u++){const h=Hn(s[u]);Yu(h)&&(o[h]=Je)}else if(s)for(const u in s){const h=Hn(u);if(Yu(h)){const f=s[u],p=o[h]=Ie(f)||Re(f)?{type:f}:Object.assign({},f);if(p){const g=Ju(Boolean,p.type),d=Ju(String,p.type);p[0]=g>-1,p[1]=d<0||g<d,(g>-1||He(p,"default"))&&a.push(h)}}}const c=[o,a];return it(i)&&n.set(i,c),c}function Yu(i){return i[0]!=="$"}function Ku(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function Zu(i,e){return Ku(i)===Ku(e)}function Ju(i,e){return Ie(e)?e.findIndex(t=>Zu(t,i)):Re(e)&&Zu(e,i)?0:-1}const Hd=i=>i[0]==="_"||i==="$stable",ou=i=>Ie(i)?i.map(pn):[pn(i)],z_=(i,e,t)=>{if(e._n)return e;const n=Cd((...r)=>ou(e(...r)),t);return n._c=!1,n},Vd=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Hd(r))continue;const s=i[r];if(Re(s))e[r]=z_(r,s,n);else if(s!=null){const o=ou(s);e[r]=()=>o}}},Gd=(i,e)=>{const t=ou(e);i.slots.default=()=>t},k_=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Ge(e),ta(e,"_",t)):Vd(e,i.slots={})}else i.slots={},e&&Gd(i,e);ta(i.slots,La,1)},B_=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=Je;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Ut(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Vd(e,r)),o=e}else e&&(Gd(i,e),o={default:1});if(s)for(const a in r)!Hd(a)&&!(a in o)&&delete r[a]};function Wd(){return{app:null,config:{isNativeTag:lg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let H_=0;function V_(i,e){return function(n,r=null){Re(n)||(n=Object.assign({},n)),r!=null&&!it(r)&&(r=null);const s=Wd(),o=new Set;let a=!1;const l=s.app={_uid:H_++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:lu,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Re(c.install)?(o.add(c),c.install(l,...u)):Re(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Ke(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Ia(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function aa(i,e,t,n,r=!1){if(Ie(i)){i.forEach((f,p)=>aa(f,e&&(Ie(e)?e[p]:e),t,n,r));return}if(Os(n)&&!r)return;const s=n.shapeFlag&4?Ia(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Je?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ft(c)?(u[c]=null,He(h,c)&&(h[c]=null)):pt(c)&&(c.value=null)),Re(l))Si(l,a,12,[o,u]);else{const f=ft(l),p=pt(l);if(f||p){const g=()=>{if(i.f){const d=f?He(h,l)?h[l]:u[l]:l.value;r?Ie(d)&&Hc(d,s):Ie(d)?d.includes(s)||d.push(s):f?(u[l]=[s],He(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,He(h,l)&&(h[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,zt(g,t)):g()}}}let fi=!1;const yo=i=>/svg/.test(i.namespaceURI)&&i.tagName!=="foreignObject",bo=i=>i.nodeType===8;function G_(i){const{mt:e,p:t,o:{patchProp:n,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=i,u=(_,v)=>{if(!v.hasChildNodes()){t(null,_,v),ra(),v._vnode=_;return}fi=!1,h(v.firstChild,_,null,null,null),ra(),v._vnode=_,fi&&console.error("Hydration completed but contains mismatches.")},h=(_,v,x,b,S,C=!1)=>{const P=bo(_)&&_.data==="[",y=()=>d(_,v,x,b,S,P),{type:w,ref:D,shapeFlag:U,patchFlag:X}=v;let O=_.nodeType;v.el=_,X===-2&&(C=!1,v.dynamicChildren=null);let L=null;switch(w){case Yr:O!==3?v.children===""?(l(v.el=r(""),o(_),_),L=_):L=y():(_.data!==v.children&&(fi=!0,_.data=v.children),L=s(_));break;case Ai:O!==8||P?L=y():L=s(_);break;case Xo:if(P&&(_=s(_),O=_.nodeType),O===1||O===3){L=_;const H=!v.children.length;for(let W=0;W<v.staticCount;W++)H&&(v.children+=L.nodeType===1?L.outerHTML:L.data),W===v.staticCount-1&&(v.anchor=L),L=s(L);return P?s(L):L}else y();break;case En:P?L=g(_,v,x,b,S,C):L=y();break;default:if(U&1)O!==1||v.type.toLowerCase()!==_.tagName.toLowerCase()?L=y():L=f(_,v,x,b,S,C);else if(U&6){v.slotScopeIds=S;const H=o(_);if(e(v,H,null,x,b,yo(H),C),L=P?m(_):s(_),L&&bo(L)&&L.data==="teleport end"&&(L=s(L)),Os(v)){let W;P?(W=Ke(En),W.anchor=L?L.previousSibling:H.lastChild):W=_.nodeType===3?Kd(""):Ke("div"),W.el=_,v.component.subTree=W}}else U&64?O!==8?L=y():L=v.type.hydrate(_,v,x,b,S,C,i,p):U&128&&(L=v.type.hydrate(_,v,x,b,yo(o(_)),S,C,i,h))}return D!=null&&aa(D,null,b,v),L},f=(_,v,x,b,S,C)=>{C=C||!!v.dynamicChildren;const{type:P,props:y,patchFlag:w,shapeFlag:D,dirs:U}=v,X=P==="input"&&U||P==="option";if(X||w!==-1){if(U&&In(v,null,x,"created"),y)if(X||!C||w&48)for(const L in y)(X&&L.endsWith("value")||no(L)&&!Ds(L))&&n(_,L,null,y[L],!1,void 0,x);else y.onClick&&n(_,"onClick",null,y.onClick,!1,void 0,x);let O;if((O=y&&y.onVnodeBeforeMount)&&un(O,x,v),U&&In(v,null,x,"beforeMount"),((O=y&&y.onVnodeMounted)||U)&&Ad(()=>{O&&un(O,x,v),U&&In(v,null,x,"mounted")},b),D&16&&!(y&&(y.innerHTML||y.textContent))){let L=p(_.firstChild,v,_,x,b,S,C);for(;L;){fi=!0;const H=L;L=L.nextSibling,a(H)}}else D&8&&_.textContent!==v.children&&(fi=!0,_.textContent=v.children)}return _.nextSibling},p=(_,v,x,b,S,C,P)=>{P=P||!!v.dynamicChildren;const y=v.children,w=y.length;for(let D=0;D<w;D++){const U=P?y[D]:y[D]=pn(y[D]);if(_)_=h(_,U,b,S,C,P);else{if(U.type===Yr&&!U.children)continue;fi=!0,t(null,U,x,null,b,S,yo(x),C)}}return _},g=(_,v,x,b,S,C)=>{const{slotScopeIds:P}=v;P&&(S=S?S.concat(P):P);const y=o(_),w=p(s(_),v,y,x,b,S,C);return w&&bo(w)&&w.data==="]"?s(v.anchor=w):(fi=!0,l(v.anchor=c("]"),y,w),w)},d=(_,v,x,b,S,C)=>{if(fi=!0,v.el=null,C){const w=m(_);for(;;){const D=s(_);if(D&&D!==w)a(D);else break}}const P=s(_),y=o(_);return a(_),t(null,v,y,P,x,b,yo(y),S),P},m=_=>{let v=0;for(;_;)if(_=s(_),_&&bo(_)&&(_.data==="["&&v++,_.data==="]")){if(v===0)return s(_);v--}return _};return[u,h]}const zt=Ad;function W_(i){return qd(i)}function q_(i){return qd(i,G_)}function qd(i,e){const t=gg();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Rn,insertStaticContent:g}=i,d=(A,R,G,ne=null,J=null,ae=null,ce=!1,te=null,he=!!R.dynamicChildren)=>{if(A===R)return;A&&!_i(A,R)&&(ne=Pe(A),z(A,J,ae,!0),A=null),R.patchFlag===-2&&(he=!1,R.dynamicChildren=null);const{type:re,ref:T,shapeFlag:M}=R;switch(re){case Yr:m(A,R,G,ne);break;case Ai:_(A,R,G,ne);break;case Xo:A==null&&v(R,G,ne,ce);break;case En:X(A,R,G,ne,J,ae,ce,te,he);break;default:M&1?S(A,R,G,ne,J,ae,ce,te,he):M&6?O(A,R,G,ne,J,ae,ce,te,he):(M&64||M&128)&&re.process(A,R,G,ne,J,ae,ce,te,he,Me)}T!=null&&J&&aa(T,A&&A.ref,ae,R||A,!R)},m=(A,R,G,ne)=>{if(A==null)n(R.el=a(R.children),G,ne);else{const J=R.el=A.el;R.children!==A.children&&c(J,R.children)}},_=(A,R,G,ne)=>{A==null?n(R.el=l(R.children||""),G,ne):R.el=A.el},v=(A,R,G,ne)=>{[A.el,A.anchor]=g(A.children,R,G,ne,A.el,A.anchor)},x=({el:A,anchor:R},G,ne)=>{let J;for(;A&&A!==R;)J=f(A),n(A,G,ne),A=J;n(R,G,ne)},b=({el:A,anchor:R})=>{let G;for(;A&&A!==R;)G=f(A),r(A),A=G;r(R)},S=(A,R,G,ne,J,ae,ce,te,he)=>{ce=ce||R.type==="svg",A==null?C(R,G,ne,J,ae,ce,te,he):w(A,R,J,ae,ce,te,he)},C=(A,R,G,ne,J,ae,ce,te)=>{let he,re;const{type:T,props:M,shapeFlag:F,transition:$,dirs:Q}=A;if(he=A.el=o(A.type,ae,M&&M.is,M),F&8?u(he,A.children):F&16&&y(A.children,he,null,ne,J,ae&&T!=="foreignObject",ce,te),Q&&In(A,null,ne,"created"),P(he,A,A.scopeId,ce,ne),M){for(const ge in M)ge!=="value"&&!Ds(ge)&&s(he,ge,null,M[ge],ae,A.children,ne,J,V);"value"in M&&s(he,"value",null,M.value),(re=M.onVnodeBeforeMount)&&un(re,ne,A)}Q&&In(A,null,ne,"beforeMount");const le=(!J||J&&!J.pendingBranch)&&$&&!$.persisted;le&&$.beforeEnter(he),n(he,R,G),((re=M&&M.onVnodeMounted)||le||Q)&&zt(()=>{re&&un(re,ne,A),le&&$.enter(he),Q&&In(A,null,ne,"mounted")},J)},P=(A,R,G,ne,J)=>{if(G&&p(A,G),ne)for(let ae=0;ae<ne.length;ae++)p(A,ne[ae]);if(J){let ae=J.subTree;if(R===ae){const ce=J.vnode;P(A,ce,ce.scopeId,ce.slotScopeIds,J.parent)}}},y=(A,R,G,ne,J,ae,ce,te,he=0)=>{for(let re=he;re<A.length;re++){const T=A[re]=te?gi(A[re]):pn(A[re]);d(null,T,R,G,ne,J,ae,ce,te)}},w=(A,R,G,ne,J,ae,ce)=>{const te=R.el=A.el;let{patchFlag:he,dynamicChildren:re,dirs:T}=R;he|=A.patchFlag&16;const M=A.props||Je,F=R.props||Je;let $;G&&ki(G,!1),($=F.onVnodeBeforeUpdate)&&un($,G,R,A),T&&In(R,A,G,"beforeUpdate"),G&&ki(G,!0);const Q=J&&R.type!=="foreignObject";if(re?D(A.dynamicChildren,re,te,G,ne,Q,ae):ce||k(A,R,te,null,G,ne,Q,ae,!1),he>0){if(he&16)U(te,R,M,F,G,ne,J);else if(he&2&&M.class!==F.class&&s(te,"class",null,F.class,J),he&4&&s(te,"style",M.style,F.style,J),he&8){const le=R.dynamicProps;for(let ge=0;ge<le.length;ge++){const fe=le[ge],Y=M[fe],we=F[fe];(we!==Y||fe==="value")&&s(te,fe,Y,we,J,A.children,G,ne,V)}}he&1&&A.children!==R.children&&u(te,R.children)}else!ce&&re==null&&U(te,R,M,F,G,ne,J);(($=F.onVnodeUpdated)||T)&&zt(()=>{$&&un($,G,R,A),T&&In(R,A,G,"updated")},ne)},D=(A,R,G,ne,J,ae,ce)=>{for(let te=0;te<R.length;te++){const he=A[te],re=R[te],T=he.el&&(he.type===En||!_i(he,re)||he.shapeFlag&70)?h(he.el):G;d(he,re,T,null,ne,J,ae,ce,!0)}},U=(A,R,G,ne,J,ae,ce)=>{if(G!==ne){if(G!==Je)for(const te in G)!Ds(te)&&!(te in ne)&&s(A,te,G[te],null,ce,R.children,J,ae,V);for(const te in ne){if(Ds(te))continue;const he=ne[te],re=G[te];he!==re&&te!=="value"&&s(A,te,re,he,ce,R.children,J,ae,V)}"value"in ne&&s(A,"value",G.value,ne.value)}},X=(A,R,G,ne,J,ae,ce,te,he)=>{const re=R.el=A?A.el:a(""),T=R.anchor=A?A.anchor:a("");let{patchFlag:M,dynamicChildren:F,slotScopeIds:$}=R;$&&(te=te?te.concat($):$),A==null?(n(re,G,ne),n(T,G,ne),y(R.children,G,T,J,ae,ce,te,he)):M>0&&M&64&&F&&A.dynamicChildren?(D(A.dynamicChildren,F,G,J,ae,ce,te),(R.key!=null||J&&R===J.subTree)&&$d(A,R,!0)):k(A,R,G,T,J,ae,ce,te,he)},O=(A,R,G,ne,J,ae,ce,te,he)=>{R.slotScopeIds=te,A==null?R.shapeFlag&512?J.ctx.activate(R,G,ne,ce,he):L(R,G,ne,J,ae,ce,he):H(A,R,he)},L=(A,R,G,ne,J,ae,ce)=>{const te=A.component=Q_(A,ne,J);if(iu(A)&&(te.ctx.renderer=Me),e0(te),te.asyncDep){if(J&&J.registerDep(te,W),!A.el){const he=te.subTree=Ke(Ai);_(null,he,R,G)}return}W(te,A,R,G,J,ae,ce)},H=(A,R,G)=>{const ne=R.component=A.component;if(l_(A,R,G))if(ne.asyncDep&&!ne.asyncResolved){j(ne,R,G);return}else ne.next=R,n_(ne.update),ne.update();else R.el=A.el,ne.vnode=R},W=(A,R,G,ne,J,ae,ce)=>{const te=()=>{if(A.isMounted){let{next:T,bu:M,u:F,parent:$,vnode:Q}=A,le=T,ge;ki(A,!1),T?(T.el=Q.el,j(A,T,ce)):T=Q,M&&Ka(M),(ge=T.props&&T.props.onVnodeBeforeUpdate)&&un(ge,$,T,Q),ki(A,!0);const fe=Za(A),Y=A.subTree;A.subTree=fe,d(Y,fe,h(Y.el),Pe(Y),A,J,ae),T.el=fe.el,le===null&&Qc(A,fe.el),F&&zt(F,J),(ge=T.props&&T.props.onVnodeUpdated)&&zt(()=>un(ge,$,T,Q),J)}else{let T;const{el:M,props:F}=R,{bm:$,m:Q,parent:le}=A,ge=Os(R);if(ki(A,!1),$&&Ka($),!ge&&(T=F&&F.onVnodeBeforeMount)&&un(T,le,R),ki(A,!0),M&&We){const fe=()=>{A.subTree=Za(A),We(M,A.subTree,A,J,null)};ge?R.type.__asyncLoader().then(()=>!A.isUnmounted&&fe()):fe()}else{const fe=A.subTree=Za(A);d(null,fe,G,ne,A,J,ae),R.el=fe.el}if(Q&&zt(Q,J),!ge&&(T=F&&F.onVnodeMounted)){const fe=R;zt(()=>un(T,le,fe),J)}(R.shapeFlag&256||le&&Os(le.vnode)&&le.vnode.shapeFlag&256)&&A.a&&zt(A.a,J),A.isMounted=!0,R=G=ne=null}},he=A.effect=new qc(te,()=>Ca(re),A.scope),re=A.update=()=>he.run();re.id=A.uid,ki(A,!0),re()},j=(A,R,G)=>{R.component=A;const ne=A.vnode.props;A.vnode=R,A.next=null,U_(A,R.props,ne,G),B_(A,R.children,G),hs(),Gu(),ds()},k=(A,R,G,ne,J,ae,ce,te,he=!1)=>{const re=A&&A.children,T=A?A.shapeFlag:0,M=R.children,{patchFlag:F,shapeFlag:$}=R;if(F>0){if(F&128){ie(re,M,G,ne,J,ae,ce,te,he);return}else if(F&256){se(re,M,G,ne,J,ae,ce,te,he);return}}$&8?(T&16&&V(re,J,ae),M!==re&&u(G,M)):T&16?$&16?ie(re,M,G,ne,J,ae,ce,te,he):V(re,J,ae,!0):(T&8&&u(G,""),$&16&&y(M,G,ne,J,ae,ce,te,he))},se=(A,R,G,ne,J,ae,ce,te,he)=>{A=A||Ur,R=R||Ur;const re=A.length,T=R.length,M=Math.min(re,T);let F;for(F=0;F<M;F++){const $=R[F]=he?gi(R[F]):pn(R[F]);d(A[F],$,G,null,J,ae,ce,te,he)}re>T?V(A,J,ae,!0,!1,M):y(R,G,ne,J,ae,ce,te,he,M)},ie=(A,R,G,ne,J,ae,ce,te,he)=>{let re=0;const T=R.length;let M=A.length-1,F=T-1;for(;re<=M&&re<=F;){const $=A[re],Q=R[re]=he?gi(R[re]):pn(R[re]);if(_i($,Q))d($,Q,G,null,J,ae,ce,te,he);else break;re++}for(;re<=M&&re<=F;){const $=A[M],Q=R[F]=he?gi(R[F]):pn(R[F]);if(_i($,Q))d($,Q,G,null,J,ae,ce,te,he);else break;M--,F--}if(re>M){if(re<=F){const $=F+1,Q=$<T?R[$].el:ne;for(;re<=F;)d(null,R[re]=he?gi(R[re]):pn(R[re]),G,Q,J,ae,ce,te,he),re++}}else if(re>F)for(;re<=M;)z(A[re],J,ae,!0),re++;else{const $=re,Q=re,le=new Map;for(re=Q;re<=F;re++){const xe=R[re]=he?gi(R[re]):pn(R[re]);xe.key!=null&&le.set(xe.key,re)}let ge,fe=0;const Y=F-Q+1;let we=!1,Ae=0;const be=new Array(Y);for(re=0;re<Y;re++)be[re]=0;for(re=$;re<=M;re++){const xe=A[re];if(fe>=Y){z(xe,J,ae,!0);continue}let Le;if(xe.key!=null)Le=le.get(xe.key);else for(ge=Q;ge<=F;ge++)if(be[ge-Q]===0&&_i(xe,R[ge])){Le=ge;break}Le===void 0?z(xe,J,ae,!0):(be[Le-Q]=re+1,Le>=Ae?Ae=Le:we=!0,d(xe,R[Le],G,null,J,ae,ce,te,he),fe++)}const Ee=we?$_(be):Ur;for(ge=Ee.length-1,re=Y-1;re>=0;re--){const xe=Q+re,Le=R[xe],Xe=xe+1<T?R[xe+1].el:ne;be[re]===0?d(null,Le,G,Xe,J,ae,ce,te,he):we&&(ge<0||re!==Ee[ge]?ye(Le,G,Xe,2):ge--)}}},ye=(A,R,G,ne,J=null)=>{const{el:ae,type:ce,transition:te,children:he,shapeFlag:re}=A;if(re&6){ye(A.component.subTree,R,G,ne);return}if(re&128){A.suspense.move(R,G,ne);return}if(re&64){ce.move(A,R,G,Me);return}if(ce===En){n(ae,R,G);for(let M=0;M<he.length;M++)ye(he[M],R,G,ne);n(A.anchor,R,G);return}if(ce===Xo){x(A,R,G);return}if(ne!==2&&re&1&&te)if(ne===0)te.beforeEnter(ae),n(ae,R,G),zt(()=>te.enter(ae),J);else{const{leave:M,delayLeave:F,afterLeave:$}=te,Q=()=>n(ae,R,G),le=()=>{M(ae,()=>{Q(),$&&$()})};F?F(ae,Q,le):le()}else n(ae,R,G)},z=(A,R,G,ne=!1,J=!1)=>{const{type:ae,props:ce,ref:te,children:he,dynamicChildren:re,shapeFlag:T,patchFlag:M,dirs:F}=A;if(te!=null&&aa(te,null,G,A,!0),T&256){R.ctx.deactivate(A);return}const $=T&1&&F,Q=!Os(A);let le;if(Q&&(le=ce&&ce.onVnodeBeforeUnmount)&&un(le,R,A),T&6)pe(A.component,G,ne);else{if(T&128){A.suspense.unmount(G,ne);return}$&&In(A,null,R,"beforeUnmount"),T&64?A.type.remove(A,R,G,J,Me,ne):re&&(ae!==En||M>0&&M&64)?V(re,R,G,!1,!0):(ae===En&&M&384||!J&&T&16)&&V(he,R,G),ne&&oe(A)}(Q&&(le=ce&&ce.onVnodeUnmounted)||$)&&zt(()=>{le&&un(le,R,A),$&&In(A,null,R,"unmounted")},G)},oe=A=>{const{type:R,el:G,anchor:ne,transition:J}=A;if(R===En){de(G,ne);return}if(R===Xo){b(A);return}const ae=()=>{r(G),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(A.shapeFlag&1&&J&&!J.persisted){const{leave:ce,delayLeave:te}=J,he=()=>ce(G,ae);te?te(A.el,ae,he):he()}else ae()},de=(A,R)=>{let G;for(;A!==R;)G=f(A),r(A),A=G;r(R)},pe=(A,R,G)=>{const{bum:ne,scope:J,update:ae,subTree:ce,um:te}=A;ne&&Ka(ne),J.stop(),ae&&(ae.active=!1,z(ce,A,R,G)),te&&zt(te,R),zt(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},V=(A,R,G,ne=!1,J=!1,ae=0)=>{for(let ce=ae;ce<A.length;ce++)z(A[ce],R,G,ne,J)},Pe=A=>A.shapeFlag&6?Pe(A.component.subTree):A.shapeFlag&128?A.suspense.next():f(A.anchor||A.el),Se=(A,R,G)=>{A==null?R._vnode&&z(R._vnode,null,null,!0):d(R._vnode||null,A,R,null,null,null,G),Gu(),ra(),R._vnode=A},Me={p:d,um:z,m:ye,r:oe,mt:L,mc:y,pc:k,pbc:D,n:Pe,o:i};let _e,We;return e&&([_e,We]=e(Me)),{render:Se,hydrate:_e,createApp:V_(Se,_e)}}function ki({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function $d(i,e,t=!1){const n=i.children,r=e.children;if(Ie(n)&&Ie(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=gi(r[s]),a.el=o.el),t||$d(o,a)),a.type===Yr&&(a.el=o.el)}}function $_(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const X_=i=>i.__isTeleport,En=Symbol(void 0),Yr=Symbol(void 0),Ai=Symbol(void 0),Xo=Symbol(void 0),Ns=[];let _n=null;function ti(i=!1){Ns.push(_n=i?null:[])}function Xd(){Ns.pop(),_n=Ns[Ns.length-1]||null}let Kr=1;function Qu(i){Kr+=i}function jd(i){return i.dynamicChildren=Kr>0?_n||Ur:null,Xd(),Kr>0&&_n&&_n.push(i),i}function ro(i,e,t,n,r,s){return jd(ii(i,e,t,n,r,s,!0))}function Mo(i,e,t,n,r){return jd(Ke(i,e,t,n,r,!0))}function la(i){return i?i.__v_isVNode===!0:!1}function _i(i,e){return i.type===e.type&&i.key===e.key}const La="__vInternal",Yd=({key:i})=>i??null,jo=({ref:i,ref_key:e,ref_for:t})=>i!=null?ft(i)||pt(i)||Re(i)?{i:en,r:i,k:e,f:!!t}:i:null;function ii(i,e=null,t=null,n=0,r=null,s=i===En?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Yd(e),ref:e&&jo(e),scopeId:Pa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return a?(au(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=ft(t)?8:16),Kr>0&&!o&&_n&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_n.push(l),l}const Ke=j_;function j_(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===A_)&&(i=Ai),la(i)){const a=Zr(i,e,!0);return t&&au(a,t),Kr>0&&!s&&_n&&(a.shapeFlag&6?_n[_n.indexOf(i)]=a:_n.push(a)),a.patchFlag|=-2,a}if(s0(i)&&(i=i.__vccOpts),e){e=Y_(e);let{class:a,style:l}=e;a&&!ft(a)&&(e.class=Ma(a)),it(l)&&(md(l)&&!Ie(l)&&(l=Ut({},l)),e.style=ba(l))}const o=ft(i)?1:c_(i)?128:X_(i)?64:it(i)?4:Re(i)?2:0;return ii(i,e,t,n,r,o,s,!0)}function Y_(i){return i?md(i)||La in i?Ut({},i):i:null}function Zr(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?K_(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Yd(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(jo(e)):[r,jo(e)]:jo(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==En?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Zr(i.ssContent),ssFallback:i.ssFallback&&Zr(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Kd(i=" ",e=0){return Ke(Yr,null,i,e)}function pn(i){return i==null||typeof i=="boolean"?Ke(Ai):Ie(i)?Ke(En,null,i.slice()):typeof i=="object"?gi(i):Ke(Yr,null,String(i))}function gi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Zr(i)}function au(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),au(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(La in e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Re(e)?(e={default:e,_ctx:en},t=32):(e=String(e),n&64?(t=16,e=[Kd(e)]):t=8);i.children=e,i.shapeFlag|=t}function K_(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Ma([e.class,n.class]));else if(r==="style")e.style=ba([e.style,n.style]);else if(no(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function un(i,e,t,n=null){Ln(i,e,7,[t,n])}const Z_=Wd();let J_=0;function Q_(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||Z_,s={uid:J_++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new _g(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bd(n,r),emitsOptions:Ed(n,r),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:n.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=r_.bind(null,s),i.ce&&i.ce(s),s}let rt=null;const Da=()=>rt||en,Jr=i=>{rt=i,i.scope.on()},rr=()=>{rt&&rt.scope.off(),rt=null};function Zd(i){return i.vnode.shapeFlag&4}let Qr=!1;function e0(i,e=!1){Qr=e;const{props:t,children:n}=i.vnode,r=Zd(i);N_(i,t,r,e),k_(i,n);const s=r?t0(i,e):void 0;return Qr=!1,s}function t0(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=gd(new Proxy(i.ctx,R_));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?i0(i):null;Jr(i),hs();const s=Si(n,i,0,[i.props,r]);if(ds(),rr(),td(s)){if(s.then(rr,rr),e)return s.then(o=>{sc(i,o,e)}).catch(o=>{ps(o,i,0)});i.asyncDep=s}else sc(i,s,e)}else Jd(i,e)}function sc(i,e,t){Re(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:it(e)&&(i.setupState=vd(e)),Jd(i,t)}let ef;function Jd(i,e,t){const n=i.type;if(!i.render){if(!e&&ef&&!n.render){const r=n.template||su(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Ut(Ut({isCustomElement:s,delimiters:a},o),l);n.render=ef(r,c)}}i.render=n.render||Rn}Jr(i),hs(),L_(i),ds(),rr()}function n0(i){return new Proxy(i.attrs,{get(e,t){return qt(i,"get","$attrs"),e[t]}})}function i0(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=n0(i))},slots:i.slots,emit:i.emit,expose:e}}function Ia(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(vd(gd(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Fs)return Fs[t](i)},has(e,t){return t in e||t in Fs}}))}function r0(i,e=!0){return Re(i)?i.displayName||i.name:i.name||e&&i.__name}function s0(i){return Re(i)&&"__vccOpts"in i}const oc=(i,e)=>Qg(i,e,Qr);function Qi(i,e,t){const n=arguments.length;return n===2?it(e)&&!Ie(e)?la(e)?Ke(i,null,[e]):Ke(i,e):Ke(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&la(t)&&(t=[t]),Ke(i,e,t))}const o0=Symbol(""),a0=()=>Vr(o0),lu="3.2.47",l0="http://www.w3.org/2000/svg",Ki=typeof document<"u"?document:null,tf=Ki&&Ki.createElement("template"),c0={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Ki.createElementNS(l0,i):Ki.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Ki.createTextNode(i),createComment:i=>Ki.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ki.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{tf.innerHTML=n?`<svg>${i}</svg>`:i;const a=tf.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function u0(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function f0(i,e,t){const n=i.style,r=ft(t);if(t&&!r){if(e&&!ft(e))for(const s in e)t[s]==null&&ac(n,s,"");for(const s in t)ac(n,s,t[s])}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const nf=/\s*!important$/;function ac(i,e,t){if(Ie(t))t.forEach(n=>ac(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=h0(i,e);nf.test(t)?i.setProperty(fs(n),t.replace(nf,""),"important"):i[n]=t}}const rf=["Webkit","Moz","ms"],el={};function h0(i,e){const t=el[e];if(t)return t;let n=Hn(e);if(n!=="filter"&&n in i)return el[e]=n;n=Ta(n);for(let r=0;r<rf.length;r++){const s=rf[r]+n;if(s in i)return el[e]=s}return e}const sf="http://www.w3.org/1999/xlink";function d0(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(sf,e.slice(6,e.length)):i.setAttributeNS(sf,e,t);else{const s=og(e);t==null||s&&!Jh(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function p0(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Jh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function m0(i,e,t,n){i.addEventListener(e,t,n)}function g0(i,e,t,n){i.removeEventListener(e,t,n)}function _0(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=x0(e);if(n){const c=s[e]=b0(n,r);m0(i,a,c,l)}else o&&(g0(i,a,o,l),s[e]=void 0)}}const of=/(?:Once|Passive|Capture)$/;function x0(i){let e;if(of.test(i)){e={};let n;for(;n=i.match(of);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):fs(i.slice(2)),e]}let tl=0;const v0=Promise.resolve(),y0=()=>tl||(v0.then(()=>tl=0),tl=Date.now());function b0(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Ln(M0(n,t.value),e,5,[n])};return t.value=i,t.attached=y0(),t}function M0(i,e){if(Ie(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const af=/^on[a-z]/,S0=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?u0(i,n,r):e==="style"?f0(i,t,n):no(e)?Bc(e)||_0(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):w0(i,e,n,r))?p0(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),d0(i,e,n,r))};function w0(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&af.test(e)&&Re(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||af.test(e)&&ft(t)?!1:e in i}const Qd=Ut({patchProp:S0},c0);let Us,lf=!1;function T0(){return Us||(Us=W_(Qd))}function E0(){return Us=lf?Us:q_(Qd),lf=!0,Us}const C0=(...i)=>{const e=T0().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=ep(n);if(!r)return;const s=e._component;!Re(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},A0=(...i)=>{const e=E0().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=ep(n);if(r)return t(r,!0,r instanceof SVGElement)},e};function ep(i){return ft(i)?document.querySelector(i):i}const P0=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,R0=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,L0=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function D0(i,e){if(i!=="__proto__"&&!(i==="constructor"&&e&&typeof e=="object"&&"prototype"in e))return e}function I0(i,e={}){if(typeof i!="string")return i;const t=i.toLowerCase().trim();if(t==="true")return!0;if(t==="false")return!1;if(t==="null")return null;if(t==="nan")return Number.NaN;if(t==="infinity")return Number.POSITIVE_INFINITY;if(t!=="undefined"){if(!L0.test(i)){if(e.strict)throw new SyntaxError("Invalid JSON");return i}try{return P0.test(i)||R0.test(i)?JSON.parse(i,D0):JSON.parse(i)}catch(n){if(e.strict)throw n;return i}}}const O0=/#/g,F0=/&/g,N0=/=/g,tp=/\+/g,U0=/%5b/gi,z0=/%5d/gi,k0=/%5e/gi,B0=/%60/gi,H0=/%7b/gi,V0=/%7c/gi,G0=/%7d/gi,W0=/%20/gi;function q0(i){return encodeURI(""+i).replace(V0,"|").replace(U0,"[").replace(z0,"]")}function lc(i){return q0(i).replace(tp,"%2B").replace(W0,"+").replace(O0,"%23").replace(F0,"%26").replace(B0,"`").replace(H0,"{").replace(G0,"}").replace(k0,"^")}function nl(i){return lc(i).replace(N0,"%3D")}function ca(i=""){try{return decodeURIComponent(""+i)}catch{return""+i}}function $0(i){return ca(i.replace(tp," "))}function np(i=""){const e={};i[0]==="?"&&(i=i.slice(1));for(const t of i.split("&")){const n=t.match(/([^=]+)=?(.*)/)||[];if(n.length<2)continue;const r=ca(n[1]);if(r==="__proto__"||r==="constructor")continue;const s=$0(n[2]||"");typeof e[r]<"u"?Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]:e[r]=s}return e}function X0(i,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(t=>`${nl(i)}=${lc(t)}`).join("&"):`${nl(i)}=${lc(e)}`:nl(i)}function ip(i){return Object.keys(i).filter(e=>i[e]!==void 0).map(e=>X0(e,i[e])).join("&")}const j0=/^\w{2,}:(\/\/)?/,Y0=/^\/\/[^/]+/;function Oa(i,e=!1){return j0.test(i)||e&&Y0.test(i)}const K0=/\/$|\/\?/;function cc(i="",e=!1){return e?K0.test(i):i.endsWith("/")}function rp(i="",e=!1){if(!e)return(cc(i)?i.slice(0,-1):i)||"/";if(!cc(i,!0))return i||"/";const[t,...n]=i.split("?");return(t.slice(0,-1)||"/")+(n.length>0?`?${n.join("?")}`:"")}function uc(i="",e=!1){if(!e)return i.endsWith("/")?i:i+"/";if(cc(i,!0))return i||"/";const[t,...n]=i.split("?");return t+"/"+(n.length>0?`?${n.join("?")}`:"")}function sp(i=""){return i.startsWith("/")}function Z0(i=""){return(sp(i)?i.slice(1):i)||"/"}function cf(i=""){return sp(i)?i:"/"+i}function J0(i,e){if(op(e)||Oa(i))return i;const t=rp(e);return i.startsWith(t)?i:so(t,i)}function Q0(i,e){if(op(e))return i;const t=rp(e);if(!i.startsWith(t))return i;const n=i.slice(t.length);return n[0]==="/"?n:"/"+n}function ex(i,e){const t=oo(i),n={...np(t.search),...e};return t.search=ip(n),ap(t)}function op(i){return!i||i==="/"}function tx(i){return i&&i!=="/"}function so(i,...e){let t=i||"";for(const n of e.filter(r=>tx(r)))t=t?uc(t)+Z0(n):n;return t}function nx(i,e,t={}){return t.trailingSlash||(i=uc(i),e=uc(e)),t.leadingSlash||(i=cf(i),e=cf(e)),t.encoding||(i=ca(i),e=ca(e)),i===e}function oo(i="",e){if(!Oa(i,!0))return e?oo(e+i):uf(i);const[t="",n,r=""]=(i.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[s="",o=""]=(r.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:l,hash:c}=uf(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:t,auth:n?n.slice(0,Math.max(0,n.length-1)):"",host:s,pathname:a,search:l,hash:c}}function uf(i=""){const[e="",t="",n=""]=(i.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:t,hash:n}}function ap(i){const e=i.pathname+(i.search?(i.search.startsWith("?")?"":"?")+i.search:"")+i.hash;return i.protocol?i.protocol+"//"+(i.auth?i.auth+"@":"")+i.host+e:e}class ix extends Error{constructor(){super(...arguments),this.name="FetchError"}}function rx(i,e,t){let n="";i&&t&&(n=`${t.status} ${t.statusText} (${i.toString()})`),e&&(n=`${e.message} (${n})`);const r=new ix(n);return Object.defineProperty(r,"request",{get(){return i}}),Object.defineProperty(r,"response",{get(){return t}}),Object.defineProperty(r,"data",{get(){return t&&t._data}}),Object.defineProperty(r,"status",{get(){return t&&t.status}}),Object.defineProperty(r,"statusText",{get(){return t&&t.statusText}}),Object.defineProperty(r,"statusCode",{get(){return t&&t.status}}),Object.defineProperty(r,"statusMessage",{get(){return t&&t.statusText}}),r}const sx=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function ff(i="GET"){return sx.has(i.toUpperCase())}function ox(i){if(i===void 0)return!1;const e=typeof i;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(i)?!0:i.constructor&&i.constructor.name==="Object"||typeof i.toJSON=="function"}const ax=new Set(["image/svg","application/xml","application/xhtml","application/html"]),lx=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function cx(i=""){if(!i)return"json";const e=i.split(";").shift();return lx.test(e)?"json":ax.has(e)||e.startsWith("text/")?"text":"blob"}const ux=new Set([408,409,425,429,500,502,503,504]);function lp(i){const{fetch:e,Headers:t}=i;function n(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){const c=typeof o.options.retry=="number"?o.options.retry:ff(o.options.method)?0:1,u=o.response&&o.response.status||500;if(c>0&&ux.has(u))return r(o.request,{...o.options,retry:c-1})}const l=rx(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(l,r),l}const r=async function(a,l={}){const c={request:a,options:{...i.defaults,...l},response:void 0,error:void 0};c.options.onRequest&&await c.options.onRequest(c),typeof c.request=="string"&&(c.options.baseURL&&(c.request=J0(c.request,c.options.baseURL)),(c.options.query||c.options.params)&&(c.request=ex(c.request,{...c.options.params,...c.options.query})),c.options.body&&ff(c.options.method)&&ox(c.options.body)&&(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new t(c.options.headers),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json"))),c.response=await e(c.request,c.options).catch(async h=>(c.error=h,c.options.onRequestError&&await c.options.onRequestError(c),n(c)));const u=(c.options.parseResponse?"json":c.options.responseType)||cx(c.response.headers.get("content-type")||"");if(u==="json"){const h=await c.response.text(),f=c.options.parseResponse||I0;c.response._data=f(h)}else u==="stream"?c.response._data=c.response.body:c.response._data=await c.response[u]();return c.options.onResponse&&await c.options.onResponse(c),c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await c.options.onResponseError(c),n(c)):c.response},s=function(a,l){return r(a,l).then(c=>c._data)};return s.raw=r,s.native=e,s.create=(o={})=>lp({...i,defaults:{...i.defaults,...o}}),s}const cp=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),fx=cp.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),hx=cp.Headers,dx=lp({fetch:fx,Headers:hx}),px=dx,mx=()=>{var i;return((i=window==null?void 0:window.__NUXT__)==null?void 0:i.config)||{}},ua=mx().app,gx=()=>ua.baseURL,_x=()=>ua.buildAssetsDir,xx=(...i)=>so(up(),_x(),...i),up=(...i)=>{const e=ua.cdnURL||ua.baseURL;return i.length?so(e,...i):e};globalThis.__buildAssetsURL=xx,globalThis.__publicAssetsURL=up;function fc(i,e={},t){for(const n in i){const r=i[n],s=t?`${t}:${n}`:n;typeof r=="object"&&r!==null?fc(r,e,s):typeof r=="function"&&(e[s]=r)}return e}function vx(i,e){return i.reduce((t,n)=>t.then(()=>n.apply(void 0,e)),Promise.resolve())}function yx(i,e){return Promise.all(i.map(t=>t.apply(void 0,e)))}function il(i,e){for(const t of i)t(e)}class bx{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,n={}){if(!e||typeof t!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!n.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let n,r=(...s)=>(typeof n=="function"&&n(),n=void 0,r=void 0,t(...s));return n=this.hook(e,r),n}removeHook(e,t){if(this._hooks[e]){const n=this._hooks[e].indexOf(t);n!==-1&&this._hooks[e].splice(n,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const n=this._hooks[e]||[];this._hooks[e]=void 0;for(const r of n)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=fc(e),n=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{for(const r of n.splice(0,n.length))r()}}removeHooks(e){const t=fc(e);for(const n in t)this.removeHook(n,t[n])}callHook(e,...t){return this.callHookWith(vx,e,...t)}callHookParallel(e,...t){return this.callHookWith(yx,e,...t)}callHookWith(e,t,...n){const r=this._before||this._after?{name:t,args:n,context:{}}:void 0;this._before&&il(this._before,r);const s=e(this._hooks[t]||[],n);return s instanceof Promise?s.finally(()=>{this._after&&r&&il(this._after,r)}):(this._after&&r&&il(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}function fp(){return new bx}function Mx(){let i,e=!1;const t=n=>{if(i&&i!==n)throw new Error("Context conflict")};return{use:()=>{if(i===void 0)throw new Error("Context is not available");return i},tryUse:()=>i,set:(n,r)=>{r||t(n),i=n,e=!0},unset:()=>{i=void 0,e=!1},call:(n,r)=>{t(n),i=n;try{return r()}finally{e||(i=void 0)}},async callAsync(n,r){i=n;const s=()=>{i=n},o=()=>i===n?s:void 0;pf.add(o);try{const a=r();return e||(i=void 0),await a}finally{pf.delete(o)}}}}function Sx(){const i={};return{get(e){return i[e]||(i[e]=Mx()),i[e],i[e]}}}const fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},hf="__unctx__",wx=fa[hf]||(fa[hf]=Sx()),Tx=i=>wx.get(i),df="__unctx_async_handlers__",pf=fa[df]||(fa[df]=new Set),hp=Tx("nuxt-app"),Ex="__nuxt_plugin";function Cx(i){let e=0;const t={provide:void 0,globalName:"nuxt",payload:ur({data:{},state:{},_errors:{},...window.__NUXT__}),static:{data:{}},isHydrating:!0,deferHydration(){if(!t.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return t.isHydrating=!1,t.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},...i};t.hooks=fp(),t.hook=t.hooks.hook,t.callHook=t.hooks.callHook,t.provide=(s,o)=>{const a="$"+s;So(t,a,o),So(t.vueApp.config.globalProperties,a,o)},So(t.vueApp,"$nuxt",t),So(t.vueApp.config.globalProperties,"$nuxt",t);const n=ur(t.payload.config),r=new Proxy(n,{get(s,o){return o==="public"?s.public:s[o]??s.public[o]},set(s,o,a){return o==="public"||o==="app"?!1:(s[o]=a,s.public[o]=a,!0)}});return t.provide("config",r),t}async function Ax(i,e){if(typeof e!="function")return;const{provide:t}=await Ir(i,e,[i])||{};if(t&&typeof t=="object")for(const n in t)i.provide(n,t[n])}async function Px(i,e){for(const t of e)await Ax(i,t)}function Rx(i){return i.map(t=>typeof t!="function"?null:t.length>1?n=>t(n,n.provide):t).filter(Boolean)}function ao(i){return i[Ex]=!0,i}function Ir(i,e,t){const n=()=>t?e(...t):e();return hp.set(i),n()}function Lt(){const i=hp.tryUse();if(!i){const e=Da();if(!e)throw new Error("nuxt instance unavailable");return e.appContext.app.$nuxt}return i}function hc(){return Lt().$config}function So(i,e,t){Object.defineProperty(i,e,{get:()=>t})}const rl={},Lx=ao(i=>{for(const e in rl)i.vueApp.component(e,rl[e]),i.vueApp.component("Lazy"+e,rl[e])}),Dx=["script","style","noscript"],Ix=["base","meta","link","style","script","noscript"],Ox=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function Fx(i,e){const{props:t,tag:n}=i;if(Ox.includes(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const r=["id"];n==="meta"&&r.push("name","property","http-equiv");for(const s of r)if(typeof t[s]<"u"){const o=String(t[s]);return e&&!e(o)?!1:`${n}:${s}:${o}`}return!1}const wo=(i,e)=>{const{tag:t,$el:n}=i;n&&(Object.entries(t.props).forEach(([r,s])=>{s=String(s);const o=`attr:${r}`;if(r==="class"){if(!s)return;for(const a of s.split(" ")){const l=`${o}:${a}`;e&&e(i,l,()=>n.classList.remove(a)),n.classList.contains(a)||n.classList.add(a)}return}e&&!r.startsWith("data-h-")&&e(i,o,()=>n.removeAttribute(r)),n.getAttribute(r)!==s&&n.setAttribute(r,s)}),Dx.includes(t.tag)&&n.innerHTML!==(t.children||"")&&(n.innerHTML=t.children||""))};function cu(i){let e=9;for(let t=0;t<i.length;)e=Math.imul(e^i.charCodeAt(t++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function dp(i,e={}){var u,h;const t={shouldRender:!0};if(await i.hooks.callHook("dom:beforeRender",t),!t.shouldRender)return;const n=e.document||window.document,r=i._popSideEffectQueue();i.headEntries().map(f=>f._sde).forEach(f=>{Object.entries(f).forEach(([p,g])=>{r[p]=g})});const s=async f=>{const p=i.headEntries().find(d=>d._i===f._e),g={renderId:f._d||cu(JSON.stringify({...f,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:f,entry:p,staleSideEffects:r};return await i.hooks.callHook("dom:beforeRenderTag",g),g},o=[],a={body:[],head:[]},l=(f,p,g)=>{p=`${f.renderId}:${p}`,f.entry&&(f.entry._sde[p]=g),delete r[p]},c=f=>{i._elMap[f.renderId]=f.$el,o.push(f),l(f,"el",()=>{var p;(p=f.$el)==null||p.remove(),delete i._elMap[f.renderId]})};for(const f of await i.resolveTags()){const p=await s(f);if(!p.shouldRender)continue;const{tag:g}=p;if(g.tag==="title"){n.title=g.children||"",o.push(p);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){p.$el=n[g.tag==="htmlAttrs"?"documentElement":"body"],wo(p,l),o.push(p);continue}if(p.$el=i._elMap[p.renderId],!p.$el&&g._hash&&(p.$el=n.querySelector(`${(u=g.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._hash}]`)),p.$el){p.tag._d&&wo(p),c(p);continue}p.$el=n.createElement(g.tag),wo(p),a[(h=g.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(p)}Object.entries(a).forEach(([f,p])=>{var d;if(!p.length)return;const g=(d=n==null?void 0:n[f])==null?void 0:d.children;if(g){for(const m of[...g].reverse()){const _=m.tagName.toLowerCase();if(!Ix.includes(_))continue;const v=Fx({tag:_,props:m.getAttributeNames().reduce((b,S)=>({...b,[S]:m.getAttribute(S)}),{})}),x=p.findIndex(b=>{var S;return b&&(b.tag._d===v||((S=m.isEqualNode)==null?void 0:S.call(m,b.$el)))});if(x!==-1){const b=p[x];b.$el=m,wo(b),c(b),delete p[x]}}p.forEach(m=>{if(m.$el){switch(m.tag.tagPosition){case"bodyClose":n.body.appendChild(m.$el);break;case"bodyOpen":n.body.insertBefore(m.$el,n.body.firstChild);break;case"head":default:n.head.appendChild(m.$el);break}c(m)}})}});for(const f of o)await i.hooks.callHook("dom:renderTag",f);Object.values(r).forEach(f=>f())}let Yo=null;async function Nx(i,e={}){function t(){return Yo=null,dp(i,e)}const n=e.delayFn||(r=>setTimeout(r,10));return Yo=Yo||new Promise(r=>n(()=>r(t())))}const Ux={__proto__:null,debouncedRenderDOMHead:Nx,get domUpdatePromise(){return Yo},hashCode:cu,renderDOMHead:dp},zx=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],kx=["tagPosition","tagPriority","tagDuplicateStrategy"];async function Bx(i,e){const t={tag:i,props:{}};return i==="title"||i==="titleTemplate"?(t.children=e instanceof Promise?await e:e,t):(t.props=await Hx({...e}),["children","innerHtml","innerHTML"].forEach(n=>{typeof t.props[n]<"u"&&(t.children=t.props[n],typeof t.children=="object"&&(t.children=JSON.stringify(t.children)),delete t.props[n])}),Object.keys(t.props).filter(n=>kx.includes(n)).forEach(n=>{t[n]=t.props[n],delete t.props[n]}),typeof t.props.class=="object"&&!Array.isArray(t.props.class)&&(t.props.class=Object.keys(t.props.class).filter(n=>t.props.class[n])),Array.isArray(t.props.class)&&(t.props.class=t.props.class.join(" ")),t.props.content&&Array.isArray(t.props.content)?t.props.content.map((n,r)=>{const s={...t,props:{...t.props}};return s.props.content=n,s.key=`${t.props.name||t.props.property}:${r}`,s}):t)}async function Hx(i){for(const e of Object.keys(i))i[e]instanceof Promise&&(i[e]=await i[e]),String(i[e])==="true"?i[e]="":String(i[e])==="false"&&delete i[e];return i}const mf=i=>{if(typeof i.tagPriority=="number")return i.tagPriority;switch(i.tagPriority){case"critical":return 2;case"high":return 9;case"low":return 12}switch(i.tag){case"base":return-1;case"title":return 1;case"meta":return i.props.charset?-2:i.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}},Vx=(i,e)=>mf(i)-mf(e),Gx=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function Wx(i,e){const{props:t,tag:n}=i;if(Gx.includes(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const r=["id"];n==="meta"&&r.push("name","property","http-equiv");for(const s of r)if(typeof t[s]<"u"){const o=String(t[s]);return e&&!e(o)?!1:`${n}:${s}:${o}`}return!1}const gf=(i,e)=>i==null?e||null:typeof i=="function"?i(e):i.replace("%s",e??"");function qx(i){let e=i.findIndex(n=>n.tag==="titleTemplate");const t=i.findIndex(n=>n.tag==="title");if(t!==-1&&e!==-1){const n=gf(i[e].children,i[t].children);n!==null?i[t].children=n||i[t].children:delete i[t]}else if(e!==-1){const n=gf(i[e].children);n!==null&&(i[e].children=n,i[e].tag="title",e=-1)}return e!==-1&&delete i[e],i.filter(Boolean)}const $x=i=>{i=i||{};const e=i.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:t}){e.forEach(r=>{t.props[r]&&(t.key=t.props[r],delete t.props[r])});const n=t.key?`${t.tag}:${t.key}`:Wx(t);n&&(t._d=n)},"tags:resolve":function(t){const n={};t.tags.forEach(r=>{let s=r._d||r._p;const o=n[s];if(o){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&(r.tag==="htmlAttrs"||r.tag==="bodyAttrs")&&(a="merge"),a==="merge"){const c=o.props;["class","style"].forEach(u=>{r.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),r.props[u]=`${c[u]} ${r.props[u]}`)}),n[s].props={...c,...r.props};return}else r._e===o._e&&(s=r._d=`${s}:${r._p}`);const l=Object.keys(r.props).length;if((l===0||l===1&&typeof r.props["data-h-key"]<"u")&&!r.children){delete n[s];return}}n[s]=r}),t.tags=Object.values(n)}}}},Xx=()=>({hooks:{"tags:resolve":i=>{const e=t=>{var n;return(n=i.tags.find(r=>r._d===t))==null?void 0:n._p};for(const t of i.tags){if(!t.tagPriority||typeof t.tagPriority=="number")continue;const n=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];for(const{prefix:r,offset:s}of n)if(t.tagPriority.startsWith(r)){const o=t.tagPriority.replace(r,""),a=e(o);typeof a<"u"&&(t._p=a+s)}}i.tags.sort((t,n)=>t._p-n._p).sort(Vx)}}}),jx=()=>({hooks:{"tags:resolve":i=>{i.tags=qx(i.tags)}}}),Yx=()=>({hooks:{"tag:normalise":function({tag:i}){typeof i.props.body<"u"&&(i.tagPosition="bodyClose",delete i.props.body)}}}),Kx=typeof window<"u",Zx=()=>({hooks:{"tag:normalise":i=>{var r,s;const{tag:e,entry:t}=i,n=typeof e.props._dynamic<"u";!pp.includes(e.tag)||!e.key||(e._hash=cu(JSON.stringify({tag:e.tag,key:e.key})),!(Kx||(s=(r=gp())==null?void 0:r.resolvedOptions)!=null&&s.document)&&(t._m==="server"||n)&&(e.props[`data-h-${e._hash}`]=""))},"tags:resolve":i=>{i.tags=i.tags.map(e=>(delete e.props._dynamic,e))}}}),Jx=i=>({hooks:{"entries:updated":function(e){if(typeof(i==null?void 0:i.document)>"u"&&typeof window>"u")return;let t=i==null?void 0:i.delayFn;!t&&typeof requestAnimationFrame<"u"&&(t=requestAnimationFrame),Promise.resolve().then(function(){return Ux}).then(({debouncedRenderDOMHead:n})=>{n(e,{document:(i==null?void 0:i.document)||window.document,delayFn:t})})}}}),Qx=()=>{const i=(e,t)=>{const n={},r={};Object.entries(t.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?r[o]=a:n[o]=a});let s;return e==="dom"&&t.tag==="script"&&typeof n.src=="string"&&typeof r.onload<"u"&&(s=n.src,delete n.src),{props:n,eventHandlers:r,delayedSrc:s}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(t=>(t.props=i("ssr",t).props,t))},"dom:beforeRenderTag":function(e){const{props:t,eventHandlers:n,delayedSrc:r}=i("dom",e.tag);Object.keys(n).length&&(e.tag.props=t,e.tag._eventHandlers=n,e.tag._delayedSrc=r)},"dom:renderTag":function(e){const t=e.$el;if(!e.tag._eventHandlers||!t)return;const n=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:t;Object.entries(e.tag._eventHandlers).forEach(([r,s])=>{const o=`${e.tag._d||e.tag._p}:${r}`,a=r.slice(2).toLowerCase(),l=`data-h-${a}`;if(delete e.staleSideEffects[o],t.hasAttribute(l))return;const c=s;t.setAttribute(l,""),n.addEventListener(a,c),e.entry&&(e.entry._sde[o]=()=>{n.removeEventListener(a,c),t.removeAttribute(l)})}),e.tag._delayedSrc&&t.setAttribute("src",e.tag._delayedSrc)}}}};function ev(i){return Array.isArray(i)?i:[i]}const pp=["base","meta","link","style","script","noscript"];let mp;const tv=i=>mp=i,gp=()=>mp,nv=10;async function iv(i){const e=[];return Object.entries(i.resolvedInput||i.input).filter(([t,n])=>typeof n<"u"&&zx.includes(t)).forEach(([t,n])=>{const r=ev(n);e.push(...r.map(s=>Bx(t,s)).flat())}),(await Promise.all(e)).flat().map((t,n)=>(t._e=i._i,t._p=(i._i<<nv)+n,t))}const rv=()=>[$x(),Xx(),jx(),Zx(),Qx(),Yx()],sv=(i={})=>[Jx({document:i==null?void 0:i.document,delayFn:i==null?void 0:i.domDelayFn})];function ov(i={}){const e=av({...i,plugins:[...sv(i),...(i==null?void 0:i.plugins)||[]]});return tv(e),e}function av(i={}){let e=[],t={},n=0;const r=fp();i!=null&&i.hooks&&r.addHooks(i.hooks),i.plugins=[...rv(),...(i==null?void 0:i.plugins)||[]],i.plugins.forEach(a=>a.hooks&&r.addHooks(a.hooks));const s=()=>r.callHook("entries:updated",o),o={resolvedOptions:i,headEntries(){return e},get hooks(){return r},use(a){a.hooks&&r.addHooks(a.hooks)},push(a,l){const c={_i:n++,input:a,_sde:{}};return l!=null&&l.mode&&(c._m=l==null?void 0:l.mode),e.push(c),s(),{dispose(){e=e.filter(u=>u._i!==c._i?!0:(t={...t,...u._sde||{}},u._sde={},s(),!1))},patch(u){e=e.map(h=>(h._i===c._i&&(c.input=h.input=u,s()),h))}}},async resolveTags(){const a={tags:[],entries:[...e]};await r.callHook("entries:resolve",a);for(const l of a.entries)for(const c of await iv(l)){const u={tag:c,entry:l};await r.callHook("tag:normalise",u),a.tags.push(u.tag)}return await r.callHook("tags:resolve",a),a.tags},_elMap:{},_popSideEffectQueue(){const a={...t};return t={},a}};return o.hooks.callHook("init",o),o}function lv(i){return typeof i=="function"?i():dn(i)}function ha(i,e=""){if(i instanceof Promise)return i;const t=lv(i);if(!i||!t)return t;if(Array.isArray(t))return t.map(n=>ha(n,e));if(typeof t=="object"){let n=!1;const r=Object.fromEntries(Object.entries(t).map(([s,o])=>s==="titleTemplate"||s.startsWith("on")?[s,dn(o)]:((typeof o=="function"||pt(o))&&(n=!0),[s,ha(o,s)])));return n&&pp.includes(String(e))&&(r._dynamic=!0),r}return t}const cv=lu.startsWith("3"),uv=typeof window<"u",_p="usehead";function uu(){return Da()&&Vr(_p)||gp()}function fv(i={}){const e=ov({...i,domDelayFn:n=>setTimeout(()=>Jc(()=>n()),10),plugins:[hv(),...(i==null?void 0:i.plugins)||[]]}),t={install(n){cv&&(n.config.globalProperties.$unhead=e,n.provide(_p,e))}};return e.install=t.install,e}const hv=()=>({hooks:{"entries:resolve":function(i){for(const e of i.entries)e.resolvedInput=ha(e.input)}}});function dv(i,e={}){const t=uu(),n=Bt(!1),r=Bt({});g_(()=>{r.value=ha(i)});const s=t.push(r.value,e);return Is([r,n],([a,l])=>{l||s.patch(a)}),Da()&&(ru(()=>{s.dispose()}),Dd(()=>{n.value=!0}),Ld(()=>{n.value=!1})),s}function pv(i,e={}){return uu().push(i,e)}function xp(i,e={}){var n;const t=uu();if(t){const r=uv||!!((n=t.resolvedOptions)!=null&&n.document);return e.mode==="server"&&r||e.mode==="client"&&!r?void 0:r?dv(i,e):pv(i,e)}}const mv=["script","style","noscript"],gv=["base","meta","link","style","script","noscript"],_v=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function xv(i,e){const{props:t,tag:n}=i;if(_v.includes(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const r=["id"];n==="meta"&&r.push("name","property","http-equiv");for(const s of r)if(typeof t[s]<"u"){const o=String(t[s]);return e&&!e(o)?!1:`${n}:${s}:${o}`}return!1}const To=(i,e)=>{const{tag:t,$el:n}=i;n&&(Object.entries(t.props).forEach(([r,s])=>{s=String(s);const o=`attr:${r}`;if(r==="class"){if(!s)return;for(const a of s.split(" ")){const l=`${o}:${a}`;e&&e(i,l,()=>n.classList.remove(a)),n.classList.contains(a)||n.classList.add(a)}return}e&&!r.startsWith("data-h-")&&e(i,o,()=>n.removeAttribute(r)),n.getAttribute(r)!==s&&n.setAttribute(r,s)}),mv.includes(t.tag)&&n.innerHTML!==(t.children||"")&&(n.innerHTML=t.children||""))};function vv(i){let e=9;for(let t=0;t<i.length;)e=Math.imul(e^i.charCodeAt(t++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function vp(i,e={}){var u,h;const t={shouldRender:!0};if(await i.hooks.callHook("dom:beforeRender",t),!t.shouldRender)return;const n=e.document||window.document,r=i._popSideEffectQueue();i.headEntries().map(f=>f._sde).forEach(f=>{Object.entries(f).forEach(([p,g])=>{r[p]=g})});const s=async f=>{const p=i.headEntries().find(d=>d._i===f._e),g={renderId:f._d||vv(JSON.stringify({...f,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:f,entry:p,staleSideEffects:r};return await i.hooks.callHook("dom:beforeRenderTag",g),g},o=[],a={body:[],head:[]},l=(f,p,g)=>{p=`${f.renderId}:${p}`,f.entry&&(f.entry._sde[p]=g),delete r[p]},c=f=>{i._elMap[f.renderId]=f.$el,o.push(f),l(f,"el",()=>{var p;(p=f.$el)==null||p.remove(),delete i._elMap[f.renderId]})};for(const f of await i.resolveTags()){const p=await s(f);if(!p.shouldRender)continue;const{tag:g}=p;if(g.tag==="title"){n.title=g.children||"",o.push(p);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){p.$el=n[g.tag==="htmlAttrs"?"documentElement":"body"],To(p,l),o.push(p);continue}if(p.$el=i._elMap[p.renderId],!p.$el&&g._hash&&(p.$el=n.querySelector(`${(u=g.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._hash}]`)),p.$el){p.tag._d&&To(p),c(p);continue}p.$el=n.createElement(g.tag),To(p),a[(h=g.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(p)}Object.entries(a).forEach(([f,p])=>{var d;if(!p.length)return;const g=(d=n==null?void 0:n[f])==null?void 0:d.children;if(g){for(const m of[...g].reverse()){const _=m.tagName.toLowerCase();if(!gv.includes(_))continue;const v=xv({tag:_,props:m.getAttributeNames().reduce((b,S)=>({...b,[S]:m.getAttribute(S)}),{})}),x=p.findIndex(b=>{var S;return b&&(b.tag._d===v||((S=m.isEqualNode)==null?void 0:S.call(m,b.$el)))});if(x!==-1){const b=p[x];b.$el=m,To(b),c(b),delete p[x]}}p.forEach(m=>{if(m.$el){switch(m.tag.tagPosition){case"bodyClose":n.body.appendChild(m.$el);break;case"bodyOpen":n.body.insertBefore(m.$el,n.body.firstChild);break;case"head":default:n.head.appendChild(m.$el);break}c(m)}})}});for(const f of o)await i.hooks.callHook("dom:renderTag",f);Object.values(r).forEach(f=>f())}let sl=null;async function yv(i,e={}){function t(){return sl=null,vp(i,e)}const n=e.delayFn||(r=>setTimeout(r,10));return sl=sl||new Promise(r=>n(()=>r(t())))}function bv(i){const e=fv(),t={unhead:e,install(n){lu.startsWith("3")&&(n.config.globalProperties.$head=e,n.provide("usehead",e))},use(n){e.use(n)},resolveTags(){return e.resolveTags()},headEntries(){return e.headEntries()},headTags(){return e.resolveTags()},push(n,r){return e.push(n,r)},addEntry(n,r){return e.push(n,r)},addHeadObjs(n,r){return e.push(n,r)},addReactiveEntry(n,r){const s=xp(n,r);return typeof s<"u"?s.dispose:()=>{}},removeHeadObjs(){},updateDOM(n,r){r?vp(e,{document:n}):yv(e,{delayFn:s=>setTimeout(()=>s(),50),document:n})},internalHooks:e.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return e.addHeadObjs=t.addHeadObjs,e.updateDOM=t.updateDOM,e.hooks.hook("dom:beforeRender",n=>{for(const r of t.hooks["before:dom"])r()===!1&&(n.shouldRender=!1)}),i&&t.addHeadObjs(i),t}const Mv={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},Sv="__nuxt",wv=ao(i=>{const e=bv();e.push(Mv),i.vueApp.use(e);{let t=!0;const n=()=>{t=!1,e.internalHooks.callHook("entries:updated",e.unhead)};e.internalHooks.hook("dom:beforeRender",r=>{r.shouldRender=!t}),i.hooks.hook("page:start",()=>{t=!0}),i.hooks.hook("page:finish",n),i.hooks.hook("app:mounted",n)}i._useHead=xp});class dc extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage=void 0}toJSON(){const e={message:this.message,statusCode:this.statusCode};return this.statusMessage&&(e.statusMessage=this.statusMessage),this.data!==void 0&&(e.data=this.data),e}}dc.__h3_error__=!0;function Tv(i){if(typeof i=="string")return new dc(i);if(Ev(i))return i;const e=new dc(i.message??i.statusMessage,i.cause?{cause:i.cause}:void 0);if("stack"in i)try{Object.defineProperty(e,"stack",{get(){return i.stack}})}catch{try{e.stack=i.stack}catch{}}return i.data&&(e.data=i.data),i.statusCode?e.statusCode=i.statusCode:i.status&&(e.statusCode=i.status),i.statusMessage?e.statusMessage=i.statusMessage:i.statusText&&(e.statusMessage=i.statusText),i.fatal!==void 0&&(e.fatal=i.fatal),i.unhandled!==void 0&&(e.unhandled=i.unhandled),e}function Ev(i){var e;return((e=i==null?void 0:i.constructor)==null?void 0:e.__h3_error__)===!0}const fu=()=>yd(Lt().payload,"error"),Cv=i=>{const e=Rv(i);try{Lt().callHook("app:error",e);const n=fu();n.value=n.value||e}catch{throw e}return e},Av=async(i={})=>{const e=Lt(),t=fu();e.callHook("app:error:cleared",i),i.redirect&&await e.$router.replace(i.redirect),t.value=null},Pv=i=>!!(i&&typeof i=="object"&&"__nuxt_error"in i),Rv=i=>{const e=Tv(i);return e.__nuxt_error=!0,e};function Lv(...i){const e=typeof i[i.length-1]=="string"?i.pop():void 0;typeof i[0]!="string"&&i.unshift(e);const[t,n]=i;if(!t||typeof t!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+t);if(n!==void 0&&typeof n!="function")throw new Error("[nuxt] [useState] init must be a function: "+n);const r="$s"+t,s=Lt(),o=yd(s.payload.state,r);if(o.value===void 0&&n){const a=n();if(pt(a))return s.payload.state[r]=a,a;o.value=a}return o}function Dv(i=Lt()){var e;return(e=i.ssrContext)==null?void 0:e.event}const Fa=()=>{var i;return(i=Lt())==null?void 0:i.$router},Iv=()=>Da()?Vr("_route",Lt()._route):Lt()._route,Ov=()=>{try{if(Lt()._processingMiddleware)return!0}catch{return!0}return!1},yp=(i,e)=>{i||(i="/");const t=typeof i=="string"?i:i.path||"/",n=Oa(t,!0);if(n&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");if(n&&oo(t).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!n&&Ov())return i;const r=Fa();return n?(e!=null&&e.replace?location.replace(t):location.href=t,Promise.resolve()):e!=null&&e.replace?r.replace(i):r.push(i)},Fv=[];function ol(i){typeof i=="object"&&(i=ap({pathname:i.path||"",search:ip(i.query||{}),hash:i.hash||""}));const e=oo(i.toString());return{path:e.pathname,fullPath:i,query:np(e.search),hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:i}}const Nv=ao(i=>{const e=Q0(window.location.pathname,hc().app.baseURL)+window.location.search+window.location.hash,t=[],n={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},r=(u,h)=>(n[u].push(h),()=>n[u].splice(n[u].indexOf(h),1)),s=hc().app.baseURL,o=ur(ol(e));async function a(u,h){try{const f=ol(u);for(const p of n["navigate:before"]){const g=await p(f,o);if(g===!1||g instanceof Error)return;if(g)return a(g,!0)}for(const p of n["resolve:before"])await p(f,o);Object.assign(o,f),window.history[h?"replaceState":"pushState"]({},"",so(s,f.fullPath)),i.isHydrating||await Ir(i,Av);for(const p of n["navigate:after"])await p(f,o)}catch(f){for(const p of n.error)await p(f)}}const l={currentRoute:o,isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:u=>a(u,!1),replace:u=>a(u,!0),back:()=>window.history.go(-1),go:u=>window.history.go(u),forward:()=>window.history.go(1),beforeResolve:u=>r("resolve:before",u),beforeEach:u=>r("navigate:before",u),afterEach:u=>r("navigate:after",u),onError:u=>r("error",u),resolve:ol,addRoute:(u,h)=>{t.push(h)},getRoutes:()=>t,hasRoute:u=>t.some(h=>h.name===u),removeRoute:u=>{const h=t.findIndex(f=>f.name===u);h!==-1&&t.splice(h,1)}};i.vueApp.component("RouterLink",{functional:!0,props:{to:String,custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(u,{slots:h})=>{const f=()=>a(u.to,u.replace);return()=>{var g;const p=l.resolve(u.to);return u.custom?(g=h.default)==null?void 0:g.call(h,{href:u.to,navigate:f,route:p}):Qi("a",{href:u.to,onClick:d=>(d.preventDefault(),f())},h)}}}),window.addEventListener("popstate",u=>{const h=u.target.location;l.replace(h.href.replace(h.origin,""))}),i._route=o,i._middleware=i._middleware||{global:[],named:{}};const c=Lv("_layout");return i.hooks.hookOnce("app:created",async()=>{if(l.beforeEach(async(u,h)=>{u.meta=ur(u.meta||{}),i.isHydrating&&c.value&&!fr(u.meta.layout)&&(u.meta.layout=c.value),i._processingMiddleware=!0;const f=new Set([...Fv,...i._middleware.global]);for(const p of f){const g=await Ir(i,p,[u,h]);if(g||g===!1)return g}}),l.afterEach(()=>{delete i._processingMiddleware}),await l.replace(e),!nx(o.fullPath,e)){const u=await Ir(i,Dv),h={redirectCode:u.node.res.statusCode!==200&&u.node.res.statusCode||302};await Ir(i,yp,[o.fullPath,h])}}),{provide:{route:o,router:l}}}),Uv="modulepreload",zv=function(i,e){return i.startsWith(".")?new URL(i,e).href:i},_f={},bp=function(e,t,n){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=zv(s,n),s in _f)return;_f[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Uv,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function xf(i,e={}){const t=kv(i,e),n=Lt(),r=n._payloadCache=n._payloadCache||{};return r[i]||(r[i]=Bv(t).then(s=>s||(delete r[i],null))),r[i]}function kv(i,e={}){const t=new URL(i,"http://localhost");if(t.search)throw new Error("Payload URL cannot contain search params: "+i);if(t.host!=="localhost")throw new Error("Payload URL cannot contain host: "+i);const n=e.hash||(e.fresh?Date.now():"");return so(hc().app.baseURL,t.pathname,n?`_payload.${n}.js`:"_payload.js")}async function Bv(i){const e=await bp(()=>import(i),[],import.meta.url).catch(t=>{console.warn("[nuxt] Cannot load payload ",i,t)});return(e==null?void 0:e.default)||null}function Hv(){return!!Lt().payload.prerenderedAt}const Vv=ao(i=>{Hv()&&(i.hooks.hook("link:prefetch",e=>{if(!oo(e).protocol)return xf(e)}),Fa().beforeResolve(async(e,t)=>{if(e.path===t.path)return;const n=await xf(e.path);n&&Object.assign(i.static.data,n.data)}))}),pc=globalThis.requestIdleCallback||(i=>{const e=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{i(t)},1)}),Gv=globalThis.cancelIdleCallback||(i=>{clearTimeout(i)}),Wv=i=>{const e=Lt();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{pc(i)}):pc(i)};async function Mp(i,e=Fa()){if(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(i))return;const t=e._preloadPromises=e._preloadPromises||[];if(t.length>4)return Promise.all(t).then(()=>Mp(i,e));e._routePreloaded.add(i);const n=e.resolve(i).matched.map(r=>{var s;return(s=r.components)==null?void 0:s.default}).filter(r=>typeof r=="function");for(const r of n){const s=Promise.resolve(r()).catch(()=>{}).finally(()=>t.splice(t.indexOf(s)));t.push(s)}await Promise.all(t)}const qv=(...i)=>i.find(e=>e!==void 0),$v="noopener noreferrer";function Xv(i){const e=i.componentName||"NuxtLink";return nu({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:n}){const r=Fa(),s=oc(()=>t.to||t.href||""),o=oc(()=>t.external||t.target&&t.target!=="_self"?!0:typeof s.value=="object"?!1:s.value===""||Oa(s.value,!0)),a=Bt(!1),l=Bt(null);if(t.prefetch!==!1&&t.noPrefetch!==!0&&typeof s.value=="string"&&t.target!=="_blank"&&!Yv()){const u=Lt();let h,f=null;io(()=>{const p=jv();Wv(()=>{h=pc(()=>{var g;(g=l==null?void 0:l.value)!=null&&g.tagName&&(f=p.observe(l.value,async()=>{f==null||f(),f=null,await Promise.all([u.hooks.callHook("link:prefetch",s.value).catch(()=>{}),!o.value&&Mp(s.value,r).catch(()=>{})]),a.value=!0}))})})}),ru(()=>{h&&Gv(h),f==null||f(),f=null})}return()=>{var p,g;if(!o.value)return Qi(C_("RouterLink"),{ref:d=>{l.value=d==null?void 0:d.$el},to:s.value,...a.value&&!t.custom?{class:t.prefetchedClass||i.prefetchedClass}:{},activeClass:t.activeClass||i.activeClass,exactActiveClass:t.exactActiveClass||i.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom},n.default);const c=typeof s.value=="object"?((p=r.resolve(s.value))==null?void 0:p.href)??null:s.value||null,u=t.target||null,h=t.noRel?null:qv(t.rel,i.externalRelAttribute,c?$v:"")||null,f=()=>yp(c,{replace:t.replace});return t.custom?n.default?n.default({href:c,navigate:f,route:r.resolve(c),rel:h,target:u,isExternal:o.value,isActive:!1,isExactActive:!1}):null:Qi("a",{ref:l,href:c,rel:h,target:u},(g=n.default)==null?void 0:g.call(n))}}})}const JE=Xv({componentName:"NuxtLink"});function jv(){const i=Lt();if(i._observer)return i._observer;let e=null;const t=new Map,n=(s,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const c=t.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&c&&c()}})),t.set(s,o),e.observe(s),()=>{t.delete(s),e.unobserve(s),t.size===0&&(e.disconnect(),e=null)});return i._observer={observe:n}}function Yv(){const i=navigator.connection;return!!(i&&(i.saveData||/2g/.test(i.effectiveType)))}function al(i){return i!==null&&typeof i=="object"}function mc(i,e,t=".",n){if(!al(e))return mc(i,{},t,n);const r=Object.assign({},e);for(const s in i){if(s==="__proto__"||s==="constructor")continue;const o=i[s];o!=null&&(n&&n(r,s,o,t)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:al(o)&&al(r[s])?r[s]=mc(o,r[s],(t?`${t}.`:"")+s.toString(),n):r[s]=o))}return r}function Kv(i){return(...e)=>e.reduce((t,n)=>mc(t,n,"",i),{})}const Zv=Kv((i,e,t)=>{if(typeof i[e]<"u"&&typeof t=="function")return i[e]=t(i[e]),!0}),Jv={};Zv(Jv);function Jn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Sp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},es={duration:.5,overwrite:!1,delay:0},hu,Pt,ut,xn=1e8,Ye=1/xn,gc=Math.PI*2,Qv=gc/4,ey=0,wp=Math.sqrt,ty=Math.cos,ny=Math.sin,bt=function(e){return typeof e=="string"},st=function(e){return typeof e=="function"},ai=function(e){return typeof e=="number"},du=function(e){return typeof e>"u"},Vn=function(e){return typeof e=="object"},Ht=function(e){return e!==!1},Tp=function(){return typeof window<"u"},Eo=function(e){return st(e)||bt(e)},Ep=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rt=Array.isArray,_c=/(?:-?\.?\d|\.)+/gi,Cp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Or=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ll=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ap=/[+-]=-?[.\d]+/,Pp=/[^,'"\[\]\s]+/gi,iy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tt,hn,xc,pu,on={},da={},Rp,Lp=function(e){return(da=hr(e,on))&&an},mu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},pa=function(e,t){return!t&&console.warn(e)},Dp=function(e,t){return e&&(on[e]=t)&&da&&(da[e]=t)||on},$s=function(){return 0},ry={suppressEvents:!0,isStart:!0,kill:!1},Ko={suppressEvents:!0,kill:!1},sy={suppressEvents:!0},gu={},wi=[],vc={},Ip,Zt={},cl={},vf=30,Zo=[],_u="",xu=function(e){var t=e[0],n,r;if(Vn(t)||st(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Zo.length;r--&&!Zo[r].targetTest(t););n=Zo[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new tm(e[r],n)))||e.splice(r,1);return e},sr=function(e){return e._gsap||xu(vn(e))[0]._gsap},Op=function(e,t,n){return(n=e[t])&&st(n)?e[t]():du(n)&&e.getAttribute&&e.getAttribute(t)||n},Vt=function(e,t){return(e=e.split(",")).forEach(t)||e},ot=function(e){return Math.round(e*1e5)/1e5||0},Mt=function(e){return Math.round(e*1e7)/1e7||0},Gr=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},oy=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ma=function(){var e=wi.length,t=wi.slice(0),n,r;for(vc={},wi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Fp=function(e,t,n,r){wi.length&&!Pt&&ma(),e.render(t,n,r||Pt&&t<0&&(e._initted||e._startAt)),wi.length&&!Pt&&ma()},Np=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Pp).length<2?t:bt(e)?e.trim():e},Up=function(e){return e},bn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ay=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},hr=function(e,t){for(var n in t)e[n]=t[n];return e},yf=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},ga=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},zs=function(e){var t=e.parent||tt,n=e.keyframes?ay(Rt(e.keyframes)):bn;if(Ht(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ly=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},zp=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Na=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Pi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},or=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},cy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},yc=function(e,t,n,r){return e._startAt&&(Pt?e._startAt.revert(Ko):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},uy=function i(e){return!e||e._ts&&i(e.parent)},bf=function(e){return e._repeat?ts(e._tTime,e=e.duration()+e._rDelay)*e:0},ts=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},_a=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ua=function(e){return e._end=Mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ye)||0))},za=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Mt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ua(e),n._dirty||or(n,e)),e},kp=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=_a(e.rawTime(),t),(!t._dur||lo(0,t.totalDuration(),n)-t._tTime>Ye)&&t.render(n,!0)),or(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ye}},Un=function(e,t,n,r){return t.parent&&Pi(t),t._start=Mt((ai(n)?n:n||e!==tt?fn(e,n,t):e._time)+t._delay),t._end=Mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),zp(e,t,"_first","_last",e._sort?"_start":0),bc(t)||(e._recent=t),r||kp(e,t),e._ts<0&&za(e,e._tTime),e},Bp=function(e,t){return(on.ScrollTrigger||mu("scrollTrigger",t))&&on.ScrollTrigger.create(t,e)},Hp=function(e,t,n,r,s){if(yu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ip!==Qt.frame)return wi.push(e),e._lazy=[s,r],1},fy=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},bc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hy=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&fy(e)&&!(!e._initted&&bc(e))||(e._ts<0||e._dp._ts<0)&&!bc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=lo(0,e._tDur,t),u=ts(l,a),e._yoyo&&u&1&&(o=1-o),u!==ts(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Pt||r||e._zTime===Ye||!t&&e._zTime){if(!e._initted&&Hp(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ye:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&yc(e,t,n,!0),e._onUpdate&&!n&&yn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&yn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Pi(e,1),!n&&!Pt&&(yn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dy=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ns=function(e,t,n,r){var s=e._repeat,o=Mt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Mt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&za(e,e._tTime=e._tDur*a),e.parent&&Ua(e),n||or(e.parent,e),e},Mf=function(e){return e instanceof kt?or(e):ns(e,e._dur)},py={_start:0,endTime:$s,totalDuration:$s},fn=function i(e,t,n){var r=e.labels,s=e._recent||py,o=e.duration()>=xn?s.endTime(!1):e._dur,a,l,c;return bt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Rt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ks=function(e,t,n){var r=ai(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ht(l.vars.inherit)&&l.parent;o.immediateRender=Ht(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new dt(t[0],o,t[s+1])},Ii=function(e,t){return e||e===0?t(e):t},lo=function(e,t,n){return n<e?e:n>t?t:n},At=function(e,t){return!bt(e)||!(t=iy.exec(e))?"":t[1]},my=function(e,t,n){return Ii(n,function(r){return lo(e,t,r)})},Mc=[].slice,Vp=function(e,t){return e&&Vn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vn(e[0]))&&!e.nodeType&&e!==hn},gy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return bt(r)&&!t||Vp(r,1)?(s=n).push.apply(s,vn(r)):n.push(r)})||n},vn=function(e,t,n){return ut&&!t&&ut.selector?ut.selector(e):bt(e)&&!n&&(xc||!is())?Mc.call((t||pu).querySelectorAll(e),0):Rt(e)?gy(e,n):Vp(e)?Mc.call(e,0):e?[e]:[]},Sc=function(e){return e=vn(e)[0]||pa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vn(t,n.querySelectorAll?n:n===e?pa("Invalid scope")||pu.createElement("div"):e)}},Gp=function(e){return e.sort(function(){return .5-Math.random()})},Wp=function(e){if(st(e))return e;var t=Vn(e)?e:{each:e},n=ar(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return bt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,p,g){var d=(g||t).length,m=o[d],_,v,x,b,S,C,P,y,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,xn])[1],!w){for(P=-xn;P<(P=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(m=o[d]=[],_=l?Math.min(w,d)*u-.5:r%w,v=w===xn?0:l?d*h/w-.5:r/w|0,P=0,y=xn,C=0;C<d;C++)x=C%w-_,b=v-(C/w|0),m[C]=S=c?Math.abs(c==="y"?b:x):wp(x*x+b*b),S>P&&(P=S),S<y&&(y=S);r==="random"&&Gp(m),m.max=P-y,m.min=y,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(r==="edges"?-1:1),m.b=d<0?s-d:s,m.u=At(t.amount||t.each)||0,n=n&&d<0?Jp(n):n}return d=(m[f]-m.min)/m.max||0,Mt(m.b+(n?n(d):d)*m.v)+m.u}},wc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Mt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ai(n)?0:At(n))}},qp=function(e,t){var n=Rt(e),r,s;return!n&&Vn(e)&&(r=n=e.radius||xn,e.values?(e=vn(e.values),(s=!ai(e[0]))&&(r*=r)):e=wc(e.increment)),Ii(t,n?st(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=xn,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||ai(o)?u:u+At(o)}:wc(e))},$p=function(e,t,n,r){return Ii(Rt(e)?!t:n===!0?!!(n=0):!r,function(){return Rt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},_y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},xy=function(e,t){return function(n){return e(parseFloat(n))+(t||At(n))}},vy=function(e,t,n){return jp(e,t,0,1,n)},Xp=function(e,t,n){return Ii(n,function(r){return e[~~t(r)]})},yy=function i(e,t,n){var r=t-e;return Rt(e)?Xp(e,i(0,e.length),t):Ii(n,function(s){return(r+(s-e)%r)%r+e})},by=function i(e,t,n){var r=t-e,s=r*2;return Rt(e)?Xp(e,i(0,e.length-1),t):Ii(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Xs=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Pp:_c),n+=e.substr(t,r-t)+$p(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},jp=function(e,t,n,r,s){var o=t-e,a=r-n;return Ii(s,function(l){return n+((l-e)/o*a||0)})},My=function i(e,t,n,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=bt(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Rt(e)&&!Rt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else r||(e=hr(Rt(e)?[]:{},e));if(!u){for(l in t)vu.call(a,e,l,"get",t[l]);s=function(g){return Su(g,a)||(o?e.p:e)}}}return Ii(n,s)},Sf=function(e,t,n){var r=e.labels,s=xn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yn=function(e,t,n){var r=e.vars,s=r[t],o=ut,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&wi.length&&ma(),a&&(ut=a),u=l?s.apply(c,l):s.call(c),ut=o,u},Cs=function(e){return Pi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Pt),e.progress()<1&&yn(e,"onInterrupt"),e},Fr,Sy=function(e){e=!e.name&&e.default||e;var t=e.name,n=st(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:$s,render:Su,add:vu,kill:ky,modifier:zy,rawVars:0},o={targetTest:0,get:0,getSetter:Mu,aliases:{},register:0};if(is(),e!==r){if(Zt[t])return;bn(r,bn(ga(e,s),o)),hr(r.prototype,hr(s,ga(e,o))),Zt[r.prop=t]=r,e.targetTest&&(Zo.push(r),gu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Dp(t,r),e.register&&e.register(an,r,Gt)},je=255,As={aqua:[0,je,je],lime:[0,je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,je],navy:[0,0,128],white:[je,je,je],olive:[128,128,0],yellow:[je,je,0],orange:[je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[je,0,0],pink:[je,192,203],cyan:[0,je,je],transparent:[je,je,je,0]},ul=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*je+.5|0},Yp=function(e,t,n){var r=e?ai(e)?[e>>16,e>>8&je,e&je]:0:As.black,s,o,a,l,c,u,h,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),As[e])r=As[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&je,r&je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&je,e&je]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(_c),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=ul(l+1/3,s,o),r[1]=ul(l,s,o),r[2]=ul(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Cp),n&&r.length<4&&(r[3]=1),r}else r=e.match(_c)||As.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/je,o=r[1]/je,a=r[2]/je,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Kp=function(e){var t=[],n=[],r=-1;return e.split(Ti).forEach(function(s){var o=s.match(Or)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},wf=function(e,t,n){var r="",s=(e+r).match(Ti),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Yp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Kp(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ti,"1").split(Or),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ti),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Ti=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in As)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),wy=/hsl[a]?\(/,Zp=function(e){var t=e.join(" "),n;if(Ti.lastIndex=0,Ti.test(t))return n=wy.test(t),e[1]=wf(e[1],n),e[0]=wf(e[0],n,Kp(e[1])),!0},js,Qt=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,p,g=function d(m){var _=i()-r,v=m===!0,x,b,S,C;if(_>e&&(n+=_-t),r+=_,S=r-n,x=S-o,(x>0||v)&&(C=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,o+=x+(x>=s?4:s-x),b=1),v||(l=c(d)),b)for(p=0;p<a.length;p++)a[p](S,f,C,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Rp&&(!xc&&Tp()&&(hn=xc=window,pu=hn.document||{},on.gsap=an,(hn.gsapVersions||(hn.gsapVersions=[])).push(an.version),Lp(da||hn.GreenSockGlobals||!hn.gsap&&hn||{}),u=hn.requestAnimationFrame),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},js=1,g(2))},sleep:function(){(u?hn.cancelAnimationFrame:clearTimeout)(l),js=0,c=$s},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,_,v){var x=_?function(b,S,C,P){m(b,S,C,P),h.remove(x)}:m;return h.remove(m),a[v?"unshift":"push"](x),is(),x},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},h}(),is=function(){return!js&&Qt.wake()},Ue={},Ty=/^[\d.\-M][\d.\-,\s]/,Ey=/["']/g,Cy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Ey,"").trim():+c,r=l.substr(a+1).trim();return t},Ay=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Py=function(e){var t=(e+"").split("("),n=Ue[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Cy(t[1])]:Ay(e).split(",").map(Np)):Ue._CE&&Ty.test(e)?Ue._CE("",e):n},Jp=function(e){return function(t){return 1-e(1-t)}},Qp=function i(e,t){for(var n=e._first,r;n;)n instanceof kt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},ar=function(e,t){return e&&(st(e)?e:Ue[e]||Py(e))||t},mr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Vt(e,function(a){Ue[a]=on[a]=s,Ue[o=a.toLowerCase()]=n;for(var l in s)Ue[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ue[a+"."+l]=s[l]}),s},em=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fl=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/gc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*ny((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:em(a);return s=gc/s,l.config=function(c,u){return i(e,c,u)},l},hl=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:em(n);return r.config=function(s){return i(e,s)},r};Vt("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;mr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ue.Linear.easeNone=Ue.none=Ue.Linear.easeIn;mr("Elastic",fl("in"),fl("out"),fl());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};mr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);mr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});mr("Circ",function(i){return-(wp(1-i*i)-1)});mr("Sine",function(i){return i===1?1:-ty(i*Qv)+1});mr("Back",hl("in"),hl("out"),hl());Ue.SteppedEase=Ue.steps=on.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ye;return function(a){return((r*lo(0,o,a)|0)+s)*n}}};es.ease=Ue["quad.out"];Vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return _u+=i+","+i+"Params,"});var tm=function(e,t){this.id=ey++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Op,this.set=t?t.getSetter:Mu},rs=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ns(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),js||Qt.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ns(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(is(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(za(this,n),!s._dp||s.parent||kp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Un(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ye||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fp(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bf(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bf(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ts(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ye?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?_a(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ye?0:this._rts,this.totalTime(lo(-this._delay,this._tDur,r),!0),Ua(this),cy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(is(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ye&&(this._tTime-=Ye)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Un(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ht(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_a(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=sy);var r=Pt;return Pt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Mf(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(fn(this,n),Ht(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Ht(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ye:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ye,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ye)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=st(n)?n:Up,a=function(){var c=r.then;r.then=null,st(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Cs(this)},i}();bn(rs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ye,_prom:0,_ps:!1,_rts:1});var kt=function(i){Sp(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ht(n.sortChildren),tt&&Un(n.parent||tt,Jn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Bp(Jn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return ks(0,arguments,this),this},t.from=function(r,s,o){return ks(1,arguments,this),this},t.fromTo=function(r,s,o,a){return ks(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,zs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new dt(r,s,fn(this,o),1),this},t.call=function(r,s,o){return Un(this,dt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new dt(r,o,fn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,zs(o).immediateRender=Ht(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,zs(a).immediateRender=Ht(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Mt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,p,g,d,m,_,v,x,b,S,C,P;if(this!==tt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,b=this._start,x=this._ts,_=!x,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Mt(u%m),u===l?(d=this._repeat,f=c):(d=~~(u/m),d&&d===u/m&&(f=c,d--),f>c&&(f=c)),S=ts(this._tTime,m),!a&&this._tTime&&S!==d&&(S=d),C&&d&1&&(f=c-f,P=1),d!==S&&!this._lock){var y=C&&S&1,w=y===(C&&d&1);if(d<S&&(y=!y),a=y?0:c,this._lock=1,this.render(a||(P?0:Mt(d*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&yn(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Qp(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=dy(this,Mt(a),Mt(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&(yn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=-Ye);break}}p=g}else{p=this._last;for(var D=r<0?r:f;p;){if(g=p._prev,(p._act||D<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(D-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(D-p._start)*p._ts,s,o||Pt&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=D?-Ye:Ye);break}}p=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Ye)._zTime=f>=a?1:-1,this._ts))return this._start=b,Ua(this),this.render(r,s,o);this._onUpdate&&!s&&yn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Pi(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(yn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ai(s)||(s=fn(this,s,r)),!(r instanceof rs)){if(Rt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(bt(r))return this.addLabel(r,s);if(st(r))r=dt.delayedCall(0,r);else return this}return this!==r?Un(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-xn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof dt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return bt(r)?this.removeLabel(r):st(r)?this.killTweensOf(r):(Na(this,r),r===this._recent&&(this._recent=this._last),or(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mt(Qt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=fn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=dt.delayedCall(0,s||$s,o);return a.data="isPause",this._hasPause=1,Un(this,a,fn(this,r))},t.removePause=function(r){var s=this._first;for(r=fn(this,r);s;)s._start===r&&s.data==="isPause"&&Pi(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)xi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=vn(r),l=this._first,c=ai(s),u;l;)l instanceof dt?oy(l._targets,a)&&(c?(!xi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=fn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=dt.to(o,bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ye,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ns(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,bn({startAt:{time:fn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Sf(this,fn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Sf(this,fn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ye)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return or(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),or(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=xn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Un(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ns(o,o===tt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(tt._ts&&(Fp(tt,_a(r,tt)),Ip=Qt.frame),Qt.frame>=vf){vf+=nn.autoSleep||120;var s=tt._first;if((!s||!s._ts)&&nn.autoSleep&&Qt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qt.sleep()}}},e}(rs);bn(kt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ry=function(e,t,n,r,s,o,a){var l=new Gt(this._pt,e,t,0,1,am,null,s),c=0,u=0,h,f,p,g,d,m,_,v;for(l.b=n,l.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=Xs(r)),o&&(v=[n,r],o(v,e,t),n=v[0],r=v[1]),f=n.match(ll)||[];h=ll.exec(r);)g=h[0],d=r.substring(c,h.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?Gr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=ll.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Ap.test(r)||_)&&(l.e=0),this._pt=l,l},vu=function(e,t,n,r,s,o,a,l,c,u){st(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:st(h)?c?e[t.indexOf("set")||!st(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=st(h)?c?Fy:sm:bu,g;if(bt(r)&&(~r.indexOf("random(")&&(r=Xs(r)),r.charAt(1)==="="&&(g=Gr(f,r)+(At(f)||0),(g||g===0)&&(r=g))),!u||f!==r||Tc)return!isNaN(f*r)&&r!==""?(g=new Gt(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?Uy:om,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&mu(t,r),Ry.call(this,e,t,f,r,p,l||nn.stringFilter,c))},Ly=function(e,t,n,r,s){if(st(e)&&(e=Bs(e,s,t,n,r)),!Vn(e)||e.style&&e.nodeType||Rt(e)||Ep(e))return bt(e)?Bs(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Bs(e[a],s,t,n,r);return o},nm=function(e,t,n,r,s,o){var a,l,c,u;if(Zt[e]&&(a=new Zt[e]).init(s,a.rawVars?t[e]:Ly(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Gt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Fr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},xi,Tc,yu=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,h=r.callbackScope,f=r.runBackwards,p=r.yoyoEase,g=r.keyframes,d=r.autoRevert,m=e._dur,_=e._startAt,v=e._targets,x=e.parent,b=x&&x.data==="nested"?x.vars.targets:v,S=e._overwrite==="auto"&&!hu,C=e.timeline,P,y,w,D,U,X,O,L,H,W,j,k,se;if(C&&(!g||!s)&&(s="none"),e._ease=ar(s,es.ease),e._yEase=p?Jp(ar(p===!0?s:p,es.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!C&&!!r.runBackwards,!C||g&&!r.stagger){if(L=v[0]?sr(v[0]).harness:0,k=L&&r[L.prop],P=ga(r,gu),_&&(_._zTime<0&&_.progress(1),t<0&&f&&a&&!d?_.render(-1,!0):_.revert(f&&m?Ko:ry),_._lazy=0),o){if(Pi(e._startAt=dt.set(v,bn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&Ht(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pt||!a&&!d)&&e._startAt.revert(Ko),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!_){if(t&&(a=!1),w=bn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ht(l),immediateRender:a,stagger:0,parent:x},P),k&&(w[L.prop]=k),Pi(e._startAt=dt.set(v,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pt?e._startAt.revert(Ko):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Ye,Ye);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Ht(l)||l&&!m,y=0;y<v.length;y++){if(U=v[y],O=U._gsap||xu(v)[y]._gsap,e._ptLookup[y]=W={},vc[O.id]&&wi.length&&ma(),j=b===v?y:b.indexOf(U),L&&(H=new L).init(U,k||P,e,j,b)!==!1&&(e._pt=D=new Gt(e._pt,U,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(ie){W[ie]=D}),H.priority&&(X=1)),!L||k)for(w in P)Zt[w]&&(H=nm(w,P,e,j,U,b))?H.priority&&(X=1):W[w]=D=vu.call(e,U,w,"get",P[w],j,b,0,r.stringFilter);e._op&&e._op[y]&&e.kill(U,e._op[y]),S&&e._pt&&(xi=e,tt.killTweensOf(U,W,e.globalTime(t)),se=!e.parent,xi=0),e._pt&&l&&(vc[O.id]=1)}X&&lm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!se,g&&t<=0&&C.render(xn,!0,!0)},Dy=function(e,t,n,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Tc=1,e.vars[t]="+=0",yu(e,a),Tc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=ot(n)+At(u.e)),u.b&&(u.b=c.s+At(u.b))},Iy=function(e,t){var n=e[0]?sr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=hr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Oy=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Rt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Bs=function(e,t,n,r,s){return st(e)?e.call(t,n,r,s):bt(e)&&~e.indexOf("random(")?Xs(e):e},im=_u+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",rm={};Vt(im+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return rm[i]=1});var dt=function(i){Sp(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:zs(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,v=r.parent||tt,x=(Rt(n)||Ep(n)?ai(n[0]):"length"in r)?[n]:vn(n),b,S,C,P,y,w,D,U;if(a._targets=x.length?xu(x):pa("GSAP target "+n+" not found. https://greensock.com",!nn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||Eo(c)||Eo(u)){if(r=a.vars,b=a.timeline=new kt({data:"nested",defaults:d||{},targets:v&&v.data==="nested"?v.vars.targets:x}),b.kill(),b.parent=b._dp=Jn(a),b._start=0,f||Eo(c)||Eo(u)){if(P=x.length,D=f&&Wp(f),Vn(f))for(y in f)~im.indexOf(y)&&(U||(U={}),U[y]=f[y]);for(S=0;S<P;S++)C=ga(r,rm),C.stagger=0,_&&(C.yoyoEase=_),U&&hr(C,U),w=x[S],C.duration=+Bs(c,Jn(a),S,w,x),C.delay=(+Bs(u,Jn(a),S,w,x)||0)-a._delay,!f&&P===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),b.to(w,C,D?D(S,w,x):0),b._ease=Ue.none;b.duration()?c=u=0:a.timeline=0}else if(g){zs(bn(b.vars.defaults,{ease:"none"})),b._ease=ar(g.ease||r.ease||"none");var X=0,O,L,H;if(Rt(g))g.forEach(function(W){return b.to(x,W,">")}),b.duration();else{C={};for(y in g)y==="ease"||y==="easeEach"||Oy(y,g[y],C,g.easeEach);for(y in C)for(O=C[y].sort(function(W,j){return W.t-j.t}),X=0,S=0;S<O.length;S++)L=O[S],H={ease:L.e,duration:(L.t-(S?O[S-1].t:0))/100*c},H[y]=L.v,b.to(x,H,X),X+=H.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return p===!0&&!hu&&(xi=Jn(a),tt.killTweensOf(x),xi=0),Un(v,Jn(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===Mt(v._time)&&Ht(h)&&uy(Jn(a))&&v.data!=="nested")&&(a._tTime=-Ye,a.render(Math.max(0,-u)||0)),m&&Bp(Jn(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Ye&&!u?l:r<Ye?0:r,f,p,g,d,m,_,v,x,b;if(!c)hy(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+r,s,o);if(f=Mt(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(b=this._yEase,f=c-f),m=ts(this._tTime,d),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&Qp(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Mt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Hp(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(b||this._ease)(f/c),this._from&&(this.ratio=v=1-v),f&&!a&&!s&&(yn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:!f&&_?-Ye:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&yc(this,r,s,o),yn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&yn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&yc(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Pi(this,1),!s&&!(u&&!a)&&(h||a||_)&&(yn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){js||Qt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||yu(this,l),c=this._ease(l/this._dur),Dy(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(za(this,0),this.parent||zp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Cs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,xi&&xi.vars.overwrite!==!0)._first||Cs(this),this.parent&&o!==this.timeline.totalDuration()&&ns(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?vn(r):a,c=this._ptLookup,u=this._pt,h,f,p,g,d,m,_;if((!s||s==="all")&&ly(a,l))return s==="all"&&(this._pt=0),Cs(this);for(h=this._op=this._op||[],s!=="all"&&(bt(s)&&(d={},Vt(s,function(v){return d[v]=1}),s=d),s=Iy(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],s==="all"?(h[_]=s,g=f,p={}):(p=h[_]=h[_]||{},g=s);for(d in g)m=f&&f[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Na(this,m,"_pt"),delete f[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&Cs(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ks(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return ks(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return tt.killTweensOf(r,s,o)},e}(rs);bn(dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vt("staggerTo,staggerFrom,staggerFromTo",function(i){dt[i]=function(){var e=new kt,t=Mc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var bu=function(e,t,n){return e[t]=n},sm=function(e,t,n){return e[t](n)},Fy=function(e,t,n,r){return e[t](r.fp,n)},Ny=function(e,t,n){return e.setAttribute(t,n)},Mu=function(e,t){return st(e[t])?sm:du(e[t])&&e.setAttribute?Ny:bu},om=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Uy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},am=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Su=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},zy=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},ky=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Na(this,t,"_pt"):t.dep||(n=1),t=r;return!n},By=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},lm=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Gt=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||om,this.d=l||this,this.set=c||bu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=By,this.m=n,this.mt=s,this.tween=r},i}();Vt(_u+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return gu[i]=1});on.TweenMax=on.TweenLite=dt;on.TimelineLite=on.TimelineMax=kt;tt=new kt({sortChildren:!1,defaults:es,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});nn.stringFilter=Zp;var ss=[],Jo={},Hy=[],Tf=0,dl=function(e){return(Jo[e]||Hy).map(function(t){return t()})},Ec=function(){var e=Date.now(),t=[];e-Tf>2&&(dl("matchMediaInit"),ss.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=hn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),dl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Tf=e,dl("matchMedia"))},cm=function(){function i(t,n){this.selector=n&&Sc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){st(n)&&(s=r,r=n,n=st);var o=this,a=function(){var c=ut,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Sc(s)),ut=o,h=r.apply(o,arguments),st(h)&&o._r.push(h),ut=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===st?a(o):n?o[n]=a:a},e.ignore=function(n){var r=ut;ut=null,n(this),ut=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof dt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof rs)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var a=ss.indexOf(this);~a&&ss.splice(a,1)}},e.revert=function(n){this.kill(n||{})},i}(),Vy=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){Vn(n)||(n={matches:n});var o=new cm(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=hn.matchMedia(n[c]),l&&(ss.indexOf(o)<0&&ss.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ec):l.addEventListener("change",Ec)));return u&&r(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),xa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Sy(r)})},timeline:function(e){return new kt(e)},getTweensOf:function(e,t){return tt.getTweensOf(e,t)},getProperty:function(e,t,n,r){bt(e)&&(e=vn(e)[0]);var s=sr(e||{}).get,o=n?Up:Np;return n==="native"&&(n=""),e&&(t?o((Zt[t]&&Zt[t].get||s)(e,t,n,r)):function(a,l,c){return o((Zt[a]&&Zt[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=vn(e),e.length>1){var r=e.map(function(u){return an.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=Zt[t],a=sr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Fr._pt=0,h.init(e,n?u+n:u,Fr,0,[e]),h.render(1,h),Fr._pt&&Su(1,Fr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=an.to(e,hr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ar(e.ease,es.ease)),yf(es,e||{})},config:function(e){return yf(nn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Zt[a]&&!on[a]&&pa(t+" effect requires "+a+" plugin.")}),cl[t]=function(a,l,c){return n(vn(a),bn(l||{},s),c)},o&&(kt.prototype[t]=function(a,l,c){return this.add(cl[t](a,Vn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ue[e]=ar(t)},parseEase:function(e,t){return arguments.length?ar(e,t):Ue},getById:function(e){return tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new kt(e),r,s;for(n.smoothChildTiming=Ht(e.smoothChildTiming),tt.remove(n),n._dp=0,n._time=n._tTime=tt._time,r=tt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof dt&&r.vars.onComplete===r._targets[0]))&&Un(n,r,r._start-r._delay),r=s;return Un(tt,n,0),n},context:function(e,t){return e?new cm(e,t):ut},matchMedia:function(e){return new Vy(e)},matchMediaRefresh:function(){return ss.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Ec()},addEventListener:function(e,t){var n=Jo[e]||(Jo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Jo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:yy,wrapYoyo:by,distribute:Wp,random:$p,snap:qp,normalize:vy,getUnit:At,clamp:my,splitColor:Yp,toArray:vn,selector:Sc,mapRange:jp,pipe:_y,unitize:xy,interpolate:My,shuffle:Gp},install:Lp,effects:cl,ticker:Qt,updateRoot:kt.updateRoot,plugins:Zt,globalTimeline:tt,core:{PropTween:Gt,globals:Dp,Tween:dt,Timeline:kt,Animation:rs,getCache:sr,_removeLinkedListItem:Na,reverting:function(){return Pt},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return hu=e}}};Vt("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return xa[i]=dt[i]});Qt.add(kt.updateRoot);Fr=xa.to({},{duration:0});var Gy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Wy=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Gy(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},pl=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(bt(s)&&(l={},Vt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Wy(a,s)}}}},an=xa.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Pt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},pl("roundProps",wc),pl("modifiers"),pl("snap",qp))||xa;dt.version=kt.version=an.version="3.11.4";Rp=1;Tp()&&is();Ue.Power0;Ue.Power1;Ue.Power2;Ue.Power3;Ue.Power4;Ue.Linear;Ue.Quad;Ue.Cubic;Ue.Quart;Ue.Quint;Ue.Strong;Ue.Elastic;Ue.Back;Ue.SteppedEase;Ue.Bounce;Ue.Sine;Ue.Expo;Ue.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ef,vi,Wr,wu,er,Cf,Tu,qy=function(){return typeof window<"u"},li={},$i=180/Math.PI,qr=Math.PI/180,_r=Math.atan2,Af=1e8,Eu=/([A-Z])/g,$y=/(left|right|width|margin|padding|x)/i,Xy=/[\s,\(]\S/,ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Cc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ky=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},um=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},fm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Zy=function(e,t,n){return e.style[t]=n},Jy=function(e,t,n){return e.style.setProperty(t,n)},Qy=function(e,t,n){return e._gsap[t]=n},eb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},tb=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},nb=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},nt="transform",Dn=nt+"Origin",ib=function(e,t){var n=this,r=this.target,s=r.style;if(e in li){if(this.tfm=this.tfm||{},e!=="transform"&&(e=ni[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Qn(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:Qn(r,e)),this.props.indexOf(nt)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Dn,t,"")),e=nt}(s||t)&&this.props.push(e,t,s[e])},hm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rb=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(Eu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Tu(),s&&!s.isStart&&!n[nt]&&(hm(n),r.uncache=1)}},dm=function(e,t){var n={target:e,props:[],revert:rb,save:ib};return t&&t.split(",").forEach(function(r){return n.save(r)}),n},pm,Ac=function(e,t){var n=vi.createElementNS?vi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vi.createElement(e);return n.style?n:vi.createElement(e)},kn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Eu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,os(t)||t,1)||""},Pf="O,Moz,ms,Ms,Webkit".split(","),os=function(e,t,n){var r=t||er,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Pf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Pf[o]:"")+e},Pc=function(){qy()&&window.document&&(Ef=window,vi=Ef.document,Wr=vi.documentElement,er=Ac("div")||{style:{}},Ac("div"),nt=os(nt),Dn=nt+"Origin",er.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pm=!!os("perspective"),Tu=an.core.reverting,wu=1)},ml=function i(e){var t=Ac("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Wr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Wr.removeChild(t),this.style.cssText=s,o},Rf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},mm=function(e){var t;try{t=e.getBBox()}catch{t=ml.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ml||(t=ml.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Rf(e,["x","cx","x1"])||0,y:+Rf(e,["y","cy","y1"])||0,width:0,height:0}:t},gm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&mm(e))},Ys=function(e,t){if(t){var n=e.style;t in li&&t!==Dn&&(t=nt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Eu,"-$1").toLowerCase())):n.removeAttribute(t)}},yi=function(e,t,n,r,s,o){var a=new Gt(e._pt,t,n,0,1,o?fm:um);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Lf={deg:1,rad:1,turn:1},sb={grid:1,flex:1},Ri=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=er.style,l=$y.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,d,m,_;return r===o||!s||Lf[r]||Lf[o]?s:(o!=="px"&&!f&&(s=i(e,t,n,"px")),_=e.getCTM&&gm(e),(p||o==="%")&&(li[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],ot(p?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(f?o:r),d=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===vi||!d.appendChild)&&(d=vi.body),m=d._gsap,m&&p&&m.width&&l&&m.time===Qt.time&&!m.uncache?ot(s/m.width*h):((p||o==="%")&&!sb[kn(d,"display")]&&(a.position=kn(e,"position")),d===e&&(a.position="static"),d.appendChild(er),g=er[u],d.removeChild(er),a.position="absolute",l&&p&&(m=sr(d),m.time=Qt.time,m.width=d[u]),ot(f?g*s/h:g&&s?h/g*s:0))))},Qn=function(e,t,n,r){var s;return wu||Pc(),t in ni&&t!=="transform"&&(t=ni[t],~t.indexOf(",")&&(t=t.split(",")[0])),li[t]&&t!=="transform"?(s=Zs(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ya(kn(e,Dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=va[t]&&va[t](e,t,n)||kn(e,t)||Op(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ri(e,t,s,n)+n:s},ob=function(e,t,n,r){if(!n||n==="none"){var s=os(t,e,1),o=s&&kn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=kn(e,"borderTopColor"))}var a=new Gt(this._pt,e.style,t,0,1,am),l=0,c=0,u,h,f,p,g,d,m,_,v,x,b,S;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=kn(e,t)||r,e.style[t]=n),u=[n,r],Zp(u),n=u[0],r=u[1],f=n.match(Or)||[],S=r.match(Or)||[],S.length){for(;h=Or.exec(r);)m=h[0],v=r.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(d=f[c++]||"")&&(p=parseFloat(d)||0,b=d.substr((p+"").length),m.charAt(1)==="="&&(m=Gr(p,m)+b),_=parseFloat(m),x=m.substr((_+"").length),l=Or.lastIndex-x.length,x||(x=x||nn.units[t]||b,l===r.length&&(r+=x,a.e+=x)),b!==x&&(p=Ri(e,t,d,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?fm:um;return Ap.test(r)&&(a.e=0),this._pt=a,a},Df={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ab=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Df[n]||n,t[1]=Df[r]||r,t.join(" ")},lb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],li[a]&&(l=1,a=a==="transformOrigin"?Dn:nt),Ys(n,a);l&&(Ys(n,nt),o&&(o.svg&&n.removeAttribute("transform"),Zs(n,1),o.uncache=1,hm(r)))}},va={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Gt(e._pt,t,n,0,0,lb);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ks=[1,0,0,1,0,0],_m={},xm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},If=function(e){var t=kn(e,nt);return xm(t)?Ks:t.substr(7).match(Cp).map(ot)},Cu=function(e,t){var n=e._gsap||sr(e),r=e.style,s=If(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ks:s):(s===Ks&&!e.offsetParent&&e!==Wr&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Wr.appendChild(e)),s=If(e),l?r.display=l:Ys(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Wr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Rc=function(e,t,n,r,s,o){var a=e._gsap,l=s||Cu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],v=l[5],x=t.split(" "),b=parseFloat(x[0])||0,S=parseFloat(x[1])||0,C,P,y,w;n?l!==Ks&&(P=p*m-g*d)&&(y=b*(m/P)+S*(-d/P)+(d*v-m*_)/P,w=b*(-g/P)+S*(p/P)-(p*v-g*_)/P,b=y,S=w):(C=mm(e),b=C.x+(~x[0].indexOf("%")?b/100*C.width:b),S=C.y+(~(x[1]||x[0]).indexOf("%")?S/100*C.height:S)),r||r!==!1&&a.smooth?(_=b-c,v=S-u,a.xOffset=h+(_*p+v*d)-_,a.yOffset=f+(_*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=S,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Dn]="0px 0px",o&&(yi(o,a,"xOrigin",c,b),yi(o,a,"yOrigin",u,S),yi(o,a,"xOffset",h,a.xOffset),yi(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+S)},Zs=function(e,t){var n=e._gsap||new tm(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=kn(e,Dn)||"0",u,h,f,p,g,d,m,_,v,x,b,S,C,P,y,w,D,U,X,O,L,H,W,j,k,se,ie,ye,z,oe,de,pe;return u=h=f=d=m=_=v=x=b=0,p=g=1,n.svg=!!(e.getCTM&&gm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[nt]!=="none"?l[nt]:"")),r.scale=r.rotate=r.translate="none"),P=Cu(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Rc(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,P)),S=n.xOrigin||0,C=n.yOrigin||0,P!==Ks&&(U=P[0],X=P[1],O=P[2],L=P[3],u=H=P[4],h=W=P[5],P.length===6?(p=Math.sqrt(U*U+X*X),g=Math.sqrt(L*L+O*O),d=U||X?_r(X,U)*$i:0,v=O||L?_r(O,L)*$i+d:0,v&&(g*=Math.abs(Math.cos(v*qr))),n.svg&&(u-=S-(S*U+C*O),h-=C-(S*X+C*L))):(pe=P[6],oe=P[7],ie=P[8],ye=P[9],z=P[10],de=P[11],u=P[12],h=P[13],f=P[14],y=_r(pe,z),m=y*$i,y&&(w=Math.cos(-y),D=Math.sin(-y),j=H*w+ie*D,k=W*w+ye*D,se=pe*w+z*D,ie=H*-D+ie*w,ye=W*-D+ye*w,z=pe*-D+z*w,de=oe*-D+de*w,H=j,W=k,pe=se),y=_r(-O,z),_=y*$i,y&&(w=Math.cos(-y),D=Math.sin(-y),j=U*w-ie*D,k=X*w-ye*D,se=O*w-z*D,de=L*D+de*w,U=j,X=k,O=se),y=_r(X,U),d=y*$i,y&&(w=Math.cos(y),D=Math.sin(y),j=U*w+X*D,k=H*w+W*D,X=X*w-U*D,W=W*w-H*D,U=j,H=k),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=ot(Math.sqrt(U*U+X*X+O*O)),g=ot(Math.sqrt(W*W+pe*pe)),y=_r(H,W),v=Math.abs(y)>2e-4?y*$i:0,b=de?1/(de<0?-de:de):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!xm(kn(e,nt)),j&&e.setAttribute("transform",j))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ot(p),n.scaleY=ot(g),n.rotation=ot(d)+a,n.rotationX=ot(m)+a,n.rotationY=ot(_)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[Dn]=ya(c)),n.xOffset=n.yOffset=0,n.force3D=nn.force3D,n.renderTransform=n.svg?ub:pm?vm:cb,n.uncache=0,n},ya=function(e){return(e=e.split(" "))[0]+" "+e[1]},gl=function(e,t,n){var r=At(t);return ot(parseFloat(t)+parseFloat(Ri(e,"x",n+"px",r)))+r},cb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,vm(e,t)},Bi="0deg",xs="0px",Hi=") ",vm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,v=n.target,x=n.zOrigin,b="",S=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==Bi||u!==Bi)){var C=parseFloat(u)*qr,P=Math.sin(C),y=Math.cos(C),w;C=parseFloat(h)*qr,w=Math.cos(C),o=gl(v,o,P*w*-x),a=gl(v,a,-Math.sin(C)*-x),l=gl(v,l,y*w*-x+x)}m!==xs&&(b+="perspective("+m+Hi),(r||s)&&(b+="translate("+r+"%, "+s+"%) "),(S||o!==xs||a!==xs||l!==xs)&&(b+=l!==xs||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Hi),c!==Bi&&(b+="rotate("+c+Hi),u!==Bi&&(b+="rotateY("+u+Hi),h!==Bi&&(b+="rotateX("+h+Hi),(f!==Bi||p!==Bi)&&(b+="skew("+f+", "+p+Hi),(g!==1||d!==1)&&(b+="scale("+g+", "+d+Hi),v.style[nt]=b||"translate(0, 0)"},ub=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,v=n.forceCSS,x=parseFloat(o),b=parseFloat(a),S,C,P,y,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=qr,c*=qr,S=Math.cos(l)*h,C=Math.sin(l)*h,P=Math.sin(l-c)*-f,y=Math.cos(l-c)*f,c&&(u*=qr,w=Math.tan(c-u),w=Math.sqrt(1+w*w),P*=w,y*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),S*=w,C*=w)),S=ot(S),C=ot(C),P=ot(P),y=ot(y)):(S=h,y=f,C=P=0),(x&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(x=Ri(p,"x",o,"px"),b=Ri(p,"y",a,"px")),(g||d||m||_)&&(x=ot(x+g-(g*S+d*P)+m),b=ot(b+d-(g*C+d*y)+_)),(r||s)&&(w=p.getBBox(),x=ot(x+r/100*w.width),b=ot(b+s/100*w.height)),w="matrix("+S+","+C+","+P+","+y+","+x+","+b+")",p.setAttribute("transform",w),v&&(p.style[nt]=w)},fb=function(e,t,n,r,s){var o=360,a=bt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?$i:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Af)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Af)%o-~~(c/o)*o)),e._pt=f=new Gt(e._pt,t,n,r,c,jy),f.e=u,f.u="deg",e._props.push(n),f},Of=function(e,t){for(var n in t)e[n]=t[n];return e},hb=function(e,t,n){var r=Of({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,p,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[nt]=t,a=Zs(n,1),Ys(n,nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[nt],o[nt]=t,a=Zs(n,1),o[nt]=c);for(l in li)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=At(c),g=At(u),h=p!==g?Ri(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Gt(e._pt,a,l,h,f-h,Cc),e._pt.u=g||0,e._props.push(l));Of(a,r)};Vt("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});va[e>1?"border"+i:i]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return Qn(a,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(g,d){return p[g]=f[d]=f[d]||f[(d-1)/2|0]}),a.init(l,p,h)}});var ym={name:"css",register:Pc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,p,g,d,m,_,v,x,b,S,C,P,y;wu||Pc(),this.styles=this.styles||dm(e),y=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Zt[d]&&nm(d,t,n,r,e,s)))){if(p=typeof u,g=va[d],p==="function"&&(u=u.call(n,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Xs(u)),g)g(this,e,d,u,n)&&(P=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Ti.lastIndex=0,Ti.test(c)||(m=At(c),_=At(u)),_?m!==_&&(c=Ri(e,d,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,d),o.push(d),y.push(d,0,a[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,r,e,s):l[d],bt(c)&&~c.indexOf("random(")&&(c=Xs(c)),At(c+"")||(c+=nn.units[d]||At(Qn(e,d))||""),(c+"").charAt(1)==="="&&(c=Qn(e,d))):c=Qn(e,d),f=parseFloat(c),v=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),d in ni&&(d==="autoAlpha"&&(f===1&&Qn(e,"visibility")==="hidden"&&h&&(f=0),y.push("visibility",0,a.visibility),yi(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=ni[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in li,x){if(this.styles.save(d),b||(S=e._gsap,S.renderTransform&&!t.parseTransform||Zs(e,t.parseTransform),C=t.smoothOrigin!==!1&&S.smooth,b=this._pt=new Gt(this._pt,a,nt,0,1,S.renderTransform,S,0,-1),b.dep=1),d==="scale")this._pt=new Gt(this._pt,S,"scaleY",S.scaleY,(v?Gr(S.scaleY,v+h):h)-S.scaleY||0,Cc),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){y.push(Dn,0,a[Dn]),u=ab(u),S.svg?Rc(e,u,0,C,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==S.zOrigin&&yi(this,S,"zOrigin",S.zOrigin,_),yi(this,a,d,ya(c),ya(u)));continue}else if(d==="svgOrigin"){Rc(e,u,1,C,0,this);continue}else if(d in _m){fb(this,S,d,f,v?Gr(f,v+u):u);continue}else if(d==="smoothOrigin"){yi(this,S,"smooth",S.smooth,u);continue}else if(d==="force3D"){S[d]=u;continue}else if(d==="transform"){hb(this,u,e);continue}}else d in a||(d=os(d)||d);if(x||(h||h===0)&&(f||f===0)&&!Xy.test(u)&&d in a)m=(c+"").substr((f+"").length),h||(h=0),_=At(u)||(d in nn.units?nn.units[d]:m),m!==_&&(f=Ri(e,d,c,_)),this._pt=new Gt(this._pt,x?S:a,d,f,(v?Gr(f,v+h):h)-f,!x&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?Ky:Cc),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Yy);else if(d in a)ob.call(this,e,d,c,v?v+u:u);else if(d in e)this.add(e,d,c||e[d],v?v+u:u,r,s);else if(d!=="parseTransform"){mu(d,u);continue}x||(d in a?y.push(d,0,a[d]):y.push(d,1,c||e[d])),o.push(d)}}P&&lm(this)},render:function(e,t){if(t.tween._time||!Tu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Qn,aliases:ni,getSetter:function(e,t,n){var r=ni[t];return r&&r.indexOf(",")<0&&(t=r),t in li&&t!==Dn&&(e._gsap.x||Qn(e,"x"))?n&&Cf===n?t==="scale"?eb:Qy:(Cf=n||{})&&(t==="scale"?tb:nb):e.style&&!du(e.style[t])?Zy:~t.indexOf("-")?Jy:Mu(e,t)},core:{_removeProperty:Ys,_getMatrix:Cu}};an.utils.checkPrefix=os;an.core.getStyleSaver=dm;(function(i,e,t,n){var r=Vt(i+","+e+","+t,function(s){li[s]=1});Vt(e,function(s){nn.units[s]="deg",_m[s]=1}),ni[r[13]]=i+","+e,Vt(n,function(s){var o=s.split(":");ni[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){nn.units[i]="px"});an.registerPlugin(ym);var Ps=an.registerPlugin(ym)||an;Ps.core.Tween;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Au="149",db=0,Ff=1,pb=2,bm=1,mb=2,Rs=3,Li=0,rn=1,bi=2,Ei=0,$r=1,Nf=2,Uf=3,zf=4,gb=5,Dr=100,_b=101,xb=102,kf=103,Bf=104,vb=200,yb=201,bb=202,Mb=203,Mm=204,Sm=205,Sb=206,wb=207,Tb=208,Eb=209,Cb=210,Ab=0,Pb=1,Rb=2,Lc=3,Lb=4,Db=5,Ib=6,Ob=7,wm=0,Fb=1,Nb=2,ri=0,Ub=1,zb=2,kb=3,Bb=4,Hb=5,Tm=300,as=301,ls=302,Dc=303,Ic=304,ka=306,Oc=1e3,An=1001,Fc=1002,Nt=1003,Hf=1004,_l=1005,mn=1006,Vb=1007,Js=1008,dr=1009,Gb=1010,Wb=1011,Em=1012,qb=1013,tr=1014,nr=1015,Qs=1016,$b=1017,Xb=1018,Xr=1020,jb=1021,Pn=1023,Yb=1024,Kb=1025,lr=1026,cs=1027,Zb=1028,Jb=1029,Qb=1030,eM=1031,tM=1033,xl=33776,vl=33777,yl=33778,bl=33779,Vf=35840,Gf=35841,Wf=35842,qf=35843,nM=36196,$f=37492,Xf=37496,jf=37808,Yf=37809,Kf=37810,Zf=37811,Jf=37812,Qf=37813,eh=37814,th=37815,nh=37816,ih=37817,rh=37818,sh=37819,oh=37820,ah=37821,Ml=36492,iM=36283,lh=36284,ch=36285,uh=36286,pr=3e3,Ze=3001,rM=3200,sM=3201,oM=0,aM=1,On="srgb",eo="srgb-linear",Sl=7680,lM=519,fh=35044,hh="300 es",Nc=1035;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wl=Math.PI/180,dh=180/Math.PI;function co(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Jt(i,e,t){return Math.max(e,Math.min(t,i))}function cM(i,e){return(i%e+e)%e}function Tl(i,e,t){return(1-t)*i+t*e}function ph(i){return(i&i-1)===0&&i!==0}function Uc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Co(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tn{constructor(){tn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],d=r[0],m=r[3],_=r[6],v=r[1],x=r[4],b=r[7],S=r[2],C=r[5],P=r[8];return s[0]=o*d+a*v+l*S,s[3]=o*m+a*x+l*C,s[6]=o*_+a*b+l*P,s[1]=c*d+u*v+h*S,s[4]=c*m+u*x+h*C,s[7]=c*_+u*b+h*P,s[2]=f*d+p*v+g*S,s[5]=f*m+p*x+g*C,s[8]=f*_+p*b+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(r*c-u*n)*d,e[2]=(a*n-r*o)*d,e[3]=f*d,e[4]=(u*t-r*l)*d,e[5]=(r*s-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(El.makeScale(e,t)),this}rotate(e){return this.premultiply(El.makeRotation(-e)),this}translate(e,t){return this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const El=new tn;function Cm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Cl={[On]:{[eo]:cr},[eo]:{[On]:Qo}},It={legacyMode:!0,get workingColorSpace(){return eo},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Cl[e]&&Cl[e][t]!==void 0){const n=Cl[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},Mn={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Po(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=It.workingColorSpace){if(e=cM(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Al(o,s,e+1/3),this.g=Al(o,s,e),this.b=Al(o,s,e-1/3)}return It.toWorkingColorSpace(this,r),this}setStyle(e,t=On){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,It.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,It.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,It.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,It.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=On){const n=Am[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return It.fromWorkingColorSpace(Po(this,ht),e),Jt(ht.r*255,0,255)<<16^Jt(ht.g*255,0,255)<<8^Jt(ht.b*255,0,255)<<0}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(Po(this,ht),t);const n=ht.r,r=ht.g,s=ht.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(Po(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=On){return It.fromWorkingColorSpace(Po(this,ht),e),e!==On?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Mn),Mn.h+=e,Mn.s+=t,Mn.l+=n,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Ao);const n=Tl(Mn.h,Ao.h,t),r=Tl(Mn.s,Ao.s,t),s=Tl(Mn.l,Ao.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}et.NAMES=Am;let xr;class Pm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xr===void 0&&(xr=to("canvas")),xr.width=e.width,xr.height=e.height;const n=xr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=to("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Rm{constructor(e=null){this.isSource=!0,this.uuid=co(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pl(r[o].image)):s.push(Pl(r[o]))}else s=Pl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uM=0;class Wt extends ms{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=An,r=An,s=mn,o=Js,a=Pn,l=dr,c=Wt.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=co(),this.name="",this.source=new Rm(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oc:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oc:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Tm;Wt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(p+1)/2,S=(_+1)/2,C=(u+f)/4,P=(h+d)/4,y=(g+m)/4;return x>b&&x>S?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=C/n,s=P/n):b>S?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=C/r,s=y/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=P/s,r=y/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-d)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Di extends ms{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lm extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fM extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uo{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==p||u!==g){let m=1-a;const _=l*f+c*p+u*g+h*d,v=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const S=Math.sqrt(x),C=Math.atan2(S,_*v);m=Math.sin(m*C)/S,a=Math.sin(a*C)/S}const b=a*v;if(l=l*m+f*b,c=c*m+p*b,u=u*m+g*b,h=h*m+d*b,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rl=new q,mh=new uo;class fo{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Vi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Vi)}else n.boundingBox===null&&n.computeBoundingBox(),Ll.copy(n.boundingBox),Ll.applyMatrix4(e.matrixWorld),this.union(Ll);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),Ro.subVectors(this.max,vs),vr.subVectors(e.a,vs),yr.subVectors(e.b,vs),br.subVectors(e.c,vs),hi.subVectors(yr,vr),di.subVectors(br,yr),Gi.subVectors(vr,br);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Gi.z,Gi.y,hi.z,0,-hi.x,di.z,0,-di.x,Gi.z,0,-Gi.x,-hi.y,hi.x,0,-di.y,di.x,0,-Gi.y,Gi.x,0];return!Dl(t,vr,yr,br,Ro)||(t=[1,0,0,0,1,0,0,0,1],!Dl(t,vr,yr,br,Ro))?!1:(Lo.crossVectors(hi,di),t=[Lo.x,Lo.y,Lo.z],Dl(t,vr,yr,br,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Vi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new q,new q,new q,new q,new q,new q,new q,new q],Vi=new q,Ll=new fo,vr=new q,yr=new q,br=new q,hi=new q,di=new q,Gi=new q,vs=new q,Ro=new q,Lo=new q,Wi=new q;function Dl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Wi.fromArray(i,s);const a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hM=new fo,ys=new q,Il=new q;class Pu{constructor(e=new q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hM.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ys,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(Il)),this.expandByPoint(ys.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new q,Ol=new q,Do=new q,pi=new q,Fl=new q,Io=new q,Nl=new q;class dM{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.direction).multiplyScalar(t).add(this.origin),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ol.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Ol);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=pi.dot(this.direction),l=-pi.dot(Do),c=pi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Do).multiplyScalar(f).add(Ol),p}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,r,s){Fl.subVectors(t,e),Io.subVectors(n,e),Nl.crossVectors(Fl,Io);let o=this.direction.dot(Nl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(Io.crossVectors(pi,Io));if(l<0)return null;const c=a*this.direction.dot(Fl.cross(pi));if(c<0||l+c>o)return null;const u=-a*pi.dot(Nl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,h,f,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,d=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-d*c,t[9]=-a*l,t[2]=d-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=d+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f-d*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=d-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,d=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pM,e,mM)}lookAt(e,t,n){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),mi.crossVectors(n,Yt),mi.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),mi.crossVectors(n,Yt)),mi.normalize(),Oo.crossVectors(Yt,mi),r[0]=mi.x,r[4]=Oo.x,r[8]=Yt.x,r[1]=mi.y,r[5]=Oo.y,r[9]=Yt.y,r[2]=mi.z,r[6]=Oo.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],v=n[3],x=n[7],b=n[11],S=n[15],C=r[0],P=r[4],y=r[8],w=r[12],D=r[1],U=r[5],X=r[9],O=r[13],L=r[2],H=r[6],W=r[10],j=r[14],k=r[3],se=r[7],ie=r[11],ye=r[15];return s[0]=o*C+a*D+l*L+c*k,s[4]=o*P+a*U+l*H+c*se,s[8]=o*y+a*X+l*W+c*ie,s[12]=o*w+a*O+l*j+c*ye,s[1]=u*C+h*D+f*L+p*k,s[5]=u*P+h*U+f*H+p*se,s[9]=u*y+h*X+f*W+p*ie,s[13]=u*w+h*O+f*j+p*ye,s[2]=g*C+d*D+m*L+_*k,s[6]=g*P+d*U+m*H+_*se,s[10]=g*y+d*X+m*W+_*ie,s[14]=g*w+d*O+m*j+_*ye,s[3]=v*C+x*D+b*L+S*k,s[7]=v*P+x*U+b*H+S*se,s[11]=v*y+x*X+b*W+S*ie,s[15]=v*w+x*O+b*j+S*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*p-n*l*p)+d*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+_*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],v=h*m*c-d*f*c+d*l*p-a*m*p-h*l*_+a*f*_,x=g*f*c-u*m*c-g*l*p+o*m*p+u*l*_-o*f*_,b=u*d*c-g*h*c+g*a*p-o*d*p-u*a*_+o*h*_,S=g*h*l-u*d*l-g*a*f+o*d*f+u*a*m-o*h*m,C=t*v+n*x+r*b+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=v*P,e[1]=(d*f*s-h*m*s-d*r*p+n*m*p+h*r*_-n*f*_)*P,e[2]=(a*m*s-d*l*s+d*r*c-n*m*c-a*r*_+n*l*_)*P,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*P,e[4]=x*P,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*_+t*f*_)*P,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*_-t*l*_)*P,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*P,e[8]=b*P,e[9]=(g*h*s-u*d*s-g*n*p+t*d*p+u*n*_-t*h*_)*P,e[10]=(o*d*s-g*a*s+g*n*c-t*d*c-o*n*_+t*a*_)*P,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*P,e[12]=S*P,e[13]=(u*d*r-g*h*r+g*n*f-t*d*f-u*n*m+t*h*m)*P,e[14]=(g*a*r-o*d*r-g*n*l+t*d*l+o*n*m-t*a*m)*P,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,d=o*u,m=o*h,_=a*h,v=l*c,x=l*u,b=l*h,S=n.x,C=n.y,P=n.z;return r[0]=(1-(d+_))*S,r[1]=(p+b)*S,r[2]=(g-x)*S,r[3]=0,r[4]=(p-b)*C,r[5]=(1-(f+_))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(g+x)*P,r[9]=(m-v)*P,r[10]=(1-(f+d))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Mr.set(r[0],r[1],r[2]).length();const o=Mr.set(r[4],r[5],r[6]).length(),a=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const c=1/s,u=1/o,h=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mr=new q,Sn=new wt,pM=new q(0,0,0),mM=new q(1,1,1),mi=new q,Oo=new q,Yt=new q,gh=new wt,_h=new uo;class Ba{constructor(e=0,t=0,n=0,r=Ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _h.setFromEuler(this),this.setFromQuaternion(_h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ba.DEFAULT_ORDER="XYZ";class Dm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gM=0;const xh=new q,Sr=new uo,jn=new wt,Fo=new q,bs=new q,_M=new q,xM=new uo,vh=new q(1,0,0),yh=new q(0,1,0),bh=new q(0,0,1),vM={type:"added"},Mh={type:"removed"};class sn extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new q,t=new Ba,n=new uo,r=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new tn}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Dm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(yh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(yh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fo.copy(e):Fo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(bs,Fo,this.up):jn.lookAt(Fo,bs,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),Sr.setFromRotationMatrix(jn),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Mh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,_M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,xM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}sn.DEFAULT_UP=new q(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new q,Yn=new q,Ul=new q,Kn=new q,wr=new q,Tr=new q,Sh=new q,zl=new q,kl=new q,Bl=new q;class ei{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wn.subVectors(e,t),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){wn.subVectors(r,t),Yn.subVectors(n,t),Ul.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(Yn),l=wn.dot(Ul),c=Yn.dot(Yn),u=Yn.dot(Ul),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn),Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Kn),l.set(0,0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l}static isFrontFacing(e,t,n,r){return wn.subVectors(n,t),Yn.subVectors(e,t),wn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),wn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ei.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;wr.subVectors(r,n),Tr.subVectors(s,n),zl.subVectors(e,n);const l=wr.dot(zl),c=Tr.dot(zl);if(l<=0&&c<=0)return t.copy(n);kl.subVectors(e,r);const u=wr.dot(kl),h=Tr.dot(kl);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(wr,o);Bl.subVectors(e,s);const p=wr.dot(Bl),g=Tr.dot(Bl);if(g>=0&&p<=g)return t.copy(s);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Tr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Sh.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Sh,a);const _=1/(m+d+f);return o=d*_,a=f*_,t.copy(n).addScaledVector(wr,o).addScaledVector(Tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let yM=0;class Ha extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=co(),this.name="",this.type="Material",this.blending=$r,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Mm,this.blendDst=Sm,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Lc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sl,this.stencilZFail=Sl,this.stencilZPass=Sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Im extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new q,No=new $e;class Bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Co(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Co(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Co(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Co(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Om extends Bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fm extends Bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class si extends Bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bM=0;const cn=new wt,Hl=new sn,Er=new q,Kt=new fo,Ms=new fo,yt=new q;class Oi extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cm(e)?Fm:Om)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Kt.min,Ms.min),Kt.expandByPoint(yt),yt.addVectors(Kt.max,Ms.max),Kt.expandByPoint(yt)):(Kt.expandByPoint(Ms.min),Kt.expandByPoint(Ms.max))}Kt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(Er.fromBufferAttribute(e,c),yt.add(Er)),r=Math.max(r,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new q,u[D]=new q;const h=new q,f=new q,p=new q,g=new $e,d=new $e,m=new $e,_=new q,v=new q;function x(D,U,X){h.fromArray(r,D*3),f.fromArray(r,U*3),p.fromArray(r,X*3),g.fromArray(o,D*2),d.fromArray(o,U*2),m.fromArray(o,X*2),f.sub(h),p.sub(h),d.sub(g),m.sub(g);const O=1/(d.x*m.y-m.x*d.y);isFinite(O)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(O),v.copy(p).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(O),c[D].add(_),c[U].add(_),c[X].add(_),u[D].add(v),u[U].add(v),u[X].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let D=0,U=b.length;D<U;++D){const X=b[D],O=X.start,L=X.count;for(let H=O,W=O+L;H<W;H+=3)x(n[H+0],n[H+1],n[H+2])}const S=new q,C=new q,P=new q,y=new q;function w(D){P.fromArray(s,D*3),y.copy(P);const U=c[D];S.copy(U),S.sub(P.multiplyScalar(P.dot(U))).normalize(),C.crossVectors(y,U);const O=C.dot(u[D])<0?-1:1;l[D*4]=S.x,l[D*4+1]=S.y,l[D*4+2]=S.z,l[D*4+3]=O}for(let D=0,U=b.length;D<U;++D){const X=b[D],O=X.start,L=X.count;for(let H=O,W=O+L;H<W;H+=3)w(n[H+0]),w(n[H+1]),w(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,h=new q;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),d=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new Bn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oi,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const wh=new wt,Cr=new dM,Vl=new Pu,Ss=new q,ws=new q,Ts=new q,Gl=new q,Uo=new q,zo=new $e,ko=new $e,Bo=new $e,Wl=new q,Ho=new q;class zn extends sn{constructor(e=new Oi,t=new Im){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Gl.fromBufferAttribute(h,e),o?Uo.addScaledVector(Gl,u):Uo.addScaledVector(Gl.sub(t),u))}t.add(Uo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Vl.copy(n.boundingSphere),Vl.applyMatrix4(s),e.ray.intersectsSphere(Vl)===!1)||(wh.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(wh),n.boundingBox!==null&&Cr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=r[d.materialIndex],_=Math.max(d.start,f.start),v=Math.min(a.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,b=v;x<b;x+=3){const S=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);o=Vo(this,m,e,Cr,c,u,S,C,P),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=a.getX(d),v=a.getX(d+1),x=a.getX(d+2);o=Vo(this,r,e,Cr,c,u,_,v,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=r[d.materialIndex],_=Math.max(d.start,f.start),v=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,b=v;x<b;x+=3){const S=x,C=x+1,P=x+2;o=Vo(this,m,e,Cr,c,u,S,C,P),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=d,v=d+1,x=d+2;o=Vo(this,r,e,Cr,c,u,_,v,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function MM(i,e,t,n,r,s,o,a){let l;if(e.side===rn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Li,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ho);return c<t.near||c>t.far?null:{distance:c,point:Ho.clone(),object:i}}function Vo(i,e,t,n,r,s,o,a,l){i.getVertexPosition(o,Ss),i.getVertexPosition(a,ws),i.getVertexPosition(l,Ts);const c=MM(i,e,t,n,Ss,ws,Ts,Wl);if(c){r&&(zo.fromBufferAttribute(r,o),ko.fromBufferAttribute(r,a),Bo.fromBufferAttribute(r,l),c.uv=ei.getUV(Wl,Ss,ws,Ts,zo,ko,Bo,new $e)),s&&(zo.fromBufferAttribute(s,o),ko.fromBufferAttribute(s,a),Bo.fromBufferAttribute(s,l),c.uv2=ei.getUV(Wl,Ss,ws,Ts,zo,ko,Bo,new $e));const u={a:o,b:a,c:l,normal:new q,materialIndex:0};ei.getNormal(Ss,ws,Ts,u.normal),c.face=u}return c}class ho extends Oi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(h,2));function g(d,m,_,v,x,b,S,C,P,y,w){const D=b/P,U=S/y,X=b/2,O=S/2,L=C/2,H=P+1,W=y+1;let j=0,k=0;const se=new q;for(let ie=0;ie<W;ie++){const ye=ie*U-O;for(let z=0;z<H;z++){const oe=z*D-X;se[d]=oe*v,se[m]=ye*x,se[_]=L,c.push(se.x,se.y,se.z),se[d]=0,se[m]=0,se[_]=C>0?1:-1,u.push(se.x,se.y,se.z),h.push(z/P),h.push(1-ie/y),j+=1}}for(let ie=0;ie<y;ie++)for(let ye=0;ye<P;ye++){const z=f+ye+H*ie,oe=f+ye+H*(ie+1),de=f+(ye+1)+H*(ie+1),pe=f+(ye+1)+H*ie;l.push(z,oe,pe),l.push(oe,de,pe),k+=6}a.addGroup(p,k,w),p+=k,f+=j}}static fromJSON(e){return new ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=us(i[t]);for(const r in n)e[r]=n[r]}return e}function SM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nm(i){return i.getRenderTarget()===null&&i.outputEncoding===Ze?On:eo}const Um={clone:us,merge:Ft};var wM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=SM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zm extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends zm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wl*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ar=-90,Pr=1;class EM extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new gn(Ar,Pr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new gn(Ar,Pr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new gn(Ar,Pr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new gn(Ar,Pr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new gn(Ar,Pr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new gn(Ar,Pr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=ri,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class km extends Wt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:as,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CM extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new km(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ho(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Ei});s.uniforms.tEquirect.value=t;const o=new zn(r,s),a=t.minFilter;return t.minFilter===Js&&(t.minFilter=mn),new EM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const ql=new q,AM=new q,PM=new tn;class Xi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ql.subVectors(n,t).cross(AM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ql),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||PM.getNormalMatrix(e),r=this.coplanarPoint(ql).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Pu,Go=new q;class Bm{constructor(e=new Xi,t=new Xi,n=new Xi,r=new Xi,s=new Xi,o=new Xi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],v=n[14],x=n[15];return t[0].setComponents(a-r,h-l,d-f,x-m).normalize(),t[1].setComponents(a+r,h+l,d+f,x+m).normalize(),t[2].setComponents(a+s,h+c,d+p,x+_).normalize(),t[3].setComponents(a-s,h-c,d-p,x-_).normalize(),t[4].setComponents(a-o,h-u,d-g,x-v).normalize(),t[5].setComponents(a+o,h+u,d+g,x+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Go.x=r.normal.x>0?e.max.x:e.min.x,Go.y=r.normal.y>0?e.max.y:e.min.y,Go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hm(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function RM(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Va extends Oi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const v=_*f-o;for(let x=0;x<c;x++){const b=x*h-s;g.push(b,-v,0),d.push(0,0,1),m.push(x/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){const x=v+c*_,b=v+c*(_+1),S=v+1+c*(_+1),C=v+1+c*_;p.push(x,b,C),p.push(b,S,C)}this.setIndex(p),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(d,3)),this.setAttribute("uv",new si(m,2))}static fromJSON(e){return new Va(e.width,e.height,e.widthSegments,e.heightSegments)}}var LM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,OM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UM="vec3 transformed = vec3( position );",zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,BM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,KM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ZM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iS="gl_FragColor = linearToOutputTexel( gl_FragColor );",rS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_S=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yS=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,bS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ES=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,RS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,IS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,OS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,US=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,VS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,GS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,WS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,qS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,KS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ZS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,JS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,QS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,n1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,f1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,p1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,b1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,M1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,S1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,w1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,T1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,E1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,C1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,A1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,F1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,N1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,U1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,z1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,H1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G1=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,K1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ew=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ow=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,aw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:LM,alphamap_pars_fragment:DM,alphatest_fragment:IM,alphatest_pars_fragment:OM,aomap_fragment:FM,aomap_pars_fragment:NM,begin_vertex:UM,beginnormal_vertex:zM,bsdfs:kM,iridescence_fragment:BM,bumpmap_pars_fragment:HM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:GM,clipping_planes_pars_vertex:WM,clipping_planes_vertex:qM,color_fragment:$M,color_pars_fragment:XM,color_pars_vertex:jM,color_vertex:YM,common:KM,cube_uv_reflection_fragment:ZM,defaultnormal_vertex:JM,displacementmap_pars_vertex:QM,displacementmap_vertex:eS,emissivemap_fragment:tS,emissivemap_pars_fragment:nS,encodings_fragment:iS,encodings_pars_fragment:rS,envmap_fragment:sS,envmap_common_pars_fragment:oS,envmap_pars_fragment:aS,envmap_pars_vertex:lS,envmap_physical_pars_fragment:yS,envmap_vertex:cS,fog_vertex:uS,fog_pars_vertex:fS,fog_fragment:hS,fog_pars_fragment:dS,gradientmap_pars_fragment:pS,lightmap_fragment:mS,lightmap_pars_fragment:gS,lights_lambert_fragment:_S,lights_lambert_pars_fragment:xS,lights_pars_begin:vS,lights_toon_fragment:bS,lights_toon_pars_fragment:MS,lights_phong_fragment:SS,lights_phong_pars_fragment:wS,lights_physical_fragment:TS,lights_physical_pars_fragment:ES,lights_fragment_begin:CS,lights_fragment_maps:AS,lights_fragment_end:PS,logdepthbuf_fragment:RS,logdepthbuf_pars_fragment:LS,logdepthbuf_pars_vertex:DS,logdepthbuf_vertex:IS,map_fragment:OS,map_pars_fragment:FS,map_particle_fragment:NS,map_particle_pars_fragment:US,metalnessmap_fragment:zS,metalnessmap_pars_fragment:kS,morphcolor_vertex:BS,morphnormal_vertex:HS,morphtarget_pars_vertex:VS,morphtarget_vertex:GS,normal_fragment_begin:WS,normal_fragment_maps:qS,normal_pars_fragment:$S,normal_pars_vertex:XS,normal_vertex:jS,normalmap_pars_fragment:YS,clearcoat_normal_fragment_begin:KS,clearcoat_normal_fragment_maps:ZS,clearcoat_pars_fragment:JS,iridescence_pars_fragment:QS,output_fragment:e1,packing:t1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:r1,dithering_pars_fragment:s1,roughnessmap_fragment:o1,roughnessmap_pars_fragment:a1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:c1,shadowmap_vertex:u1,shadowmask_pars_fragment:f1,skinbase_vertex:h1,skinning_pars_vertex:d1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:g1,specularmap_pars_fragment:_1,tonemapping_fragment:x1,tonemapping_pars_fragment:v1,transmission_fragment:y1,transmission_pars_fragment:b1,uv_pars_fragment:M1,uv_pars_vertex:S1,uv_vertex:w1,uv2_pars_fragment:T1,uv2_pars_vertex:E1,uv2_vertex:C1,worldpos_vertex:A1,background_vert:P1,background_frag:R1,backgroundCube_vert:L1,backgroundCube_frag:D1,cube_vert:I1,cube_frag:O1,depth_vert:F1,depth_frag:N1,distanceRGBA_vert:U1,distanceRGBA_frag:z1,equirect_vert:k1,equirect_frag:B1,linedashed_vert:H1,linedashed_frag:V1,meshbasic_vert:G1,meshbasic_frag:W1,meshlambert_vert:q1,meshlambert_frag:$1,meshmatcap_vert:X1,meshmatcap_frag:j1,meshnormal_vert:Y1,meshnormal_frag:K1,meshphong_vert:Z1,meshphong_frag:J1,meshphysical_vert:Q1,meshphysical_frag:ew,meshtoon_vert:tw,meshtoon_frag:nw,points_vert:iw,points_frag:rw,shadow_vert:sw,shadow_frag:ow,sprite_vert:aw,sprite_frag:lw},me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new tn},uv2Transform:{value:new tn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new tn}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new tn}}},Fn={basic:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new et(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ft([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ft([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new et(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ft([me.points,me.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ft([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ft([me.common,me.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ft([me.sprite,me.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new tn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ft([me.common,me.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ft([me.lights,me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Fn.physical={uniforms:Ft([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $e(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Wo={r:0,b:0,g:0};function cw(i,e,t,n,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,_){let v=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const b=i.xr,S=b.getSession&&b.getSession();S&&S.environmentBlendMode==="additive"&&(x=null),x===null?d(a,l):x&&x.isColor&&(d(x,1),v=!0),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ka)?(u===void 0&&(u=new zn(new ho(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:us(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==Ze,(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new zn(new Va(2,2),new Gn({name:"BackgroundMaterial",uniforms:us(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==Ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(Wo,Nm(i)),n.buffers.color.setClear(Wo.r,Wo.g,Wo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function uw(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(L,H,W,j,k){let se=!1;if(o){const ie=d(j,W,H);c!==ie&&(c=ie,p(c.object)),se=_(L,j,W,k),se&&v(L,j,W,k)}else{const ie=H.wireframe===!0;(c.geometry!==j.id||c.program!==W.id||c.wireframe!==ie)&&(c.geometry=j.id,c.program=W.id,c.wireframe=ie,se=!0)}k!==null&&t.update(k,34963),(se||u)&&(u=!1,y(L,H,W,j),k!==null&&i.bindBuffer(34963,t.get(k).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function d(L,H,W){const j=W.wireframe===!0;let k=a[L.id];k===void 0&&(k={},a[L.id]=k);let se=k[H.id];se===void 0&&(se={},k[H.id]=se);let ie=se[j];return ie===void 0&&(ie=m(f()),se[j]=ie),ie}function m(L){const H=[],W=[],j=[];for(let k=0;k<r;k++)H[k]=0,W[k]=0,j[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:W,attributeDivisors:j,object:L,attributes:{},index:null}}function _(L,H,W,j){const k=c.attributes,se=H.attributes;let ie=0;const ye=W.getAttributes();for(const z in ye)if(ye[z].location>=0){const de=k[z];let pe=se[z];if(pe===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),de===void 0||de.attribute!==pe||pe&&de.data!==pe.data)return!0;ie++}return c.attributesNum!==ie||c.index!==j}function v(L,H,W,j){const k={},se=H.attributes;let ie=0;const ye=W.getAttributes();for(const z in ye)if(ye[z].location>=0){let de=se[z];de===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(de=L.instanceColor));const pe={};pe.attribute=de,de&&de.data&&(pe.data=de.data),k[z]=pe,ie++}c.attributes=k,c.attributesNum=ie,c.index=j}function x(){const L=c.newAttributes;for(let H=0,W=L.length;H<W;H++)L[H]=0}function b(L){S(L,0)}function S(L,H){const W=c.newAttributes,j=c.enabledAttributes,k=c.attributeDivisors;W[L]=1,j[L]===0&&(i.enableVertexAttribArray(L),j[L]=1),k[L]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,H),k[L]=H)}function C(){const L=c.newAttributes,H=c.enabledAttributes;for(let W=0,j=H.length;W<j;W++)H[W]!==L[W]&&(i.disableVertexAttribArray(W),H[W]=0)}function P(L,H,W,j,k,se){n.isWebGL2===!0&&(W===5124||W===5125)?i.vertexAttribIPointer(L,H,W,k,se):i.vertexAttribPointer(L,H,W,j,k,se)}function y(L,H,W,j){if(n.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const k=j.attributes,se=W.getAttributes(),ie=H.defaultAttributeValues;for(const ye in se){const z=se[ye];if(z.location>=0){let oe=k[ye];if(oe===void 0&&(ye==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),ye==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),oe!==void 0){const de=oe.normalized,pe=oe.itemSize,V=t.get(oe);if(V===void 0)continue;const Pe=V.buffer,Se=V.type,Me=V.bytesPerElement;if(oe.isInterleavedBufferAttribute){const _e=oe.data,We=_e.stride,A=oe.offset;if(_e.isInstancedInterleavedBuffer){for(let R=0;R<z.locationSize;R++)S(z.location+R,_e.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let R=0;R<z.locationSize;R++)b(z.location+R);i.bindBuffer(34962,Pe);for(let R=0;R<z.locationSize;R++)P(z.location+R,pe/z.locationSize,Se,de,We*Me,(A+pe/z.locationSize*R)*Me)}else{if(oe.isInstancedBufferAttribute){for(let _e=0;_e<z.locationSize;_e++)S(z.location+_e,oe.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<z.locationSize;_e++)b(z.location+_e);i.bindBuffer(34962,Pe);for(let _e=0;_e<z.locationSize;_e++)P(z.location+_e,pe/z.locationSize,Se,de,pe*Me,pe/z.locationSize*_e*Me)}}else if(ie!==void 0){const de=ie[ye];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(z.location,de);break;case 3:i.vertexAttrib3fv(z.location,de);break;case 4:i.vertexAttrib4fv(z.location,de);break;default:i.vertexAttrib1fv(z.location,de)}}}}C()}function w(){X();for(const L in a){const H=a[L];for(const W in H){const j=H[W];for(const k in j)g(j[k].object),delete j[k];delete H[W]}delete a[L]}}function D(L){if(a[L.id]===void 0)return;const H=a[L.id];for(const W in H){const j=H[W];for(const k in j)g(j[k].object),delete j[k];delete H[W]}delete a[L.id]}function U(L){for(const H in a){const W=a[H];if(W[L.id]===void 0)continue;const j=W[L.id];for(const k in j)g(j[k].object),delete j[k];delete W[L.id]}}function X(){O(),u=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:b,disableUnusedAttributes:C}}function fw(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function hw(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),d=i.getParameter(34921),m=i.getParameter(36347),_=i.getParameter(36348),v=i.getParameter(36349),x=f>0,b=o||e.has("OES_texture_float"),S=x&&b,C=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:S,maxSamples:C}}function dw(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Xi,a=new tn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,d=h.clipIntersection,m=h.clipShadows,_=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,x=v*4;let b=_.clippingState||null;l.value=b,b=u(g,f,x,p);for(let S=0;S!==x;++S)b[S]=t[S];_.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const d=h!==null?h.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,b=p;x!==d;++x,b+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function pw(i){let e=new WeakMap;function t(o,a){return a===Dc?o.mapping=as:a===Ic&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Dc||a===Ic)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new CM(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Vm extends zm{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Nr=4,Th=[.125,.215,.35,.446,.526,.582],Zi=20,$l=new Vm,Eh=new et;let Xl=null;const ji=(1+Math.sqrt(5))/2,Lr=1/ji,Ch=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,ji,Lr),new q(0,ji,-Lr),new q(Lr,0,ji),new q(-Lr,0,ji),new q(ji,Lr,0),new q(-ji,Lr,0)];class Ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Xl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl),e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Qs,format:Pn,encoding:pr,depthBuffer:!1},r=Ph(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mw(s)),this._blurMaterial=gw(s,e,t)}return r}_compileMaterial(e){const t=new zn(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,n,r){const a=new gn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Eh),u.toneMapping=ri,u.autoClear=!1;const p=new Im({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new zn(new ho,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(Eh),d=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):v===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;qo(r,v*x,_>2?x:0,x,x),u.setRenderTarget(r),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===as||e.mapping===ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;qo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$l)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ch[(r-1)%Ch.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new zn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Zi-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):Zi;m>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const _=[];let v=0;for(let P=0;P<Zi;++P){const y=P/d,w=Math.exp(-y*y/2);_.push(w),P===0?v+=w:P<m&&(v+=2*w)}for(let P=0;P<_.length;P++)_[P]=_[P]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const b=this._sizeLods[r],S=3*b*(r>x-Nr?r-x+Nr:0),C=4*(this._cubeSize-b);qo(t,S,C,3*b,2*b),l.setRenderTarget(t),l.render(h,$l)}}function mw(i){const e=[],t=[],n=[];let r=i;const s=i-Nr+1+Th.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Nr?l=Th[o-i+Nr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,d=3,m=2,_=1,v=new Float32Array(d*g*p),x=new Float32Array(m*g*p),b=new Float32Array(_*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,y=C>2?0:-1,w=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];v.set(w,d*g*C),x.set(f,m*g*C);const D=[C,C,C,C,C,C];b.set(D,_*g*C)}const S=new Oi;S.setAttribute("position",new Bn(v,d)),S.setAttribute("uv",new Bn(x,m)),S.setAttribute("faceIndex",new Bn(b,_)),e.push(S),r>Nr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ph(i,e,t){const n=new Di(i,e,t);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gw(i,e,t){const n=new Float32Array(Zi),r=new q(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Rh(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Lh(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _w(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dc||l===Ic,u=l===as||l===ls;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ah(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Ah(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xw(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function vw(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let d=0;if(p!==null){const v=p.array;d=p.version;for(let x=0,b=v.length;x<b;x+=3){const S=v[x+0],C=v[x+1],P=v[x+2];f.push(S,C,C,P,P,S)}}else{const v=g.array;d=g.version;for(let x=0,b=v.length/3-1;x<b;x+=3){const S=x+0,C=x+1,P=x+2;f.push(S,C,C,P,P,S)}}const m=new(Cm(f)?Fm:Om)(f,1);m.version=d;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function yw(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(s,p,a,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let d,m;if(r)d=i,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,p,a,f*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function bw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Mw(i,e){return i[0]-e[0]}function Sw(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ww(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new St,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==d){let H=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",H)};m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let w=0;x===!0&&(w=1),b===!0&&(w=2),S===!0&&(w=3);let D=u.attributes.position.count*w,U=1;D>e.maxTextureSize&&(U=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const X=new Float32Array(D*U*4*d),O=new Lm(X,D,U,d);O.type=nr,O.needsUpdate=!0;const L=w*4;for(let W=0;W<d;W++){const j=C[W],k=P[W],se=y[W],ie=D*U*4*W;for(let ye=0;ye<j.count;ye++){const z=ye*L;x===!0&&(o.fromBufferAttribute(j,ye),X[ie+z+0]=o.x,X[ie+z+1]=o.y,X[ie+z+2]=o.z,X[ie+z+3]=0),b===!0&&(o.fromBufferAttribute(k,ye),X[ie+z+4]=o.x,X[ie+z+5]=o.y,X[ie+z+6]=o.z,X[ie+z+7]=0),S===!0&&(o.fromBufferAttribute(se,ye),X[ie+z+8]=o.x,X[ie+z+9]=o.y,X[ie+z+10]=o.z,X[ie+z+11]=se.itemSize===4?o.w:1)}}m={count:d,texture:O,size:new $e(D,U)},s.set(u,m),u.addEventListener("dispose",H)}let _=0;for(let x=0;x<p.length;x++)_+=p[x];const v=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let b=0;b<g;b++)d[b]=[b,0];n[u.id]=d}for(let b=0;b<g;b++){const S=d[b];S[0]=b,S[1]=p[b]}d.sort(Sw);for(let b=0;b<8;b++)b<g&&d[b][1]?(a[b][0]=d[b][0],a[b][1]=d[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Mw);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let v=0;for(let b=0;b<8;b++){const S=a[b],C=S[0],P=S[1];C!==Number.MAX_SAFE_INTEGER&&P?(m&&u.getAttribute("morphTarget"+b)!==m[C]&&u.setAttribute("morphTarget"+b,m[C]),_&&u.getAttribute("morphNormal"+b)!==_[C]&&u.setAttribute("morphNormal"+b,_[C]),r[b]=P,v+=P):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),_&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const x=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Tw(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Gm=new Wt,Wm=new Lm,qm=new fM,$m=new km,Dh=[],Ih=[],Oh=new Float32Array(16),Fh=new Float32Array(9),Nh=new Float32Array(4);function gs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Dh[r];if(s===void 0&&(s=new Float32Array(r),Dh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ga(i,e){let t=Ih[e];t===void 0&&(t=new Int32Array(e),Ih[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ew(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function Aw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function Pw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function Rw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Nh.set(n),i.uniformMatrix2fv(this.addr,!1,Nh),gt(t,n)}}function Lw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),gt(t,n)}}function Dw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Oh.set(n),i.uniformMatrix4fv(this.addr,!1,Oh),gt(t,n)}}function Iw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ow(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function Fw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function Nw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function Uw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function kw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function Bw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Hw(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Gm,r)}function Vw(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||qm,r)}function Gw(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||$m,r)}function Ww(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Wm,r)}function qw(i){switch(i){case 5126:return Ew;case 35664:return Cw;case 35665:return Aw;case 35666:return Pw;case 35674:return Rw;case 35675:return Lw;case 35676:return Dw;case 5124:case 35670:return Iw;case 35667:case 35671:return Ow;case 35668:case 35672:return Fw;case 35669:case 35673:return Nw;case 5125:return Uw;case 36294:return zw;case 36295:return kw;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Vw;case 35680:case 36300:case 36308:case 36293:return Gw;case 36289:case 36303:case 36311:case 36292:return Ww}}function $w(i,e){i.uniform1fv(this.addr,e)}function Xw(i,e){const t=gs(e,this.size,2);i.uniform2fv(this.addr,t)}function jw(i,e){const t=gs(e,this.size,3);i.uniform3fv(this.addr,t)}function Yw(i,e){const t=gs(e,this.size,4);i.uniform4fv(this.addr,t)}function Kw(i,e){const t=gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zw(i,e){const t=gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jw(i,e){const t=gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qw(i,e){i.uniform1iv(this.addr,e)}function eT(i,e){i.uniform2iv(this.addr,e)}function tT(i,e){i.uniform3iv(this.addr,e)}function nT(i,e){i.uniform4iv(this.addr,e)}function iT(i,e){i.uniform1uiv(this.addr,e)}function rT(i,e){i.uniform2uiv(this.addr,e)}function sT(i,e){i.uniform3uiv(this.addr,e)}function oT(i,e){i.uniform4uiv(this.addr,e)}function aT(i,e,t){const n=this.cache,r=e.length,s=Ga(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Gm,s[o])}function lT(i,e,t){const n=this.cache,r=e.length,s=Ga(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||qm,s[o])}function cT(i,e,t){const n=this.cache,r=e.length,s=Ga(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||$m,s[o])}function uT(i,e,t){const n=this.cache,r=e.length,s=Ga(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Wm,s[o])}function fT(i){switch(i){case 5126:return $w;case 35664:return Xw;case 35665:return jw;case 35666:return Yw;case 35674:return Kw;case 35675:return Zw;case 35676:return Jw;case 5124:case 35670:return Qw;case 35667:case 35671:return eT;case 35668:case 35672:return tT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return rT;case 36295:return sT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return aT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return uT}}class hT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=qw(t.type)}}class dT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=fT(t.type)}}class pT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function Uh(i,e){i.seq.push(e),i.map[e.id]=e}function mT(i,e,t){const n=i.name,r=n.length;for(jl.lastIndex=0;;){const s=jl.exec(n),o=jl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Uh(t,c===void 0?new hT(a,i,e):new dT(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new pT(a),Uh(t,h)),t=h}}}class ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);mT(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function zh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let gT=0;function _T(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function xT(i){switch(i){case pr:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function kh(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+_T(i.getShaderSource(e),o)}else return r}function vT(i,e){const t=xT(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function yT(i,e){let t;switch(e){case Ub:t="Linear";break;case zb:t="Reinhard";break;case kb:t="OptimizedCineon";break;case Bb:t="ACESFilmic";break;case Hb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bT(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function MT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ST(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ls(i){return i!==""}function Bh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wT=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(i){return i.replace(wT,TT)}function TT(i,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return zc(t)}const ET=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(i){return i.replace(ET,CT)}function CT(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===mb?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rs&&(e="SHADOWMAP_TYPE_VSM"),e}function PT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case ls:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RT(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function LT(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wm:e="ENVMAP_BLENDING_MULTIPLY";break;case Fb:e="ENVMAP_BLENDING_MIX";break;case Nb:e="ENVMAP_BLENDING_ADD";break}return e}function DT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function IT(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=AT(t),c=PT(t),u=RT(t),h=LT(t),f=DT(t),p=t.isWebGL2?"":bT(t),g=MT(s),d=r.createProgram();let m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Ls).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(Ls).join(`
`),_.length>0&&(_+=`
`)):(m=[Gh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),_=[p,Gh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Oe.tonemapping_pars_fragment:"",t.toneMapping!==ri?yT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,vT("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),o=zc(o),o=Bh(o,t),o=Hh(o,t),a=zc(a),a=Bh(a,t),a=Hh(a,t),o=Vh(o),a=Vh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=v+m+o,b=v+_+a,S=zh(r,35633,x),C=zh(r,35632,b);if(r.attachShader(d,S),r.attachShader(d,C),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),i.debug.checkShaderErrors){const w=r.getProgramInfoLog(d).trim(),D=r.getShaderInfoLog(S).trim(),U=r.getShaderInfoLog(C).trim();let X=!0,O=!0;if(r.getProgramParameter(d,35714)===!1){X=!1;const L=kh(r,S,"vertex"),H=kh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+L+`
`+H)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||U==="")&&(O=!1);O&&(this.diagnostics={runnable:X,programLog:w,vertexShader:{log:D,prefix:m},fragmentShader:{log:U,prefix:_}})}r.deleteShader(S),r.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new ea(r,d)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=ST(r,d)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=gT++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=S,this.fragmentShader=C,this}let OT=0;class FT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new NT(e),t.set(e,n)),n}}class NT{constructor(e){this.id=OT++,this.code=e,this.usedTimes=0}}function UT(i,e,t,n,r,s,o){const a=new Dm,l=new FT,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y,w,D,U,X){const O=U.fog,L=X.geometry,H=y.isMeshStandardMaterial?U.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),j=W&&W.mapping===ka?W.image.height:null,k=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const se=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ie=se!==void 0?se.length:0;let ye=0;L.morphAttributes.position!==void 0&&(ye=1),L.morphAttributes.normal!==void 0&&(ye=2),L.morphAttributes.color!==void 0&&(ye=3);let z,oe,de,pe;if(k){const We=Fn[k];z=We.vertexShader,oe=We.fragmentShader}else z=y.vertexShader,oe=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const V=i.getRenderTarget(),Pe=y.alphaTest>0,Se=y.clearcoat>0,Me=y.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:y.type,vertexShader:z,fragmentShader:oe,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:f,outputEncoding:V===null?i.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:pr,map:!!y.map,matcap:!!y.matcap,envMap:!!W,envMapMode:W&&W.mapping,envMapCubeUVHeight:j,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===aM,tangentSpaceNormalMap:y.normalMapType===oM,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ze,clearcoat:Se,clearcoatMap:Se&&!!y.clearcoatMap,clearcoatRoughnessMap:Se&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!y.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!y.iridescenceMap,iridescenceThicknessMap:Me&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===$r,alphaMap:!!y.alphaMap,alphaTest:Pe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!L.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!O,useFog:y.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ye,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:y.toneMapped?i.toneMapping:ri,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bi,flipSided:y.side===rn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)w.push(D),w.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(_(w,y),v(w,y),w.push(i.outputEncoding)),w.push(y.customProgramCacheKey),w.join()}function _(y,w){y.push(w.precision),y.push(w.outputEncoding),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.combine),y.push(w.vertexUvs),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),y.push(a.mask)}function x(y){const w=g[y.type];let D;if(w){const U=Fn[w];D=Um.clone(U.uniforms)}else D=y.uniforms;return D}function b(y,w){let D;for(let U=0,X=c.length;U<X;U++){const O=c[U];if(O.cacheKey===w){D=O,++D.usedTimes;break}}return D===void 0&&(D=new IT(i,w,y,s),c.push(D)),D}function S(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function P(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:x,acquireProgram:b,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:P}}function zT(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function kT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,g,d,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:d,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=m),e++,_}function a(h,f,p,g,d,m){const _=o(h,f,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):t.push(_)}function l(h,f,p,g,d,m){const _=o(h,f,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||kT),n.length>1&&n.sort(f||Wh),r.length>1&&r.sort(f||Wh)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function BT(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new qh,i.set(n,[o])):r>=s.length?(o=new qh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function HT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new et};break;case"SpotLight":t={position:new q,direction:new q,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function VT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let GT=0;function WT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qT(i,e){const t=new HT,n=VT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new q);const s=new q,o=new wt,a=new wt;function l(u,h){let f=0,p=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let d=0,m=0,_=0,v=0,x=0,b=0,S=0,C=0,P=0,y=0;u.sort(WT);const w=h!==!0?Math.PI:1;for(let U=0,X=u.length;U<X;U++){const O=u[U],L=O.color,H=O.intensity,W=O.distance,j=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=L.r*H*w,p+=L.g*H*w,g+=L.b*H*w;else if(O.isLightProbe)for(let k=0;k<9;k++)r.probe[k].addScaledVector(O.sh.coefficients[k],H);else if(O.isDirectionalLight){const k=t.get(O);if(k.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){const se=O.shadow,ie=n.get(O);ie.shadowBias=se.bias,ie.shadowNormalBias=se.normalBias,ie.shadowRadius=se.radius,ie.shadowMapSize=se.mapSize,r.directionalShadow[d]=ie,r.directionalShadowMap[d]=j,r.directionalShadowMatrix[d]=O.shadow.matrix,b++}r.directional[d]=k,d++}else if(O.isSpotLight){const k=t.get(O);k.position.setFromMatrixPosition(O.matrixWorld),k.color.copy(L).multiplyScalar(H*w),k.distance=W,k.coneCos=Math.cos(O.angle),k.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),k.decay=O.decay,r.spot[_]=k;const se=O.shadow;if(O.map&&(r.spotLightMap[P]=O.map,P++,se.updateMatrices(O),O.castShadow&&y++),r.spotLightMatrix[_]=se.matrix,O.castShadow){const ie=n.get(O);ie.shadowBias=se.bias,ie.shadowNormalBias=se.normalBias,ie.shadowRadius=se.radius,ie.shadowMapSize=se.mapSize,r.spotShadow[_]=ie,r.spotShadowMap[_]=j,C++}_++}else if(O.isRectAreaLight){const k=t.get(O);k.color.copy(L).multiplyScalar(H),k.halfWidth.set(O.width*.5,0,0),k.halfHeight.set(0,O.height*.5,0),r.rectArea[v]=k,v++}else if(O.isPointLight){const k=t.get(O);if(k.color.copy(O.color).multiplyScalar(O.intensity*w),k.distance=O.distance,k.decay=O.decay,O.castShadow){const se=O.shadow,ie=n.get(O);ie.shadowBias=se.bias,ie.shadowNormalBias=se.normalBias,ie.shadowRadius=se.radius,ie.shadowMapSize=se.mapSize,ie.shadowCameraNear=se.camera.near,ie.shadowCameraFar=se.camera.far,r.pointShadow[m]=ie,r.pointShadowMap[m]=j,r.pointShadowMatrix[m]=O.shadow.matrix,S++}r.point[m]=k,m++}else if(O.isHemisphereLight){const k=t.get(O);k.skyColor.copy(O.color).multiplyScalar(H*w),k.groundColor.copy(O.groundColor).multiplyScalar(H*w),r.hemi[x]=k,x++}}v>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==d||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==v||D.hemiLength!==x||D.numDirectionalShadows!==b||D.numPointShadows!==S||D.numSpotShadows!==C||D.numSpotMaps!==P)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=C+P-y,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=y,D.directionalLength=d,D.pointLength=m,D.spotLength=_,D.rectAreaLength=v,D.hemiLength=x,D.numDirectionalShadows=b,D.numPointShadows=S,D.numSpotShadows=C,D.numSpotMaps=P,r.version=GT++)}function c(u,h){let f=0,p=0,g=0,d=0,m=0;const _=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const b=u[v];if(b.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),f++}else if(b.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const S=r.rectArea[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),d++}else if(b.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),p++}else if(b.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:r}}function $h(i,e){const t=new qT(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function $T(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new $h(i,e),t.set(s,[l])):o>=a.length?(l=new $h(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class XT extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jT extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new q,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ZT(i,e,t){let n=new Bm;const r=new $e,s=new $e,o=new St,a=new XT({depthPacking:sM}),l=new jT,c={},u=t.maxTextureSize,h={[Li]:rn,[rn]:Li,[bi]:bi},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:YT,fragmentShader:KT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Oi;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new zn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bm,this.render=function(b,S,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const P=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ei),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let U=0,X=b.length;U<X;U++){const O=b[U],L=O.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const H=L.getFrameExtents();if(r.multiply(H),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,L.mapSize.y=s.y)),L.map===null){const j=this.type!==Rs?{minFilter:Nt,magFilter:Nt}:{};L.map=new Di(r.x,r.y,j),L.map.texture.name=O.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const W=L.getViewportCount();for(let j=0;j<W;j++){const k=L.getViewport(j);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),D.viewport(o),L.updateMatrices(O,j),n=L.getFrustum(),x(S,C,L.camera,O,this.type)}L.isPointLightShadow!==!0&&this.type===Rs&&_(L,C),L.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(P,y,w)};function _(b,S){const C=e.update(d);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Di(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(S,null,C,f,d,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(S,null,C,p,d,null)}function v(b,S,C,P,y,w){let D=null;const U=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)D=U;else if(D=C.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const X=D.uuid,O=S.uuid;let L=c[X];L===void 0&&(L={},c[X]=L);let H=L[O];H===void 0&&(H=D.clone(),L[O]=H),D=H}return D.visible=S.visible,D.wireframe=S.wireframe,w===Rs?D.side=S.shadowSide!==null?S.shadowSide:S.side:D.side=S.shadowSide!==null?S.shadowSide:h[S.side],D.alphaMap=S.alphaMap,D.alphaTest=S.alphaTest,D.map=S.map,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,C.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(C.matrixWorld),D.nearDistance=P,D.farDistance=y),D}function x(b,S,C,P,y){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Rs)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const U=e.update(b),X=b.material;if(Array.isArray(X)){const O=U.groups;for(let L=0,H=O.length;L<H;L++){const W=O[L],j=X[W.materialIndex];if(j&&j.visible){const k=v(b,j,P,C.near,C.far,y);i.renderBufferDirect(C,null,U,k,b,W)}}}else if(X.visible){const O=v(b,X,P,C.near,C.far,y);i.renderBufferDirect(C,null,U,O,b,null)}}const D=b.children;for(let U=0,X=D.length;U<X;U++)x(D[U],S,C,P,y)}}function JT(i,e,t){const n=t.isWebGL2;function r(){let I=!1;const K=new St;let ue=null;const ve=new St(0,0,0,0);return{setMask:function(Te){ue!==Te&&!I&&(i.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){I=Te},setClear:function(Te,qe,xt,Tt,Fi){Fi===!0&&(Te*=Tt,qe*=Tt,xt*=Tt),K.set(Te,qe,xt,Tt),ve.equals(K)===!1&&(i.clearColor(Te,qe,xt,Tt),ve.copy(K))},reset:function(){I=!1,ue=null,ve.set(-1,0,0,0)}}}function s(){let I=!1,K=null,ue=null,ve=null;return{setTest:function(Te){Te?Pe(2929):Se(2929)},setMask:function(Te){K!==Te&&!I&&(i.depthMask(Te),K=Te)},setFunc:function(Te){if(ue!==Te){switch(Te){case Ab:i.depthFunc(512);break;case Pb:i.depthFunc(519);break;case Rb:i.depthFunc(513);break;case Lc:i.depthFunc(515);break;case Lb:i.depthFunc(514);break;case Db:i.depthFunc(518);break;case Ib:i.depthFunc(516);break;case Ob:i.depthFunc(517);break;default:i.depthFunc(515)}ue=Te}},setLocked:function(Te){I=Te},setClear:function(Te){ve!==Te&&(i.clearDepth(Te),ve=Te)},reset:function(){I=!1,K=null,ue=null,ve=null}}}function o(){let I=!1,K=null,ue=null,ve=null,Te=null,qe=null,xt=null,Tt=null,Fi=null;return{setTest:function(Qe){I||(Qe?Pe(2960):Se(2960))},setMask:function(Qe){K!==Qe&&!I&&(i.stencilMask(Qe),K=Qe)},setFunc:function(Qe,Wn,ln){(ue!==Qe||ve!==Wn||Te!==ln)&&(i.stencilFunc(Qe,Wn,ln),ue=Qe,ve=Wn,Te=ln)},setOp:function(Qe,Wn,ln){(qe!==Qe||xt!==Wn||Tt!==ln)&&(i.stencilOp(Qe,Wn,ln),qe=Qe,xt=Wn,Tt=ln)},setLocked:function(Qe){I=Qe},setClear:function(Qe){Fi!==Qe&&(i.clearStencil(Qe),Fi=Qe)},reset:function(){I=!1,K=null,ue=null,ve=null,Te=null,qe=null,xt=null,Tt=null,Fi=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,d=[],m=null,_=!1,v=null,x=null,b=null,S=null,C=null,P=null,y=null,w=!1,D=null,U=null,X=null,O=null,L=null;const H=i.getParameter(35661);let W=!1,j=0;const k=i.getParameter(7938);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=j>=2);let se=null,ie={};const ye=i.getParameter(3088),z=i.getParameter(2978),oe=new St().fromArray(ye),de=new St().fromArray(z);function pe(I,K,ue){const ve=new Uint8Array(4),Te=i.createTexture();i.bindTexture(I,Te),i.texParameteri(I,10241,9728),i.texParameteri(I,10240,9728);for(let qe=0;qe<ue;qe++)i.texImage2D(K+qe,0,6408,1,1,0,6408,5121,ve);return Te}const V={};V[3553]=pe(3553,3553,1),V[34067]=pe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(2929),l.setFunc(Lc),J(!1),ae(Ff),Pe(2884),G(Ei);function Pe(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function Se(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function Me(I,K){return p[I]!==K?(i.bindFramebuffer(I,K),p[I]=K,n&&(I===36009&&(p[36160]=K),I===36160&&(p[36009]=K)),!0):!1}function _e(I,K){let ue=d,ve=!1;if(I)if(ue=g.get(K),ue===void 0&&(ue=[],g.set(K,ue)),I.isWebGLMultipleRenderTargets){const Te=I.texture;if(ue.length!==Te.length||ue[0]!==36064){for(let qe=0,xt=Te.length;qe<xt;qe++)ue[qe]=36064+qe;ue.length=Te.length,ve=!0}}else ue[0]!==36064&&(ue[0]=36064,ve=!0);else ue[0]!==1029&&(ue[0]=1029,ve=!0);ve&&(t.isWebGL2?i.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function We(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const A={[Dr]:32774,[_b]:32778,[xb]:32779};if(n)A[kf]=32775,A[Bf]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(A[kf]=I.MIN_EXT,A[Bf]=I.MAX_EXT)}const R={[vb]:0,[yb]:1,[bb]:768,[Mm]:770,[Cb]:776,[Tb]:774,[Sb]:772,[Mb]:769,[Sm]:771,[Eb]:775,[wb]:773};function G(I,K,ue,ve,Te,qe,xt,Tt){if(I===Ei){_===!0&&(Se(3042),_=!1);return}if(_===!1&&(Pe(3042),_=!0),I!==gb){if(I!==v||Tt!==w){if((x!==Dr||C!==Dr)&&(i.blendEquation(32774),x=Dr,C=Dr),Tt)switch(I){case $r:i.blendFuncSeparate(1,771,1,771);break;case Nf:i.blendFunc(1,1);break;case Uf:i.blendFuncSeparate(0,769,0,1);break;case zf:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case $r:i.blendFuncSeparate(770,771,1,771);break;case Nf:i.blendFunc(770,1);break;case Uf:i.blendFuncSeparate(0,769,0,1);break;case zf:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,S=null,P=null,y=null,v=I,w=Tt}return}Te=Te||K,qe=qe||ue,xt=xt||ve,(K!==x||Te!==C)&&(i.blendEquationSeparate(A[K],A[Te]),x=K,C=Te),(ue!==b||ve!==S||qe!==P||xt!==y)&&(i.blendFuncSeparate(R[ue],R[ve],R[qe],R[xt]),b=ue,S=ve,P=qe,y=xt),v=I,w=!1}function ne(I,K){I.side===bi?Se(2884):Pe(2884);let ue=I.side===rn;K&&(ue=!ue),J(ue),I.blending===$r&&I.transparent===!1?G(Ei):G(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const ve=I.stencilWrite;c.setTest(ve),ve&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),te(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Pe(32926):Se(32926)}function J(I){D!==I&&(I?i.frontFace(2304):i.frontFace(2305),D=I)}function ae(I){I!==db?(Pe(2884),I!==U&&(I===Ff?i.cullFace(1029):I===pb?i.cullFace(1028):i.cullFace(1032))):Se(2884),U=I}function ce(I){I!==X&&(W&&i.lineWidth(I),X=I)}function te(I,K,ue){I?(Pe(32823),(O!==K||L!==ue)&&(i.polygonOffset(K,ue),O=K,L=ue)):Se(32823)}function he(I){I?Pe(3089):Se(3089)}function re(I){I===void 0&&(I=33984+H-1),se!==I&&(i.activeTexture(I),se=I)}function T(I,K,ue){ue===void 0&&(se===null?ue=33984+H-1:ue=se);let ve=ie[ue];ve===void 0&&(ve={type:void 0,texture:void 0},ie[ue]=ve),(ve.type!==I||ve.texture!==K)&&(se!==ue&&(i.activeTexture(ue),se=ue),i.bindTexture(I,K||V[I]),ve.type=I,ve.texture=K)}function M(){const I=ie[se];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(I){oe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),oe.copy(I))}function xe(I){de.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),de.copy(I))}function Le(I,K){let ue=h.get(K);ue===void 0&&(ue=new WeakMap,h.set(K,ue));let ve=ue.get(I);ve===void 0&&(ve=i.getUniformBlockIndex(K,I.name),ue.set(I,ve))}function Xe(I,K){const ve=h.get(K).get(I);u.get(K)!==ve&&(i.uniformBlockBinding(K,ve,I.__bindingPointIndex),u.set(K,ve))}function _t(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},se=null,ie={},p={},g=new WeakMap,d=[],m=null,_=!1,v=null,x=null,b=null,S=null,C=null,P=null,y=null,w=!1,D=null,U=null,X=null,O=null,L=null,oe.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:Se,bindFramebuffer:Me,drawBuffers:_e,useProgram:We,setBlending:G,setMaterial:ne,setFlipSided:J,setCullFace:ae,setLineWidth:ce,setPolygonOffset:te,setScissorTest:he,activeTexture:re,bindTexture:T,unbindTexture:M,compressedTexImage2D:F,compressedTexImage3D:$,texImage2D:Ae,texImage3D:be,updateUBOMapping:Le,uniformBlockBinding:Xe,texStorage2D:Y,texStorage3D:we,texSubImage2D:Q,texSubImage3D:le,compressedTexSubImage2D:ge,compressedTexSubImage3D:fe,scissor:Ee,viewport:xe,reset:_t}}function QT(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,M){return _?new OffscreenCanvas(T,M):to("canvas")}function x(T,M,F,$){let Q=1;if((T.width>$||T.height>$)&&(Q=$/Math.max(T.width,T.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const le=M?Uc:Math.floor,ge=le(Q*T.width),fe=le(Q*T.height);d===void 0&&(d=v(ge,fe));const Y=F?v(ge,fe):d;return Y.width=ge,Y.height=fe,Y.getContext("2d").drawImage(T,0,0,ge,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ge+"x"+fe+")."),Y}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function b(T){return ph(T.width)&&ph(T.height)}function S(T){return a?!1:T.wrapS!==An||T.wrapT!==An||T.minFilter!==Nt&&T.minFilter!==mn}function C(T,M){return T.generateMipmaps&&M&&T.minFilter!==Nt&&T.minFilter!==mn}function P(T){i.generateMipmap(T)}function y(T,M,F,$,Q=!1){if(a===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let le=M;return M===6403&&(F===5126&&(le=33326),F===5131&&(le=33325),F===5121&&(le=33321)),M===33319&&(F===5126&&(le=33328),F===5131&&(le=33327),F===5121&&(le=33323)),M===6408&&(F===5126&&(le=34836),F===5131&&(le=34842),F===5121&&(le=$===Ze&&Q===!1?35907:32856),F===32819&&(le=32854),F===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function w(T,M,F){return C(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Nt&&T.minFilter!==mn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function D(T){return T===Nt||T===Hf||T===_l?9728:9729}function U(T){const M=T.target;M.removeEventListener("dispose",U),O(M),M.isVideoTexture&&g.delete(M)}function X(T){const M=T.target;M.removeEventListener("dispose",X),H(M)}function O(T){const M=n.get(T);if(M.__webglInit===void 0)return;const F=T.source,$=m.get(F);if($){const Q=$[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(T),Object.keys($).length===0&&m.delete(F)}n.remove(T)}function L(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const F=T.source,$=m.get(F);delete $[M.__cacheKey],o.memory.textures--}function H(T){const M=T.texture,F=n.get(T),$=n.get(M);if($.__webglTexture!==void 0&&(i.deleteTexture($.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)i.deleteFramebuffer(F.__webglFramebuffer[Q]),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[Q]);else{if(i.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)F.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Q=0,le=M.length;Q<le;Q++){const ge=n.get(M[Q]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(M[Q])}n.remove(M),n.remove(T)}let W=0;function j(){W=0}function k(){const T=W;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),W+=1,T}function se(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.encoding),M.join()}function ie(T,M){const F=n.get(T);if(T.isVideoTexture&&he(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(F,T,M);return}}t.bindTexture(3553,F.__webglTexture,33984+M)}function ye(T,M){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Se(F,T,M);return}t.bindTexture(35866,F.__webglTexture,33984+M)}function z(T,M){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Se(F,T,M);return}t.bindTexture(32879,F.__webglTexture,33984+M)}function oe(T,M){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Me(F,T,M);return}t.bindTexture(34067,F.__webglTexture,33984+M)}const de={[Oc]:10497,[An]:33071,[Fc]:33648},pe={[Nt]:9728,[Hf]:9984,[_l]:9986,[mn]:9729,[Vb]:9985,[Js]:9987};function V(T,M,F){if(F?(i.texParameteri(T,10242,de[M.wrapS]),i.texParameteri(T,10243,de[M.wrapT]),(T===32879||T===35866)&&i.texParameteri(T,32882,de[M.wrapR]),i.texParameteri(T,10240,pe[M.magFilter]),i.texParameteri(T,10241,pe[M.minFilter])):(i.texParameteri(T,10242,33071),i.texParameteri(T,10243,33071),(T===32879||T===35866)&&i.texParameteri(T,32882,33071),(M.wrapS!==An||M.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,10240,D(M.magFilter)),i.texParameteri(T,10241,D(M.minFilter)),M.minFilter!==Nt&&M.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Nt||M.minFilter!==_l&&M.minFilter!==Js||M.type===nr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Qs&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(T,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Pe(T,M){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",U));const $=M.source;let Q=m.get($);Q===void 0&&(Q={},m.set($,Q));const le=se(M);if(le!==T.__cacheKey){Q[le]===void 0&&(Q[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[le].usedTimes++;const ge=Q[T.__cacheKey];ge!==void 0&&(Q[T.__cacheKey].usedTimes--,ge.usedTimes===0&&L(M)),T.__cacheKey=le,T.__webglTexture=Q[le].texture}return F}function Se(T,M,F){let $=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=35866),M.isData3DTexture&&($=32879);const Q=Pe(T,M),le=M.source;t.bindTexture($,T.__webglTexture,33984+F);const ge=n.get(le);if(le.version!==ge.__version||Q===!0){t.activeTexture(33984+F),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const fe=S(M)&&b(M.image)===!1;let Y=x(M.image,fe,!1,u);Y=re(M,Y);const we=b(Y)||a,Ae=s.convert(M.format,M.encoding);let be=s.convert(M.type),Ee=y(M.internalFormat,Ae,be,M.encoding,M.isVideoTexture);V($,M,we);let xe;const Le=M.mipmaps,Xe=a&&M.isVideoTexture!==!0,_t=ge.__version===void 0||Q===!0,I=w(M,Y,we);if(M.isDepthTexture)Ee=6402,a?M.type===nr?Ee=36012:M.type===tr?Ee=33190:M.type===Xr?Ee=35056:Ee=33189:M.type===nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===lr&&Ee===6402&&M.type!==Em&&M.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=tr,be=s.convert(M.type)),M.format===cs&&Ee===6402&&(Ee=34041,M.type!==Xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Xr,be=s.convert(M.type))),_t&&(Xe?t.texStorage2D(3553,1,Ee,Y.width,Y.height):t.texImage2D(3553,0,Ee,Y.width,Y.height,0,Ae,be,null));else if(M.isDataTexture)if(Le.length>0&&we){Xe&&_t&&t.texStorage2D(3553,I,Ee,Le[0].width,Le[0].height);for(let K=0,ue=Le.length;K<ue;K++)xe=Le[K],Xe?t.texSubImage2D(3553,K,0,0,xe.width,xe.height,Ae,be,xe.data):t.texImage2D(3553,K,Ee,xe.width,xe.height,0,Ae,be,xe.data);M.generateMipmaps=!1}else Xe?(_t&&t.texStorage2D(3553,I,Ee,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,Ae,be,Y.data)):t.texImage2D(3553,0,Ee,Y.width,Y.height,0,Ae,be,Y.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&_t&&t.texStorage3D(35866,I,Ee,Le[0].width,Le[0].height,Y.depth);for(let K=0,ue=Le.length;K<ue;K++)xe=Le[K],M.format!==Pn?Ae!==null?Xe?t.compressedTexSubImage3D(35866,K,0,0,0,xe.width,xe.height,Y.depth,Ae,xe.data,0,0):t.compressedTexImage3D(35866,K,Ee,xe.width,xe.height,Y.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(35866,K,0,0,0,xe.width,xe.height,Y.depth,Ae,be,xe.data):t.texImage3D(35866,K,Ee,xe.width,xe.height,Y.depth,0,Ae,be,xe.data)}else{Xe&&_t&&t.texStorage2D(3553,I,Ee,Le[0].width,Le[0].height);for(let K=0,ue=Le.length;K<ue;K++)xe=Le[K],M.format!==Pn?Ae!==null?Xe?t.compressedTexSubImage2D(3553,K,0,0,xe.width,xe.height,Ae,xe.data):t.compressedTexImage2D(3553,K,Ee,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(3553,K,0,0,xe.width,xe.height,Ae,be,xe.data):t.texImage2D(3553,K,Ee,xe.width,xe.height,0,Ae,be,xe.data)}else if(M.isDataArrayTexture)Xe?(_t&&t.texStorage3D(35866,I,Ee,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,Ae,be,Y.data)):t.texImage3D(35866,0,Ee,Y.width,Y.height,Y.depth,0,Ae,be,Y.data);else if(M.isData3DTexture)Xe?(_t&&t.texStorage3D(32879,I,Ee,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,Ae,be,Y.data)):t.texImage3D(32879,0,Ee,Y.width,Y.height,Y.depth,0,Ae,be,Y.data);else if(M.isFramebufferTexture){if(_t)if(Xe)t.texStorage2D(3553,I,Ee,Y.width,Y.height);else{let K=Y.width,ue=Y.height;for(let ve=0;ve<I;ve++)t.texImage2D(3553,ve,Ee,K,ue,0,Ae,be,null),K>>=1,ue>>=1}}else if(Le.length>0&&we){Xe&&_t&&t.texStorage2D(3553,I,Ee,Le[0].width,Le[0].height);for(let K=0,ue=Le.length;K<ue;K++)xe=Le[K],Xe?t.texSubImage2D(3553,K,0,0,Ae,be,xe):t.texImage2D(3553,K,Ee,Ae,be,xe);M.generateMipmaps=!1}else Xe?(_t&&t.texStorage2D(3553,I,Ee,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Ae,be,Y)):t.texImage2D(3553,0,Ee,Ae,be,Y);C(M,we)&&P($),ge.__version=le.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Me(T,M,F){if(M.image.length!==6)return;const $=Pe(T,M),Q=M.source;t.bindTexture(34067,T.__webglTexture,33984+F);const le=n.get(Q);if(Q.version!==le.__version||$===!0){t.activeTexture(33984+F),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const ge=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,Y=[];for(let K=0;K<6;K++)!ge&&!fe?Y[K]=x(M.image[K],!1,!0,c):Y[K]=fe?M.image[K].image:M.image[K],Y[K]=re(M,Y[K]);const we=Y[0],Ae=b(we)||a,be=s.convert(M.format,M.encoding),Ee=s.convert(M.type),xe=y(M.internalFormat,be,Ee,M.encoding),Le=a&&M.isVideoTexture!==!0,Xe=le.__version===void 0||$===!0;let _t=w(M,we,Ae);V(34067,M,Ae);let I;if(ge){Le&&Xe&&t.texStorage2D(34067,_t,xe,we.width,we.height);for(let K=0;K<6;K++){I=Y[K].mipmaps;for(let ue=0;ue<I.length;ue++){const ve=I[ue];M.format!==Pn?be!==null?Le?t.compressedTexSubImage2D(34069+K,ue,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(34069+K,ue,xe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+K,ue,0,0,ve.width,ve.height,be,Ee,ve.data):t.texImage2D(34069+K,ue,xe,ve.width,ve.height,0,be,Ee,ve.data)}}}else{I=M.mipmaps,Le&&Xe&&(I.length>0&&_t++,t.texStorage2D(34067,_t,xe,Y[0].width,Y[0].height));for(let K=0;K<6;K++)if(fe){Le?t.texSubImage2D(34069+K,0,0,0,Y[K].width,Y[K].height,be,Ee,Y[K].data):t.texImage2D(34069+K,0,xe,Y[K].width,Y[K].height,0,be,Ee,Y[K].data);for(let ue=0;ue<I.length;ue++){const Te=I[ue].image[K].image;Le?t.texSubImage2D(34069+K,ue+1,0,0,Te.width,Te.height,be,Ee,Te.data):t.texImage2D(34069+K,ue+1,xe,Te.width,Te.height,0,be,Ee,Te.data)}}else{Le?t.texSubImage2D(34069+K,0,0,0,be,Ee,Y[K]):t.texImage2D(34069+K,0,xe,be,Ee,Y[K]);for(let ue=0;ue<I.length;ue++){const ve=I[ue];Le?t.texSubImage2D(34069+K,ue+1,0,0,be,Ee,ve.image[K]):t.texImage2D(34069+K,ue+1,xe,be,Ee,ve.image[K])}}}C(M,Ae)&&P(34067),le.__version=Q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function _e(T,M,F,$,Q){const le=s.convert(F.format,F.encoding),ge=s.convert(F.type),fe=y(F.internalFormat,le,ge,F.encoding);n.get(M).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,fe,M.width,M.height,M.depth,0,le,ge,null):t.texImage2D(Q,0,fe,M.width,M.height,0,le,ge,null)),t.bindFramebuffer(36160,T),te(M)?f.framebufferTexture2DMultisampleEXT(36160,$,Q,n.get(F).__webglTexture,0,ce(M)):(Q===3553||Q>=34069&&Q<=34074)&&i.framebufferTexture2D(36160,$,Q,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function We(T,M,F){if(i.bindRenderbuffer(36161,T),M.depthBuffer&&!M.stencilBuffer){let $=33189;if(F||te(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===nr?$=36012:Q.type===tr&&($=33190));const le=ce(M);te(M)?f.renderbufferStorageMultisampleEXT(36161,le,$,M.width,M.height):i.renderbufferStorageMultisample(36161,le,$,M.width,M.height)}else i.renderbufferStorage(36161,$,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,T)}else if(M.depthBuffer&&M.stencilBuffer){const $=ce(M);F&&te(M)===!1?i.renderbufferStorageMultisample(36161,$,35056,M.width,M.height):te(M)?f.renderbufferStorageMultisampleEXT(36161,$,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,T)}else{const $=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<$.length;Q++){const le=$[Q],ge=s.convert(le.format,le.encoding),fe=s.convert(le.type),Y=y(le.internalFormat,ge,fe,le.encoding),we=ce(M);F&&te(M)===!1?i.renderbufferStorageMultisample(36161,we,Y,M.width,M.height):te(M)?f.renderbufferStorageMultisampleEXT(36161,we,Y,M.width,M.height):i.renderbufferStorage(36161,Y,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function A(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ie(M.depthTexture,0);const $=n.get(M.depthTexture).__webglTexture,Q=ce(M);if(M.depthTexture.format===lr)te(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,Q):i.framebufferTexture2D(36160,36096,3553,$,0);else if(M.depthTexture.format===cs)te(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,Q):i.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function R(T){const M=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");A(M.__webglFramebuffer,T)}else if(F){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]=i.createRenderbuffer(),We(M.__webglDepthbuffer[$],T,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),We(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function G(T,M,F){const $=n.get(T);M!==void 0&&_e($.__webglFramebuffer,T,T.texture,36064,3553),F!==void 0&&R(T)}function ne(T){const M=T.texture,F=n.get(T),$=n.get(M);T.addEventListener("dispose",X),T.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,o.memory.textures++);const Q=T.isWebGLCubeRenderTarget===!0,le=T.isWebGLMultipleRenderTargets===!0,ge=b(T)||a;if(Q){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)F.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(F.__webglFramebuffer=i.createFramebuffer(),le)if(r.drawBuffers){const fe=T.texture;for(let Y=0,we=fe.length;Y<we;Y++){const Ae=n.get(fe[Y]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&te(T)===!1){const fe=le?M:[M];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let Y=0;Y<fe.length;Y++){const we=fe[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(36161,F.__webglColorRenderbuffer[Y]);const Ae=s.convert(we.format,we.encoding),be=s.convert(we.type),Ee=y(we.internalFormat,Ae,be,we.encoding,T.isXRRenderTarget===!0),xe=ce(T);i.renderbufferStorageMultisample(36161,xe,Ee,T.width,T.height),i.framebufferRenderbuffer(36160,36064+Y,36161,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(36161,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),We(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,$.__webglTexture),V(34067,M,ge);for(let fe=0;fe<6;fe++)_e(F.__webglFramebuffer[fe],T,M,36064,34069+fe);C(M,ge)&&P(34067),t.unbindTexture()}else if(le){const fe=T.texture;for(let Y=0,we=fe.length;Y<we;Y++){const Ae=fe[Y],be=n.get(Ae);t.bindTexture(3553,be.__webglTexture),V(3553,Ae,ge),_e(F.__webglFramebuffer,T,Ae,36064+Y,3553),C(Ae,ge)&&P(3553)}t.unbindTexture()}else{let fe=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?fe=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,$.__webglTexture),V(fe,M,ge),_e(F.__webglFramebuffer,T,M,36064,fe),C(M,ge)&&P(fe),t.unbindTexture()}T.depthBuffer&&R(T)}function J(T){const M=b(T)||a,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let $=0,Q=F.length;$<Q;$++){const le=F[$];if(C(le,M)){const ge=T.isWebGLCubeRenderTarget?34067:3553,fe=n.get(le).__webglTexture;t.bindTexture(ge,fe),P(ge),t.unbindTexture()}}}function ae(T){if(a&&T.samples>0&&te(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,$=T.height;let Q=16384;const le=[],ge=T.stencilBuffer?33306:36096,fe=n.get(T),Y=T.isWebGLMultipleRenderTargets===!0;if(Y)for(let we=0;we<M.length;we++)t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,fe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,fe.__webglFramebuffer);for(let we=0;we<M.length;we++){le.push(36064+we),T.depthBuffer&&le.push(ge);const Ae=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ae===!1&&(T.depthBuffer&&(Q|=256),T.stencilBuffer&&(Q|=1024)),Y&&i.framebufferRenderbuffer(36008,36064,36161,fe.__webglColorRenderbuffer[we]),Ae===!0&&(i.invalidateFramebuffer(36008,[ge]),i.invalidateFramebuffer(36009,[ge])),Y){const be=n.get(M[we]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,be,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,Q,9728),p&&i.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let we=0;we<M.length;we++){t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+we,36161,fe.__webglColorRenderbuffer[we]);const Ae=n.get(M[we]).__webglTexture;t.bindFramebuffer(36160,fe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+we,3553,Ae,0)}t.bindFramebuffer(36009,fe.__webglMultisampledFramebuffer)}}function ce(T){return Math.min(h,T.samples)}function te(T){const M=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function he(T){const M=o.render.frame;g.get(T)!==M&&(g.set(T,M),T.update())}function re(T,M){const F=T.encoding,$=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Nc||F!==pr&&(F===Ze?a===!1?e.has("EXT_sRGB")===!0&&$===Pn?(T.format=Nc,T.minFilter=mn,T.generateMipmaps=!1):M=Pm.sRGBToLinear(M):($!==Pn||Q!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),M}this.allocateTextureUnit=k,this.resetTextureUnits=j,this.setTexture2D=ie,this.setTexture2DArray=ye,this.setTexture3D=z,this.setTextureCube=oe,this.rebindTextures=G,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=te}function eE(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===dr)return 5121;if(s===$b)return 32819;if(s===Xb)return 32820;if(s===Gb)return 5120;if(s===Wb)return 5122;if(s===Em)return 5123;if(s===qb)return 5124;if(s===tr)return 5125;if(s===nr)return 5126;if(s===Qs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===jb)return 6406;if(s===Pn)return 6408;if(s===Yb)return 6409;if(s===Kb)return 6410;if(s===lr)return 6402;if(s===cs)return 34041;if(s===Nc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Zb)return 6403;if(s===Jb)return 36244;if(s===Qb)return 33319;if(s===eM)return 33320;if(s===tM)return 36249;if(s===xl||s===vl||s===yl||s===bl)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===xl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===xl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===yl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vf||s===Gf||s===Wf||s===qf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Vf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$f||s===Xf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$f)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Xf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jf||s===Yf||s===Kf||s===Zf||s===Jf||s===Qf||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qf)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===eh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===th)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ih)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===oh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ah)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ml)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ml)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===iM||s===lh||s===ch||s===uh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ml)return a.COMPRESSED_RED_RGTC1_EXT;if(s===lh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ch)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class tE extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $o extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nE={type:"move"};class Yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $o;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class iE extends Wt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:lr,u!==lr&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===lr&&(n=tr),n===void 0&&u===cs&&(n=Xr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1}}class rE extends ms{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const d=t.getContextAttributes();let m=null,_=null;const v=[],x=[],b=new Set,S=new Map,C=new gn;C.layers.enable(1),C.viewport=new St;const P=new gn;P.layers.enable(2),P.viewport=new St;const y=[C,P],w=new tE;w.layers.enable(1),w.layers.enable(2);let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let oe=v[z];return oe===void 0&&(oe=new Yl,v[z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(z){let oe=v[z];return oe===void 0&&(oe=new Yl,v[z]=oe),oe.getGripSpace()},this.getHand=function(z){let oe=v[z];return oe===void 0&&(oe=new Yl,v[z]=oe),oe.getHandSpace()};function X(z){const oe=x.indexOf(z.inputSource);if(oe===-1)return;const de=v[oe];de!==void 0&&de.dispatchEvent({type:z.type,data:z.inputSource})}function O(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",L);for(let z=0;z<v.length;z++){const oe=x[z];oe!==null&&(x[z]=null,v[z].disconnect(oe))}D=null,U=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,_=null,ye.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",O),r.addEventListener("inputsourceschange",L),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),_=new Di(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:dr,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let oe=null,de=null,pe=null;d.depth&&(pe=d.stencil?35056:33190,oe=d.stencil?cs:lr,de=d.stencil?Xr:tr);const V={colorFormat:32856,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(V),r.updateRenderState({layers:[f]}),_=new Di(f.textureWidth,f.textureHeight,{format:Pn,type:dr,depthTexture:new iE(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const Pe=e.properties.get(_);Pe.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ye.setContext(r),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(z){for(let oe=0;oe<z.removed.length;oe++){const de=z.removed[oe],pe=x.indexOf(de);pe>=0&&(x[pe]=null,v[pe].disconnect(de))}for(let oe=0;oe<z.added.length;oe++){const de=z.added[oe];let pe=x.indexOf(de);if(pe===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=x.length){x.push(de),pe=Pe;break}else if(x[Pe]===null){x[Pe]=de,pe=Pe;break}if(pe===-1)break}const V=v[pe];V&&V.connect(de)}}const H=new q,W=new q;function j(z,oe,de){H.setFromMatrixPosition(oe.matrixWorld),W.setFromMatrixPosition(de.matrixWorld);const pe=H.distanceTo(W),V=oe.projectionMatrix.elements,Pe=de.projectionMatrix.elements,Se=V[14]/(V[10]-1),Me=V[14]/(V[10]+1),_e=(V[9]+1)/V[5],We=(V[9]-1)/V[5],A=(V[8]-1)/V[0],R=(Pe[8]+1)/Pe[0],G=Se*A,ne=Se*R,J=pe/(-A+R),ae=J*-A;oe.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ae),z.translateZ(J),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const ce=Se+J,te=Me+J,he=G-ae,re=ne+(pe-ae),T=_e*Me/te*ce,M=We*Me/te*ce;z.projectionMatrix.makePerspective(he,re,T,M,ce,te)}function k(z,oe){oe===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(oe.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;w.near=P.near=C.near=z.near,w.far=P.far=C.far=z.far,(D!==w.near||U!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,U=w.far);const oe=z.parent,de=w.cameras;k(w,oe);for(let V=0;V<de.length;V++)k(de[V],oe);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),z.matrix.copy(w.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const pe=z.children;for(let V=0,Pe=pe.length;V<Pe;V++)pe[V].updateMatrixWorld(!0);de.length===2?j(w,C,P):w.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.getPlanes=function(){return b};let se=null;function ie(z,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let pe=!1;de.length!==w.cameras.length&&(w.cameras.length=0,pe=!0);for(let V=0;V<de.length;V++){const Pe=de[V];let Se=null;if(p!==null)Se=p.getViewport(Pe);else{const _e=h.getViewSubImage(f,Pe);Se=_e.viewport,V===0&&(e.setRenderTargetTextures(_,_e.colorTexture,f.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(_))}let Me=y[V];Me===void 0&&(Me=new gn,Me.layers.enable(V),Me.viewport=new St,y[V]=Me),Me.matrix.fromArray(Pe.transform.matrix),Me.projectionMatrix.fromArray(Pe.projectionMatrix),Me.viewport.set(Se.x,Se.y,Se.width,Se.height),V===0&&w.matrix.copy(Me.matrix),pe===!0&&w.cameras.push(Me)}}for(let de=0;de<v.length;de++){const pe=x[de],V=v[de];pe!==null&&V!==void 0&&V.update(pe,oe,c||o)}if(se&&se(z,oe),oe.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:oe.detectedPlanes});let de=null;for(const pe of b)oe.detectedPlanes.has(pe)||(de===null&&(de=[]),de.push(pe));if(de!==null)for(const pe of de)b.delete(pe),S.delete(pe),n.dispatchEvent({type:"planeremoved",data:pe});for(const pe of oe.detectedPlanes)if(!b.has(pe))b.add(pe),S.set(pe,oe.lastChangedTime),n.dispatchEvent({type:"planeadded",data:pe});else{const V=S.get(pe);pe.lastChangedTime>V&&(S.set(pe,pe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:pe}))}}g=null}const ye=new Hm;ye.setAnimationLoop(ie),this.setAnimationLoop=function(z){se=z},this.dispose=function(){}}}function sE(i,e){function t(d,m){m.color.getRGB(d.fogColor.value,Nm(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),u(d,m)):m.isMeshPhongMaterial?(r(d,m),c(d,m)):m.isMeshStandardMaterial?(r(d,m),h(d,m),m.isMeshPhysicalMaterial&&f(d,m,x)):m.isMeshMatcapMaterial?(r(d,m),p(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),g(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,_,v):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===rn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===rn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const b=i.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let v;m.map?v=m.map:m.specularMap?v=m.specularMap:m.displacementMap?v=m.displacementMap:m.normalMap?v=m.normalMap:m.bumpMap?v=m.bumpMap:m.roughnessMap?v=m.roughnessMap:m.metalnessMap?v=m.metalnessMap:m.alphaMap?v=m.alphaMap:m.emissiveMap?v=m.emissiveMap:m.clearcoatMap?v=m.clearcoatMap:m.clearcoatNormalMap?v=m.clearcoatNormalMap:m.clearcoatRoughnessMap?v=m.clearcoatRoughnessMap:m.iridescenceMap?v=m.iridescenceMap:m.iridescenceThicknessMap?v=m.iridescenceThicknessMap:m.specularIntensityMap?v=m.specularIntensityMap:m.specularColorMap?v=m.specularColorMap:m.transmissionMap?v=m.transmissionMap:m.thicknessMap?v=m.thicknessMap:m.sheenColorMap?v=m.sheenColorMap:m.sheenRoughnessMap&&(v=m.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,_,v){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=v*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===rn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function oE(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(v,x){const b=x.program;n.uniformBlockBinding(v,b)}function c(v,x){let b=r[v.id];b===void 0&&(g(v),b=u(v),r[v.id]=b,v.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(v,S);const C=e.render.frame;s[v.id]!==C&&(f(v),s[v.id]=C)}function u(v){const x=h();v.__bindingPointIndex=x;const b=i.createBuffer(),S=v.__size,C=v.usage;return i.bindBuffer(35345,b),i.bufferData(35345,S,C),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,b),b}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],b=v.uniforms,S=v.__cache;i.bindBuffer(35345,x);for(let C=0,P=b.length;C<P;C++){const y=b[C];if(p(y,C,S)===!0){const w=y.__offset,D=Array.isArray(y.value)?y.value:[y.value];let U=0;for(let X=0;X<D.length;X++){const O=D[X],L=d(O);typeof O=="number"?(y.__data[0]=O,i.bufferSubData(35345,w+U,y.__data)):O.isMatrix3?(y.__data[0]=O.elements[0],y.__data[1]=O.elements[1],y.__data[2]=O.elements[2],y.__data[3]=O.elements[0],y.__data[4]=O.elements[3],y.__data[5]=O.elements[4],y.__data[6]=O.elements[5],y.__data[7]=O.elements[0],y.__data[8]=O.elements[6],y.__data[9]=O.elements[7],y.__data[10]=O.elements[8],y.__data[11]=O.elements[0]):(O.toArray(y.__data,U),U+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,w,y.__data)}}i.bindBuffer(35345,null)}function p(v,x,b){const S=v.value;if(b[x]===void 0){if(typeof S=="number")b[x]=S;else{const C=Array.isArray(S)?S:[S],P=[];for(let y=0;y<C.length;y++)P.push(C[y].clone());b[x]=P}return!0}else if(typeof S=="number"){if(b[x]!==S)return b[x]=S,!0}else{const C=Array.isArray(b[x])?b[x]:[b[x]],P=Array.isArray(S)?S:[S];for(let y=0;y<C.length;y++){const w=C[y];if(w.equals(P[y])===!1)return w.copy(P[y]),!0}}return!1}function g(v){const x=v.uniforms;let b=0;const S=16;let C=0;for(let P=0,y=x.length;P<y;P++){const w=x[P],D={boundary:0,storage:0},U=Array.isArray(w.value)?w.value:[w.value];for(let X=0,O=U.length;X<O;X++){const L=U[X],H=d(L);D.boundary+=H.boundary,D.storage+=H.storage}if(w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,P>0){C=b%S;const X=S-C;C!==0&&X-D.boundary<0&&(b+=S-C,w.__offset=b)}b+=D.storage}return C=b%S,C>0&&(b+=S-C),v.__size=b,v.__cache={},this}function d(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function _(){for(const v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function aE(){const i=to("canvas");return i.style.display="block",i}function Xm(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:aE(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pr,this.physicallyCorrectLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;const d=this;let m=!1,_=0,v=0,x=null,b=-1,S=null;const C=new St,P=new St;let y=null,w=e.width,D=e.height,U=1,X=null,O=null;const L=new St(0,0,w,D),H=new St(0,0,w,D);let W=!1;const j=new Bm;let k=!1,se=!1,ie=null;const ye=new wt,z=new $e,oe=new q,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return x===null?U:1}let V=t;function Pe(E,B){for(let Z=0;Z<E.length;Z++){const N=E[Z],ee=e.getContext(N,B);if(ee!==null)return ee}return null}try{const E={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Au}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Le,!1),V===null){const B=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&B.shift(),V=Pe(B,E),V===null)throw Pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Se,Me,_e,We,A,R,G,ne,J,ae,ce,te,he,re,T,M,F,$,Q,le,ge,fe,Y,we;function Ae(){Se=new xw(V),Me=new hw(V,Se,i),Se.init(Me),fe=new eE(V,Se,Me),_e=new JT(V,Se,Me),We=new bw,A=new zT,R=new QT(V,Se,_e,A,Me,fe,We),G=new pw(d),ne=new _w(d),J=new RM(V,Me),Y=new uw(V,Se,J,Me),ae=new vw(V,J,We,Y),ce=new Tw(V,ae,J,We),Q=new ww(V,Me,R),M=new dw(A),te=new UT(d,G,ne,Se,Me,Y,M),he=new sE(d,A),re=new BT,T=new $T(Se,Me),$=new cw(d,G,ne,_e,ce,u,o),F=new ZT(d,ce,Me),we=new oE(V,We,Me,_e),le=new fw(V,Se,We,Me),ge=new yw(V,Se,We,Me),We.programs=te.programs,d.capabilities=Me,d.extensions=Se,d.properties=A,d.renderLists=re,d.shadowMap=F,d.state=_e,d.info=We}Ae();const be=new rE(d,V);this.xr=be,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const E=Se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(w,D,!1))},this.getSize=function(E){return E.set(w,D)},this.setSize=function(E,B,Z){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=E,D=B,e.width=Math.floor(E*U),e.height=Math.floor(B*U),Z!==!1&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(w*U,D*U).floor()},this.setDrawingBufferSize=function(E,B,Z){w=E,D=B,U=Z,e.width=Math.floor(E*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(L)},this.setViewport=function(E,B,Z,N){E.isVector4?L.set(E.x,E.y,E.z,E.w):L.set(E,B,Z,N),_e.viewport(C.copy(L).multiplyScalar(U).floor())},this.getScissor=function(E){return E.copy(H)},this.setScissor=function(E,B,Z,N){E.isVector4?H.set(E.x,E.y,E.z,E.w):H.set(E,B,Z,N),_e.scissor(P.copy(H).multiplyScalar(U).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(E){_e.setScissorTest(W=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){O=E},this.getClearColor=function(E){return E.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(E=!0,B=!0,Z=!0){let N=0;E&&(N|=16384),B&&(N|=256),Z&&(N|=1024),V.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),re.dispose(),T.dispose(),A.dispose(),G.dispose(),ne.dispose(),ce.dispose(),Y.dispose(),we.dispose(),te.dispose(),be.dispose(),be.removeEventListener("sessionstart",ve),be.removeEventListener("sessionend",Te),ie&&(ie.dispose(),ie=null),qe.stop()};function Ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const E=We.autoReset,B=F.enabled,Z=F.autoUpdate,N=F.needsUpdate,ee=F.type;Ae(),We.autoReset=E,F.enabled=B,F.autoUpdate=Z,F.needsUpdate=N,F.type=ee}function Le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xe(E){const B=E.target;B.removeEventListener("dispose",Xe),_t(B)}function _t(E){I(E),A.remove(E)}function I(E){const B=A.get(E).programs;B!==void 0&&(B.forEach(function(Z){te.releaseProgram(Z)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Z,N,ee,Ce){B===null&&(B=de);const De=ee.isMesh&&ee.matrixWorld.determinant()<0,Fe=Zm(E,B,Z,N,ee);_e.setMaterial(N,De);let Ne=Z.index,Ve=1;N.wireframe===!0&&(Ne=ae.getWireframeAttribute(Z),Ve=2);const ze=Z.drawRange,ke=Z.attributes.position;let at=ze.start*Ve,$t=(ze.start+ze.count)*Ve;Ce!==null&&(at=Math.max(at,Ce.start*Ve),$t=Math.min($t,(Ce.start+Ce.count)*Ve)),Ne!==null?(at=Math.max(at,0),$t=Math.min($t,Ne.count)):ke!=null&&(at=Math.max(at,0),$t=Math.min($t,ke.count));const qn=$t-at;if(qn<0||qn===1/0)return;Y.setup(ee,N,Fe,Z,Ne);let Ni,lt=le;if(Ne!==null&&(Ni=J.get(Ne),lt=ge,lt.setIndex(Ni)),ee.isMesh)N.wireframe===!0?(_e.setLineWidth(N.wireframeLinewidth*pe()),lt.setMode(1)):lt.setMode(4);else if(ee.isLine){let Be=N.linewidth;Be===void 0&&(Be=1),_e.setLineWidth(Be*pe()),ee.isLineSegments?lt.setMode(1):ee.isLineLoop?lt.setMode(2):lt.setMode(3)}else ee.isPoints?lt.setMode(0):ee.isSprite&&lt.setMode(4);if(ee.isInstancedMesh)lt.renderInstances(at,qn,ee.count);else if(Z.isInstancedBufferGeometry){const Be=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,qa=Math.min(Z.instanceCount,Be);lt.renderInstances(at,qn,qa)}else lt.render(at,qn)},this.compile=function(E,B){function Z(N,ee,Ce){N.transparent===!0&&N.side===bi&&N.forceSinglePass===!1?(N.side=rn,N.needsUpdate=!0,ln(N,ee,Ce),N.side=Li,N.needsUpdate=!0,ln(N,ee,Ce),N.side=bi):ln(N,ee,Ce)}f=T.get(E),f.init(),g.push(f),E.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(d.physicallyCorrectLights),E.traverse(function(N){const ee=N.material;if(ee)if(Array.isArray(ee))for(let Ce=0;Ce<ee.length;Ce++){const De=ee[Ce];Z(De,E,N)}else Z(ee,E,N)}),g.pop(),f=null};let K=null;function ue(E){K&&K(E)}function ve(){qe.stop()}function Te(){qe.start()}const qe=new Hm;qe.setAnimationLoop(ue),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(E){K=E,be.setAnimationLoop(E),E===null?qe.stop():qe.start()},be.addEventListener("sessionstart",ve),be.addEventListener("sessionend",Te),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(B),B=be.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,B,x),f=T.get(E,g.length),f.init(),g.push(f),ye.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(ye),se=this.localClippingEnabled,k=M.init(this.clippingPlanes,se),h=re.get(E,p.length),h.init(),p.push(h),xt(E,B,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(X,O),k===!0&&M.beginShadows();const Z=f.state.shadowsArray;if(F.render(Z,E,B),k===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(h,E),f.setupLights(d.physicallyCorrectLights),B.isArrayCamera){const N=B.cameras;for(let ee=0,Ce=N.length;ee<Ce;ee++){const De=N[ee];Tt(h,E,De,De.viewport)}}else Tt(h,E,B);x!==null&&(R.updateMultisampleRenderTarget(x),R.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(d,E,B),Y.resetDefaultState(),b=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function xt(E,B,Z,N){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){N&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);const De=ce.update(E),Fe=E.material;Fe.visible&&h.push(E,De,Fe,Z,oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==We.render.frame&&(E.skeleton.update(),E.skeleton.frame=We.render.frame),!E.frustumCulled||j.intersectsObject(E))){N&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);const De=ce.update(E),Fe=E.material;if(Array.isArray(Fe)){const Ne=De.groups;for(let Ve=0,ze=Ne.length;Ve<ze;Ve++){const ke=Ne[Ve],at=Fe[ke.materialIndex];at&&at.visible&&h.push(E,De,at,Z,oe.z,ke)}}else Fe.visible&&h.push(E,De,Fe,Z,oe.z,null)}}const Ce=E.children;for(let De=0,Fe=Ce.length;De<Fe;De++)xt(Ce[De],B,Z,N)}function Tt(E,B,Z,N){const ee=E.opaque,Ce=E.transmissive,De=E.transparent;f.setupLightsView(Z),k===!0&&M.setGlobalState(d.clippingPlanes,Z),Ce.length>0&&Fi(ee,B,Z),N&&_e.viewport(C.copy(N)),ee.length>0&&Qe(ee,B,Z),Ce.length>0&&Qe(Ce,B,Z),De.length>0&&Qe(De,B,Z),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Fi(E,B,Z){const N=Me.isWebGL2;ie===null&&(ie=new Di(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Qs:dr,minFilter:Js,samples:N&&s===!0?4:0})),d.getDrawingBufferSize(z),N?ie.setSize(z.x,z.y):ie.setSize(Uc(z.x),Uc(z.y));const ee=d.getRenderTarget();d.setRenderTarget(ie),d.clear();const Ce=d.toneMapping;d.toneMapping=ri,Qe(E,B,Z),d.toneMapping=Ce,R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie),d.setRenderTarget(ee)}function Qe(E,B,Z){const N=B.isScene===!0?B.overrideMaterial:null;for(let ee=0,Ce=E.length;ee<Ce;ee++){const De=E[ee],Fe=De.object,Ne=De.geometry,Ve=N===null?De.material:N,ze=De.group;Fe.layers.test(Z.layers)&&Wn(Fe,B,Z,Ne,Ve,ze)}}function Wn(E,B,Z,N,ee,Ce){E.onBeforeRender(d,B,Z,N,ee,Ce),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ee.onBeforeRender(d,B,Z,N,E,Ce),ee.transparent===!0&&ee.side===bi&&ee.forceSinglePass===!1?(ee.side=rn,ee.needsUpdate=!0,d.renderBufferDirect(Z,B,N,ee,E,Ce),ee.side=Li,ee.needsUpdate=!0,d.renderBufferDirect(Z,B,N,ee,E,Ce),ee.side=bi):d.renderBufferDirect(Z,B,N,ee,E,Ce),E.onAfterRender(d,B,Z,N,ee,Ce)}function ln(E,B,Z){B.isScene!==!0&&(B=de);const N=A.get(E),ee=f.state.lights,Ce=f.state.shadowsArray,De=ee.state.version,Fe=te.getParameters(E,ee.state,Ce,B,Z),Ne=te.getProgramCacheKey(Fe);let Ve=N.programs;N.environment=E.isMeshStandardMaterial?B.environment:null,N.fog=B.fog,N.envMap=(E.isMeshStandardMaterial?ne:G).get(E.envMap||N.environment),Ve===void 0&&(E.addEventListener("dispose",Xe),Ve=new Map,N.programs=Ve);let ze=Ve.get(Ne);if(ze!==void 0){if(N.currentProgram===ze&&N.lightsStateVersion===De)return Du(E,Fe),ze}else Fe.uniforms=te.getUniforms(E),E.onBuild(Z,Fe,d),E.onBeforeCompile(Fe,d),ze=te.acquireProgram(Fe,Ne),Ve.set(Ne,ze),N.uniforms=Fe.uniforms;const ke=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=M.uniform),Du(E,Fe),N.needsLights=Qm(E),N.lightsStateVersion=De,N.needsLights&&(ke.ambientLightColor.value=ee.state.ambient,ke.lightProbe.value=ee.state.probe,ke.directionalLights.value=ee.state.directional,ke.directionalLightShadows.value=ee.state.directionalShadow,ke.spotLights.value=ee.state.spot,ke.spotLightShadows.value=ee.state.spotShadow,ke.rectAreaLights.value=ee.state.rectArea,ke.ltc_1.value=ee.state.rectAreaLTC1,ke.ltc_2.value=ee.state.rectAreaLTC2,ke.pointLights.value=ee.state.point,ke.pointLightShadows.value=ee.state.pointShadow,ke.hemisphereLights.value=ee.state.hemi,ke.directionalShadowMap.value=ee.state.directionalShadowMap,ke.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ke.spotShadowMap.value=ee.state.spotShadowMap,ke.spotLightMatrix.value=ee.state.spotLightMatrix,ke.spotLightMap.value=ee.state.spotLightMap,ke.pointShadowMap.value=ee.state.pointShadowMap,ke.pointShadowMatrix.value=ee.state.pointShadowMatrix);const at=ze.getUniforms(),$t=ea.seqWithValue(at.seq,ke);return N.currentProgram=ze,N.uniformsList=$t,ze}function Du(E,B){const Z=A.get(E);Z.outputEncoding=B.outputEncoding,Z.instancing=B.instancing,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function Zm(E,B,Z,N,ee){B.isScene!==!0&&(B=de),R.resetTextureUnits();const Ce=B.fog,De=N.isMeshStandardMaterial?B.environment:null,Fe=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:pr,Ne=(N.isMeshStandardMaterial?ne:G).get(N.envMap||De),Ve=N.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!N.normalMap&&!!Z.attributes.tangent,ke=!!Z.morphAttributes.position,at=!!Z.morphAttributes.normal,$t=!!Z.morphAttributes.color,qn=N.toneMapped?d.toneMapping:ri,Ni=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,lt=Ni!==void 0?Ni.length:0,Be=A.get(N),qa=f.state.lights;if(k===!0&&(se===!0||E!==S)){const Xt=E===S&&N.id===b;M.setState(N,E,Xt)}let vt=!1;N.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==qa.state.version||Be.outputEncoding!==Fe||ee.isInstancedMesh&&Be.instancing===!1||!ee.isInstancedMesh&&Be.instancing===!0||ee.isSkinnedMesh&&Be.skinning===!1||!ee.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Ne||N.fog===!0&&Be.fog!==Ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==M.numPlanes||Be.numIntersection!==M.numIntersection)||Be.vertexAlphas!==Ve||Be.vertexTangents!==ze||Be.morphTargets!==ke||Be.morphNormals!==at||Be.morphColors!==$t||Be.toneMapping!==qn||Me.isWebGL2===!0&&Be.morphTargetsCount!==lt)&&(vt=!0):(vt=!0,Be.__version=N.version);let Ui=Be.currentProgram;vt===!0&&(Ui=ln(N,B,ee));let Iu=!1,_s=!1,$a=!1;const Dt=Ui.getUniforms(),zi=Be.uniforms;if(_e.useProgram(Ui.program)&&(Iu=!0,_s=!0,$a=!0),N.id!==b&&(b=N.id,_s=!0),Iu||S!==E){if(Dt.setValue(V,"projectionMatrix",E.projectionMatrix),Me.logarithmicDepthBuffer&&Dt.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,_s=!0,$a=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Xt=Dt.map.cameraPosition;Xt!==void 0&&Xt.setValue(V,oe.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Dt.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||ee.isSkinnedMesh)&&Dt.setValue(V,"viewMatrix",E.matrixWorldInverse)}if(ee.isSkinnedMesh){Dt.setOptional(V,ee,"bindMatrix"),Dt.setOptional(V,ee,"bindMatrixInverse");const Xt=ee.skeleton;Xt&&(Me.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Dt.setValue(V,"boneTexture",Xt.boneTexture,R),Dt.setValue(V,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xa=Z.morphAttributes;if((Xa.position!==void 0||Xa.normal!==void 0||Xa.color!==void 0&&Me.isWebGL2===!0)&&Q.update(ee,Z,N,Ui),(_s||Be.receiveShadow!==ee.receiveShadow)&&(Be.receiveShadow=ee.receiveShadow,Dt.setValue(V,"receiveShadow",ee.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(zi.envMap.value=Ne,zi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),_s&&(Dt.setValue(V,"toneMappingExposure",d.toneMappingExposure),Be.needsLights&&Jm(zi,$a),Ce&&N.fog===!0&&he.refreshFogUniforms(zi,Ce),he.refreshMaterialUniforms(zi,N,U,D,ie),ea.upload(V,Be.uniformsList,zi,R)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ea.upload(V,Be.uniformsList,zi,R),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Dt.setValue(V,"center",ee.center),Dt.setValue(V,"modelViewMatrix",ee.modelViewMatrix),Dt.setValue(V,"normalMatrix",ee.normalMatrix),Dt.setValue(V,"modelMatrix",ee.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Xt=N.uniformsGroups;for(let ja=0,eg=Xt.length;ja<eg;ja++)if(Me.isWebGL2){const Ou=Xt[ja];we.update(Ou,Ui),we.bind(Ou,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function Jm(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Qm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,B,Z){A.get(E.texture).__webglTexture=B,A.get(E.depthTexture).__webglTexture=Z;const N=A.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=Z===void 0,N.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const Z=A.get(E);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,Z=0){x=E,_=B,v=Z;let N=!0,ee=null,Ce=!1,De=!1;if(E){const Ne=A.get(E);Ne.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),N=!1):Ne.__webglFramebuffer===void 0?R.setupRenderTarget(E):Ne.__hasExternalTextures&&R.rebindTextures(E,A.get(E.texture).__webglTexture,A.get(E.depthTexture).__webglTexture);const Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(De=!0);const ze=A.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ee=ze[B],Ce=!0):Me.isWebGL2&&E.samples>0&&R.useMultisampledRTT(E)===!1?ee=A.get(E).__webglMultisampledFramebuffer:ee=ze,C.copy(E.viewport),P.copy(E.scissor),y=E.scissorTest}else C.copy(L).multiplyScalar(U).floor(),P.copy(H).multiplyScalar(U).floor(),y=W;if(_e.bindFramebuffer(36160,ee)&&Me.drawBuffers&&N&&_e.drawBuffers(E,ee),_e.viewport(C),_e.scissor(P),_e.setScissorTest(y),Ce){const Ne=A.get(E.texture);V.framebufferTexture2D(36160,36064,34069+B,Ne.__webglTexture,Z)}else if(De){const Ne=A.get(E.texture),Ve=B||0;V.framebufferTextureLayer(36160,36064,Ne.__webglTexture,Z||0,Ve)}b=-1},this.readRenderTargetPixels=function(E,B,Z,N,ee,Ce,De){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=A.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){_e.bindFramebuffer(36160,Fe);try{const Ne=E.texture,Ve=Ne.format,ze=Ne.type;if(Ve!==Pn&&fe.convert(Ve)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=ze===Qs&&(Se.has("EXT_color_buffer_half_float")||Me.isWebGL2&&Se.has("EXT_color_buffer_float"));if(ze!==dr&&fe.convert(ze)!==V.getParameter(35738)&&!(ze===nr&&(Me.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-N&&Z>=0&&Z<=E.height-ee&&V.readPixels(B,Z,N,ee,fe.convert(Ve),fe.convert(ze),Ce)}finally{const Ne=x!==null?A.get(x).__webglFramebuffer:null;_e.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(E,B,Z=0){const N=Math.pow(2,-Z),ee=Math.floor(B.image.width*N),Ce=Math.floor(B.image.height*N);R.setTexture2D(B,0),V.copyTexSubImage2D(3553,Z,0,0,E.x,E.y,ee,Ce),_e.unbindTexture()},this.copyTextureToTexture=function(E,B,Z,N=0){const ee=B.image.width,Ce=B.image.height,De=fe.convert(Z.format),Fe=fe.convert(Z.type);R.setTexture2D(Z,0),V.pixelStorei(37440,Z.flipY),V.pixelStorei(37441,Z.premultiplyAlpha),V.pixelStorei(3317,Z.unpackAlignment),B.isDataTexture?V.texSubImage2D(3553,N,E.x,E.y,ee,Ce,De,Fe,B.image.data):B.isCompressedTexture?V.compressedTexSubImage2D(3553,N,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,De,B.mipmaps[0].data):V.texSubImage2D(3553,N,E.x,E.y,De,Fe,B.image),N===0&&Z.generateMipmaps&&V.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(E,B,Z,N,ee=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=E.max.x-E.min.x+1,De=E.max.y-E.min.y+1,Fe=E.max.z-E.min.z+1,Ne=fe.convert(N.format),Ve=fe.convert(N.type);let ze;if(N.isData3DTexture)R.setTexture3D(N,0),ze=32879;else if(N.isDataArrayTexture)R.setTexture2DArray(N,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,N.flipY),V.pixelStorei(37441,N.premultiplyAlpha),V.pixelStorei(3317,N.unpackAlignment);const ke=V.getParameter(3314),at=V.getParameter(32878),$t=V.getParameter(3316),qn=V.getParameter(3315),Ni=V.getParameter(32877),lt=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;V.pixelStorei(3314,lt.width),V.pixelStorei(32878,lt.height),V.pixelStorei(3316,E.min.x),V.pixelStorei(3315,E.min.y),V.pixelStorei(32877,E.min.z),Z.isDataTexture||Z.isData3DTexture?V.texSubImage3D(ze,ee,B.x,B.y,B.z,Ce,De,Fe,Ne,Ve,lt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(ze,ee,B.x,B.y,B.z,Ce,De,Fe,Ne,lt.data)):V.texSubImage3D(ze,ee,B.x,B.y,B.z,Ce,De,Fe,Ne,Ve,lt),V.pixelStorei(3314,ke),V.pixelStorei(32878,at),V.pixelStorei(3316,$t),V.pixelStorei(3315,qn),V.pixelStorei(32877,Ni),ee===0&&N.generateMipmaps&&V.generateMipmap(ze),_e.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),_e.unbindTexture()},this.resetState=function(){_=0,v=0,x=null,_e.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class lE extends Xm{}lE.prototype.isWebGL1Renderer=!0;class cE extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const Xh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class uE{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const fE=new uE;class jm{constructor(e){this.manager=e!==void 0?e:fE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class hE extends jm{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=to("img");function l(){u(),Xh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class dE extends jm{constructor(e){super(e)}load(e,t,n,r){const s=new Wt,o=new hE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class pE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jh(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Au}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Au);const mE=(i,e,t)=>(1-t)*i+t*e;class gE{constructor(e){this.DOM={scrollable:e.dom,scrollspeed:[],scrollactive:[]},this.activeCallback=e.activeCallback,this.docScroll=0,this.scrollToRender=0,this.current=0,this.ease=.1,this.speed=0,this.speedTarget=0,this.scrollTo={target:0,executed:!0},this.setSize(),this.getScroll(),this.init(),this.initEvents()}init(){for(const e in this.renderedStyles)this.current=this.scrollToRender=this.getScroll();this.setPosition(),this.shouldRender=!0}getScroll(){return this.docScroll=this.current=window.pageYOffset||document.documentElement.scrollTop,this.docScroll}initEvents(){window.addEventListener("resize",()=>this.setSize()),window.addEventListener("scroll",()=>{this.getScroll()})}setSize(){document.body.style.height=this.DOM.scrollable.scrollHeight>window.innerHeight?`${this.DOM.scrollable.scrollHeight}px`:`${window.innerHeight}px`}setPosition(){(Math.round(this.scrollToRender)!==Math.round(this.current)||this.scrollToRender<10||!this.scrollTo.executed)&&(this.DOM.scrollable.style.transform=`translate3d(0,${-1*this.scrollToRender}px,0)`);for(const e of this.DOM.scrollspeed){const t=e.elNode.getBoundingClientRect();let n=e.scrollSpeed?e.scrollSpeed:!1;n&&t.bottom>0&&t.top<window.innerHeight&&(e.elNode.style.transform=`translate3d(0,${-1*this.scrollToRender*n}px,0)`)}for(const e of this.DOM.scrollactive){const t=e.elNode.getBoundingClientRect(),n=e.scrollActive?(1-e.scrollActive)*window.innerHeight:0;t.bottom>n&&t.top<window.innerHeight-n?e.elNode.classList.contains("active")||e.elNode.classList.add("active"):e.elNode.classList.contains("active")&&e.elNode.classList.remove("active")}}render(e,t){if(this.setSize(),e&&t)window.scrollBy(0,e);else if(e&&t===!1)this.scrollTo.executed=!1,this.scrollTo.target=Number(e),window.scrollBy(0,e.toString());else if(this.scrollTo.executed)this.scrollToRender=Math.round(mE(this.scrollToRender,this.current,this.ease));else{this.scrollToRender=this.scrollTo.target;const n=10;this.current<=this.scrollToRender+n&&(this.scrollTo.executed=!0)}this.speed=Math.min(Math.abs(this.current-this.scrollToRender),200)/200,this.speedTarget+=(this.speed-this.speedTarget)*.2,this.setPosition()}}const _E={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Wa{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xE=new Vm(-1,1,1,-1,0,1),Lu=new Oi;Lu.setAttribute("position",new si([-1,3,0,-1,-1,0,3,-1,0],3));Lu.setAttribute("uv",new si([0,2,0,0,2,0],2));class vE{constructor(e){this._mesh=new zn(Lu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ym extends Wa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Um.clone(e.uniforms),this.material=new Gn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vE(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Yh extends Wa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class yE extends Wa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class bE{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new $e);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Di(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ym(_E),this.clock=new pE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Yh!==void 0&&(o instanceof Yh?n=!0:o instanceof yE&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ME extends Wa{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new et}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}var SE=`uniform sampler2D tDiffuse;
varying vec2 vUv;
uniform float scrollSpeed;
void main(){
  vec2 newUV = vUv;
  float area = smoothstep(0.9,0.,vUv.y);
  area = pow(area,4.);
  newUV.x -= (vUv.x - 0.5)*0.1*area*scrollSpeed;
  gl_FragColor = texture2D( tDiffuse, newUV);
}`,wE=`varying vec2 vUv;
uniform float scrollSpeed;

void main() {
  vec3 newposition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition , 1.0 );
}`,TE=`varying float vNoise;
varying vec2 vUv;
uniform sampler2D uImage;
uniform float aniIn;

void main()	{

    vec2 newUV = vUv;

    vec4 imageView =  texture2D( uImage , newUV ) * vec4( 1.0 , 1.0 , 1.0,  aniIn );

    gl_FragColor = imageView;
    gl_FragColor.rgb -= 0.15*vec3(vNoise);
}`,EE=`uniform float time;
uniform vec2 vectorVNoise;
uniform float hoverState;
uniform float aniIn;
varying float vNoise;
varying vec2 vUv;

void main() {
  float distVnoise = distance( uv , vectorVNoise );
  vNoise = 2.0*hoverState*sin(distVnoise*10. - time);

  float distWave = distance( uv , vectorVNoise );

  vec3 newposition = position;

  newposition.z += (( 1. - aniIn ) * 70.0 * sin( distWave * 333. + time ));

  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, ( 1. + ( 0. * (1. - aniIn)) - (hoverState / 20.) ) );

}`,CE=`varying float vNoise;
varying vec2 vUv;
uniform sampler2D uImage;
uniform float time;
uniform float hoverState;
uniform float aniIn;

void main()	{

    vec2 newUV = vUv;

    vec2 p = newUV;
    float x = hoverState + 1.0 - aniIn;
    x = smoothstep(.0,1.0,(x*2.0+p.y-1.0));
    vec4 f = mix(
    texture2D(uImage, (p-.5)*(1.-x)+.5),
    texture2D(uImage, (p-.5)*x+.5),
    x);

    gl_FragColor = f * vec4(1.0 , 1.0, 1.0 , aniIn );
    gl_FragColor.rgb += 0.05*vec3(vNoise);

}`,AE=`vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

uniform float time;
uniform vec2 hover;
uniform float hoverState;
varying float vNoise;
varying vec2 vUv;
uniform float aniIn;

void main() {
  vec3 newposition = position;
  float PI = 3.1415925;

  float noise = cnoise(3.*vec3(position.x,position.y,position.z + time/30.));

  float dist = distance(uv,hover);

  newposition.z += (hoverState + (1.0 - aniIn)) *10.*sin(dist*10. + time);

  vNoise = (hoverState + (1.0 - aniIn) ) *sin(dist*10. - time) ;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );
}`,PE=`varying float vNoise;
varying vec2 vUv;
uniform sampler2D uImage;

uniform float time;
uniform float hoverState;
uniform float aniIn;

uniform float scale; 
uniform float smoothness; 
uniform float seed; 

float random(vec2 co)
{
    highp float a = 12.9;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt= dot(co.xy ,vec2(a,b));
    highp float sn= mod(dt,3.14);
    return fract(sin(sn) * c);
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);
    u = smoothstep(0.,1.,f);

    
    return mix(a, b, u.x) +
    (c - a)* u.y * (1.0 - u.x) +
    (d - b) * u.x * u.y;
}

vec4 transition (vec2 uv) {

    vec4 from = texture2D(uImage, uv ) * vec4( 1. , 1. , 1. , (1.0 * hoverState) );
    vec4 to = texture2D(uImage, uv ) * vec4( 1. , 1. , 1. , 1. );
    float n = noise(uv * 4.0);

    float smoothness = 0.01;

    float p = mix(-smoothness, 1.0 + smoothness, (aniIn - hoverState ) );
    float lower = p - smoothness;
    float higher = p + smoothness;

    float q = smoothstep(lower, higher, n);

    return mix( from, to, 1.0 - q );
}

void main()	{

    gl_FragColor = transition(vUv);
    gl_FragColor.rgb += 0.01*vec3(vNoise);

}`,RE=`uniform float time;
uniform vec2 hover;
uniform float hoverState;
uniform float aniIn;
varying float vNoise;
varying vec2 vUv;

void main() {
  vec3 newposition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1. );
}`;const LE={default:{fragmentShader:TE,vertexShader:EE},scroll:{fragmentShader:SE,vertexShader:wE},example1:{fragmentShader:CE,vertexShader:AE},example2:{fragmentShader:PE,vertexShader:RE}};let jr={scrollPosition:0,scrollInProgress:!1,canvasContainer:null,scrollableContent:null,pointer:{cursor:null,intersects:null},time:0,scene:new cE,materials:[],imageStore:[],scroll:null,currentScroll:0,options:LE,init(i,e){this.canvasContainer=i,this.scrollableContent=e,this.scroll=new gE({dom:this.scrollableContent,activeCallback:this.activeImage}),this.width=this.canvasContainer.offsetWidth,this.height=this.canvasContainer.offsetHeight,this.camera=new gn(70,this.width/this.height,100,2e3),this.camera.position.z=600,this.camera.fov=2*Math.atan(this.height/2/600)*(180/Math.PI),this.renderer=new Xm({alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.canvasContainer.appendChild(this.renderer.domElement),this.setSize(),this.composerPass(),this.render()},setImageMeshPositions(){if(this.imageStore)for(var i=0;i<this.imageStore.length;i++)this.imageStore[i].mesh.position.x=this.imageStore[i].left-this.width/2+this.imageStore[i].width/2,this.imageStore[i].mesh.position.y=-this.imageStore[i].img.getBoundingClientRect().top+this.height/2-this.imageStore[i].height/2},hoverImage(i,e){const t=this.scene.getObjectByName(i);Ps.to(t.material.uniforms.hoverState,{duration:.5,value:e?1:0})},activeImage(i,e){console.log("activeCallback",e);const t=this.scene.getObjectByName(i);Ps.to(t.material.uniforms.aniIn,{duration:1.25,value:e?1:0})},addScrollSpeedElement(i){this.scroll.DOM.scrollspeed.push(i)},addScrollActiveElement(i){this.scroll.DOM.scrollactive.push(i);const e=i.elNode.querySelector("img");e&&this.scroll.DOM.scrollactive.push({elNode:e,scrollActive:i.scrollActive})},addImage(i,e,t){i.dataset.meshId=t;let n=this.options.default.fragmentShader,r=this.options.default.vertexShader;e&&(n=this.options[e].fragmentShader,r=this.options[e].vertexShader);let s,o=i.getBoundingClientRect(),a={top:o.top,left:o.left};a.top+=this.currentScroll,s=new Va(o.width,o.height);let l=new dE().load(i.src);l.needsUpdate=!0;let c=new Gn({uniforms:{time:{value:0},uImage:{value:l},vectorVNoise:{value:new $e(1.5,1.5)},hoverState:{value:0},aniIn:{value:0}},fragmentShader:n,vertexShader:r,transparent:!0,name:t});this.materials.push(c);let u=new zn(s,c);u.name=t,u.castShadow=!0,u.receiveShadow=!0,this.scene.add(u);const h={name:t,img:i,mesh:u,top:a.top,left:a.left,width:o.width,height:o.height,thumbOutAction:{value:0}};this.imageStore.push(h),setTimeout(()=>{this.activeImage(t,!0)},250),this.setImageMeshPositions()},meshMouseListeners(i,e){i.img.addEventListener("mouseenter",t=>{i.mesh.renderOrder=1,this.hoverInProgress=!0,Ps.to(e.uniforms.hoverState,{duration:.5,value:1})}),i.img.addEventListener("mouseout",()=>{i.mesh.renderOrder=0,this.hoverInProgress=!1,Ps.to(e.uniforms.hoverState,{duration:.5,value:0})})},composerPass(){this.composer=new bE(this.renderer),this.renderPass=new ME(this.scene,this.camera),this.composer.addPass(this.renderPass),this.myEffect={uniforms:{tDiffuse:{value:null},scrollSpeed:{value:null}},vertexShader:this.options.scroll.vertexShader,fragmentShader:this.options.scroll.fragmentShader},this.customPass=new Ym(this.myEffect),this.customPass.renderToScreen=!0,this.composer.addPass(this.customPass)},setSize(){this.width=this.canvasContainer.offsetWidth,this.height=this.canvasContainer.offsetHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.render(this.scene,this.camera)},render(){this.time+=.05,this.scroll.render(),this.scrollInProgress=this.currentScroll!==this.scroll.scrollToRender,this.currentScroll=this.scroll.scrollToRender,this.scrollInProgress&&(this.customPass.uniforms.scrollSpeed.value=this.scroll.speedTarget,this.setImageMeshPositions());for(var i=0;i<this.materials.length;i++)this.materials[i].uniforms.time.value=this.time;this.composer.render(),window.requestAnimationFrame(this.render.bind(this))}};const DE=ao(i=>{i.vueApp.directive("scrollSpeed",{mounted(e,t){jr.addScrollSpeedElement({elNode:e,scrollSpeed:t.value})}}),i.vueApp.directive("scrollActive",{mounted(e,t,n){jr.addScrollActiveElement({elNode:e,scrollActive:t.value})}})}),IE=[Lx,wv,Nv,Vv,DE];nu({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(i,{slots:e,attrs:t}){const n=Bt(!1);return io(()=>{n.value=!0}),r=>{var l;if(n.value)return(l=e.default)==null?void 0:l.call(e);const s=e.fallback||e.placeholder;if(s)return s();const o=r.fallback||r.placeholder||"",a=r.fallbackTag||r.placeholderTag||"span";return ro(a,t,o)}}});const Kl=new WeakMap;function Km(i){if(Kl.has(i))return Kl.get(i);const e={...i};return e.render?e.render=(t,...n)=>{if(t.mounted$){const r=i.render(t,...n);return r.children===null||typeof r.children=="string"?ii(r.type,r.props,r.children,r.patchFlag,r.dynamicProps,r.shapeFlag):Qi(r)}else return Qi("div",t.$attrs??t._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${i.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(t,n)=>{var s;const r=Bt(!1);return io(()=>{r.value=!0}),Promise.resolve(((s=i.setup)==null?void 0:s.call(i,t,n))||{}).then(o=>typeof o!="function"?{...o,mounted$:r}:(...a)=>{if(r.value){const l=o(...a);return l.children===null||typeof l.children=="string"?ii(l.type,l.props,l.children,l.patchFlag,l.dynamicProps,l.shapeFlag):Qi(l)}else return Qi("div",n.attrs)})},Kl.set(i,e),e}const OE=["src"],FE={__name:"Image",props:["srcLink","shader","imageHover"],setup(i){const e=i;let t=null;const n=Bt("img"),r=()=>{t=`meshImage${e.shader}_${jr.imageStore.length}`,jr.addImage(n.value,e.shader,t)};return Is(()=>e.imageHover,s=>{jr.hoverImage(t,s)}),(s,o)=>(ti(),ro("img",{onLoad:r,ref_key:"img",ref:n,alt:"picture",src:i.srcLink},null,40,OE))}},NE={class:"example-container"},UE={__name:"ExampleBlock.client",props:["text","shader","imgLink","scrollActiveImage"],setup(i){let e=Bt(Boolean);e.value=!1;const t=Bt("textToAnimate"),n=r=>{e.value=r};return(r,s)=>{const o=FE;return ti(),ro("div",NE,[ii("div",{class:"example",onMouseover:s[0]||(s[0]=a=>n(!0)),onMouseleave:s[1]||(s[1]=a=>n(!1))},[ii("h3",{ref_key:"textToAnimate",ref:t},ag(i.text),513),Ke(o,{imageHover:dn(e),shader:i.shader,srcLink:i.imgLink},null,8,["imageHover","shader","srcLink"])],32)])}}};const zE=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},kE=Km(UE),BE={},HE={class:"examples"};function VE(i,e){const t=kE,n=P_("scrollSpeed");return ti(),ro("section",HE,[gr(Ke(t,{text:"Fast scroll speed | shader 1",imgLink:"img/01.jpg",shader:"example1"},null,8,["imgLink"]),[[n,.2]]),gr(Ke(t,{text:"Normal scroll speed | shader 2",imgLink:"img/02.jpg",shader:"example2"},null,8,["imgLink"]),[[n,0]]),gr(Ke(t,{text:"Slow scroll speed | shader default",imgLink:"img/03.jpg"},null,8,["imgLink"]),[[n,-.3]]),gr(Ke(t,{text:"Slow scroll speed | shader default",imgLink:"img/04.jpg"},null,8,["imgLink"]),[[n,-.2]]),gr(Ke(t,{text:"Faster scroll speed | shader 1",imgLink:"img/05.jpg",shader:"example1"},null,8,["imgLink"]),[[n,.4]]),gr(Ke(t,{text:"Normal scroll speed | shader 2",imgLink:"img/01.jpg",shader:"example2"},null,8,["imgLink"]),[[n,0]])])}const GE=zE(BE,[["render",VE]]);const WE=Km(GE),qE={id:"appContainer"},$E={id:"scrollContainer"},XE={__name:"app",setup(i){const e=Bt("canvas"),t=Bt("scrollableContent");return io(()=>{jr.init(e.value,t.value)}),(n,r)=>{const s=WE;return ti(),ro("div",qE,[ii("div",$E,[ii("div",{ref_key:"scrollableContent",ref:t},[Ke(s)],512)]),ii("div",{ref_key:"canvas",ref:e,id:"animationContainer"},null,512)])}}},Kh={__name:"nuxt-root",setup(i){const e=x_(()=>bp(()=>import("./error-component.3a557c71.js"),[],import.meta.url).then(a=>a.default||a)),t=()=>null,n=Lt(),r=n.deferHydration();Pd("_route",Iv()),n.hooks.callHookWith(a=>a.map(l=>l()),"vue:setup");const s=fu();Fd((a,l,c)=>{n.hooks.callHook("vue:error",a,l,c).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),Pv(a)&&(a.fatal||a.unhandled)&&Ir(n,Cv,[a])});const{islandContext:o}=!1;return(a,l)=>(ti(),Mo(f_,{onResolve:dn(r)},{default:Cd(()=>[dn(s)?(ti(),Mo(dn(e),{key:0,error:dn(s)},null,8,["error"])):dn(o)?(ti(),Mo(dn(t),{key:1,context:dn(o)},null,8,["context"])):(ti(),Mo(dn(XE),{key:2}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=px.create({baseURL:gx()}));let Zh;const jE=Rx(IE);Zh=async function(){var r;const t=Boolean((r=window.__NUXT__)==null?void 0:r.serverRendered)?A0(Kh):C0(Kh),n=Cx({vueApp:t});try{await Px(n,jE)}catch(s){await n.callHook("app:error",s),n.payload.error=n.payload.error||s}try{await n.hooks.callHook("app:created",t),await n.hooks.callHook("app:beforeMount",t),t.mount("#"+Sv),await n.hooks.callHook("app:mounted",t),await Jc()}catch(s){await n.callHook("app:error",s),n.payload.error=n.payload.error||s}},Zh().catch(i=>{console.error("Error while mounting app:",i)});export{bp as _,zE as a,ro as b,Mo as c,x_ as d,ii as e,Ke as f,Y_ as g,Kd as h,JE as i,ZE as j,Lt as k,YE as n,ti as o,KE as p,ag as t,dn as u,Cd as w};
