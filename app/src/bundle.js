(()=>{var o={54:(o,t,e)=>{const{log:r,getConfig:n,getTargets:g,getOwnPropertyDescriptor:c,checkRegexs:l,execCode:i}=e(191);o.exports=(o,t,e)=>{const s=n(o,t,e);var a=domlogger.func["String.prototype.split"].call(e,":");e=domlogger.func["Array.prototype.pop"].call(a);const[p,f]=g(domlogger.func["String.prototype.split"].call(e,"."));if(0===a.length&&(a=["set","get"]),!p||!(f in p))return void domlogger.func["console.log"](`[DOMLogger++] ${e} (attribute) does not exist!`);try{if("function"==typeof p[f])return void domlogger.func["console.log"](`[DOMLogger++] ${e} can't be a function or a class!`)}catch{}const u=c(p,f);if(u.configurable){var y;if(!u.set||!u.get)try{y=p[f]}catch{if(u.set||!u.get)return void domlogger.func["console.log"](`[DOMLogger++] ${e} can't be hook for now!`);if(domlogger.func["Array.prototype.includes"].call(a,"set"))return void domlogger.func["console.log"](`[DOMLogger++] Only the getter can be hooked for ${e}, remove set!`)}Object.defineProperty(p,f,{get:function(){if(u.get?output=u.get.call(this):output=y,domlogger.func["Array.prototype.includes"].call(a,"get")){const n=l(e,s.match,this,output,!0),g=l(e,s["!match"],this,output,!1);output=i(e,s.hookFunction,this,output),!g&&n&&r(o,t,this.nodeName?`get:${this.nodeName.toLowerCase()}.${f}`:`get:${e}`,this,output,s)}return output},set:function(n){if(domlogger.func["Array.prototype.includes"].call(a,"set")&&n){const g=l(e,s.match,this,n,!0),c=l(e,s["!match"],this,n,!1);n=i(e,s.hookFunction,this,n),!c&&g&&r(o,t,this.nodeName?`set:${this.nodeName.toLowerCase()}.${f}`:`set:${e}`,this,n,s)}return u.set?u.set.call(this,n):void(y=n)}})}else domlogger.func["console.log"](`[DOMLogger++] ${e} is not configurable, can't hook it!`)}},746:(o,t,e)=>{const{log:r,getConfig:n,getTargets:g,getOwnPropertyDescriptor:c,checkRegexs:l,execCode:i}=e(191);o.exports=(o,t,e)=>{const s=n(o,t,e);var[a,p]=g(domlogger.func["String.prototype.split"].call(e,"."));a&&p in a?"function"==typeof a[p]?c(a,p).configurable?a[p]=new domlogger.func.Proxy(a[p],{construct:function(n,g){const c=l(e,s.match,null,g,!0),a=l(e,s["!match"],null,g,!1);return g=i(e,s.hookFunction,null,g),!a&&c&&r(o,t,e,n,g,s),new n(...g)}}):domlogger.func["console.log"](`[DOMLogger++] ${e} is not configurable, can't hook it!`):domlogger.func["console.log"](`[DOMLogger++] ${e} is not a class!`):domlogger.func["console.log"](`[DOMLogger++] ${e} (class) does not exist!`)}},3:(o,t,e)=>{const{log:r,getConfig:n,getTargets:g}=e(191),c={function:e(4),class:e(746),attribute:e(54)};o.exports=o=>{for(let t=0;t<o.length;t++)o[t].info=domlogger.func["String.prototype.split"].call(o[t].target,":"),o[t].config=n(o[t].hook,o[t].type,domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.slice"].call(o[t].info,1),":")),o[t].t=domlogger.func["Array.prototype.pop"].call(domlogger.func["Array.prototype.slice"].call(o[t].info,1));const t=domlogger.func.setInterval((()=>{for(const t of o){var[e,n]=g(domlogger.func["String.prototype.split"].call(t.t,"."));e&&n in e&&("attribute"!==t.info[0]||"set"!==t.info[1]&&"set"!==t.info[2]||r(t.hook,t.type,domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.slice"].call(t.info,1),":"),null,e[n],t.config),c[t.info[0]](t.hook,t.type,domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.slice"].call(t.info,1),":")),domlogger.func["Array.prototype.splice"].call(o,domlogger.func["Array.prototype.indexOf"].call(o,t),1))}0===o.length&&domlogger.func.clearInterval(t)}),50)}},454:(o,t,e)=>{const r=e(54),{log:n,getConfig:g,stringify:c,checkRegexs:l,execCode:i}=e(191);o.exports=(o,t,e)=>{const s=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(r,a,p){if(domlogger.func["Array.prototype.includes"].call(e,r)){const s=g(o,t,r),f=l(e,s.match,null,`${a}${p?`;options=${c(p)}`:""}`,!0),u=l(e,s["!match"],null,`${a}${p?`;options=${c(p)}`:""}`,!1);args=i(e,s.hookFunction,null,a),!u&&f&&n(o,t,`on${r}`,null,`${a}${p?`;options=${c(p)}`:""}`,s)}return s.call(this,r,a,p)};for(const n of e)`on${n}`in window?(r(o,t,`set:on${n}`),`on${n}`in HTMLElement.prototype&&r(o,t,`set:HTMLElement.prototype.on${n}`)):domlogger.func["console.log"](`[DOMLogger++] on${n} (event) does not exist!`)}},4:(o,t,e)=>{const{log:r,getConfig:n,getTargets:g,getOwnPropertyDescriptor:c,isThisInteresting:l,checkRegexs:i,execCode:s,stringify:a}=e(191);o.exports=(o,t,e)=>{const p=n(o,t,e);var[f,u]=g(domlogger.func["String.prototype.split"].call(e,"."));if(!f||!(u in f))return void domlogger.func["console.log"](`[DOMLogger++] ${e} (function) does not exist!`);if("function"!=typeof f[u])return void domlogger.func["console.log"](`[DOMLogger++] ${e} is not a function!`);if(!c(f,u).configurable)return void domlogger.func["console.log"](`[DOMLogger++] ${e} is not configurable, can't hook it!`);const y=f[u];domlogger.func[e]=y,f[u]=new domlogger.func.Proxy(f[u],{apply:function(n,g,c){const u=i(e,p.match,g,c,!0),d=i(e,p["!match"],g,c,!1);return c=s(e,p.hookFunction,g,c),!d&&u&&r(o,t,e,g,l(f,g)?`this=${a(g)}; ${a(c)}`:c,p),domlogger.func.Reflect.apply(y,g,c)}})}},191:o=>{const t=()=>{let o=(new domlogger.func.Error).stack;return o=domlogger.func["String.prototype.split"].call(o,"\n"),domlogger.func["Array.prototype.filter"].call(o,(o=>!domlogger.func["String.prototype.includes"].call(o,"/src/bundle.js")))},e=async o=>{const t=(new domlogger.func.TextEncoder).encode(o),e=await domlogger.func["crypto.subtle"].digest("SHA-256",t),r=domlogger.func["Array.from"](new domlogger.func.Uint8Array(e));return domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.map"].call(r,(o=>o.toString(16).padStart(2,"0"))),"")},r=async(o,t)=>{var r="";try{cleanUrl=domlogger.func["String.prototype.split"].call(domlogger.func["String.prototype.split"].call(t[0],"://")[1],":"),execLine=domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.splice"].call(cleanUrl,cleanUrl.length-2),":"),cleanUrl=domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.splice"].call(cleanUrl,0,2),":"),r=`${new domlogger.func.URL(`https://${cleanUrl}`).origin}:${execLine}`}catch{r=t[0]}return await e(`${r}||${o}`)},n=(o,t=top,e="top")=>{if(o===top)return"top";if(o===opener)return"opener";for(let r=0;r<t.frames.length;r++){if(o===t.frames[r])return`${e}.frames[${r}]`;{const g=n(o,t.frames[r],`${e}.frames[${r}]`);if(g)return g}}return null},g=async(o,e,g,c,l,i)=>{var a=t();"Error"===a[0]&&domlogger.func["Array.prototype.shift"].call(a);const u=p(g,i.matchTrace,c,a,!0);if(p(g,i["!matchTrace"],c,a,!1)||!u)return;const y=await r(g,a);if(domlogger.debugCanary===y)debugger;var d=!1,m=!1;if(i.alert){const o=p(g,i.alert.match,c,l,!0);!p(g,i.alert["!match"],c,l,!1)&&o&&(d=!0,i.alert.notification&&(m=!0))}let h={ext:"domlogger++",date:domlogger.func["Date.now"](),href:location.href,type:e,hook:o,frame:n(self),sink:g,data:s(l),trace:a,debug:y,badge:d,notification:m};domlogger.func["Array.prototype.includes"].call(domlogger.hookTypeHistory,e)||domlogger.func["Array.prototype.push"].call(domlogger.hookTypeHistory,e),f(i)&&domlogger.func.postMessage(h,"*")},c=(o,t,e)=>{var r=domlogger.hooksConfig["*"]?domlogger.hooksConfig["*"]:{},n=domlogger.hooksConfig[o]?domlogger.hooksConfig[o]:{},g=domlogger.hooksConfig[t]?domlogger.hooksConfig[t]:{},c=domlogger.hooksConfig[e]?domlogger.hooksConfig[e]:{};return domlogger.func["Object.assign"]({},r,c,n,g)},l=o=>{var t=domlogger.func["Array.prototype.pop"].call(o),e=window;"window"===o[0]&&domlogger.func["Array.prototype.shift"].call(o);for(const t of o){if(!(t in e))return[null,null];e=e[t]}return[e,t]},i=(o,t)=>{for(;o;){const e=domlogger.func["Object.getOwnPropertyDescriptor"](o,t);if(e)return e;o=domlogger.func["Object.getPrototypeOf"](o)}},s=o=>{if(void 0===o)o="undefined";else if("function"==typeof o)o=domlogger.func["Function.prototype.toString"].call(o);else if("string"!=typeof o)try{o=domlogger.func["JSON.stringify"](o)}catch{o=`${o}`}return o},a=(o,t)=>{if(!t)return!1;const e=o[Symbol.toStringTag];return"Window"!==e&&"HTMLDocument"!==e},p=(o,t,e,r,n)=>{if(!t)return n;argsString=s(r);for(let n of t){"exec"===domlogger.func["String.prototype.split"].call(n,":")[0]&&(n=u(o,n,e,r));try{new domlogger.func.RegExp(n)}catch{domlogger.func["console.log"](`[DOMLogger++] ${n} (regex) is invalid!`);continue}if(domlogger.func["String.prototype.match"].call(argsString,n))return!0}return!1},f=o=>{if(o&&o.requiredHooks)for(const t of o.requiredHooks)if(!domlogger.func["Array.prototype.includes"].call(domlogger.hookTypeHistory,t))return!1;return!0},u=(o,t,e="",r="")=>{if(!t)return r;"exec"===domlogger.func["String.prototype.split"].call(t,":")[0]&&(t=domlogger.func["String.prototype.split"].call(t,":").splice(1).join(":"));var n=r;try{n=domlogger.func.Function("thisArg","args","target",t)(e,r,o)}catch(o){domlogger.func["console.log"](`[DOMLogger++] ${s(t)} is an invalid code to evaluate!\nError: ${o.message}`)}return n};domlogger.utils={trace:t,sha256:e,computeCanary:r,getWindowContext:n,log:g,getConfig:c,getTargets:l,getOwnPropertyDescriptor:i,stringify:s,isThisInteresting:a,checkRegexs:p,execCode:u},o.exports={trace:t,sha256:e,computeCanary:r,getWindowContext:n,log:g,getConfig:c,getTargets:l,getOwnPropertyDescriptor:i,stringify:s,isThisInteresting:a,checkRegexs:p,execCode:u}}},t={};function e(r){var n=t[r];if(void 0!==n)return n.exports;var g=t[r]={exports:{}};return o[r](g,g.exports,e),g.exports}const r=new URL(document.currentScript.src),n=new URLSearchParams(r.search),g=JSON.parse(decodeURIComponent(atob(n.get("hookSettings"))));window.domlogger={},domlogger.clean=()=>{domlogger.debugCanary=""},domlogger.hooksTargets=g.hooks,domlogger.hooksConfig={},domlogger.hookTypeHistory=[],domlogger.debugCanary="undefined"===n.get("debugCanary")?void 0:n.get("debugCanary");for(const o of Object.keys(g.config))for(const t of o.split("|"))domlogger.hooksConfig[t]=g.config[o];RegExp.prototype.toJSON=function(){return this.toString()},domlogger.func={"Array.from":Array.from,"Array.prototype.filter":Array.prototype.filter,"Array.prototype.includes":Array.prototype.includes,"Array.prototype.indexOf":Array.prototype.indexOf,"Array.prototype.join":Array.prototype.join,"Array.prototype.map":Array.prototype.map,"Array.prototype.pop":Array.prototype.pop,"Array.prototype.push":Array.prototype.push,"Array.prototype.shift":Array.prototype.shift,"Array.prototype.slice":Array.prototype.slice,"Array.prototype.splice":Array.prototype.splice,clearInterval:clearInterval.bind(window),"console.log":console.log,"crypto.subtle":crypto.subtle,"Date.now":Date.now,Error,Function,"Function.prototype.toString":Function.prototype.toString,"JSON.stringify":JSON.stringify,"Object.assign":Object.assign,"Object.entries":Object.entries,"Object.getOwnPropertyDescriptor":Object.getOwnPropertyDescriptor,"Object.getPrototypeOf":Object.getPrototypeOf,postMessage:postMessage.bind(window),Proxy,Reflect,RegExp,setInterval:setInterval.bind(window),"String.prototype.includes":String.prototype.includes,"String.prototype.match":String.prototype.match,"String.prototype.split":String.prototype.split,"String.prototype.startsWith":String.prototype.startsWith,TextEncoder,Uint8Array,URL};const c={function:e(4),class:e(746),attribute:e(54),event:e(454),custom:e(3)};domlogger.customTargets=[];for(const[o,t]of domlogger.func["Object.entries"](domlogger.hooksTargets))for(const[e,r]of domlogger.func["Object.entries"](t))if("event"!==e)for(const t of r)"custom"!==e?c[e](e,o,t):domlogger.customTargets.push({hook:e,type:o,target:t});else c[e](e,o,r);c.custom(domlogger.customTargets)})();