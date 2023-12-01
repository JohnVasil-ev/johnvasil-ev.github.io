import{u as C,d as R,c as y,h as q,r as S,o as A,a as B,b as E,e as z,f as I,g as w,i as L,j as T,p as j,k as U,n as V,w as D,l as H,m as M,q as k,s as O,_ as $,t as F,v as G,x as Q,y as g,z as _,A as X,B as J,C as K,D as W,E as Y}from"./entry.e5463bfe.js";async function N(t,a=C()){const{path:l,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(l)))return;const r=a._preloadPromises=a._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>N(t,a));a._routePreloaded.add(l);const s=e.map(i=>{var n;return(n=i.components)==null?void 0:n.default}).filter(i=>typeof i=="function");for(const i of s){const n=Promise.resolve(i()).catch(()=>{}).finally(()=>r.splice(r.indexOf(n)));r.push(n)}await Promise.all(r)}const Z=(...t)=>t.find(a=>a!==void 0),ee="noopener noreferrer";/*! @__NO_SIDE_EFFECTS__ */function te(t){const a=t.componentName||"NuxtLink",l=(e,r)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const s=t.trailingSlash==="append"?D:H;if(typeof e=="string")return s(e,!0);const i="path"in e?e.path:r(e).path;return{...e,name:void 0,path:s(i,!0)}};return R({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const s=C(),i=M(),n=y(()=>{const o=e.to||e.href||"";return l(o,s.resolve)}),f=y(()=>typeof n.value=="string"&&q(n.value,{acceptRelative:!0})),h=y(()=>e.external||e.target&&e.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||f.value),b=S(!1),v=S(null),P=o=>{var d;v.value=e.custom?(d=o==null?void 0:o.$el)==null?void 0:d.nextElementSibling:o==null?void 0:o.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!re()){const d=k();let m,c=null;A(()=>{const x=ne();B(()=>{m=E(()=>{var p;(p=v==null?void 0:v.value)!=null&&p.tagName&&(c=x.observe(v.value,async()=>{c==null||c(),c=null;const u=typeof n.value=="string"?n.value:s.resolve(n.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",u).catch(()=>{}),!h.value&&N(n.value,s).catch(()=>{})]),b.value=!0}))})})}),z(()=>{m&&I(m),c==null||c(),c=null})}return()=>{var x,p;if(!h.value){const u={ref:P,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(b.value&&(u.class=e.prefetchedClass||t.prefetchedClass),u.rel=e.rel),w(L("RouterLink"),u,r.default)}const o=typeof n.value=="object"?((x=s.resolve(n.value))==null?void 0:x.href)??null:n.value&&!e.external&&!f.value?l(T(i.app.baseURL,n.value),s.resolve):n.value||null,d=e.target||null,m=e.noRel?null:Z(e.rel,t.externalRelAttribute,o?ee:"")||null,c=()=>O(o,{replace:e.replace});return e.custom?r.default?r.default({href:o,navigate:c,get route(){if(!o)return;const u=j(o);return{path:u.pathname,fullPath:u.pathname,get query(){return U(u.search)},hash:u.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:m,target:d,isExternal:h.value,isActive:!1,isExactActive:!1}):null:w("a",{ref:v,href:o,rel:m,target:d},(p=r.default)==null?void 0:p.call(r))}}})}const ae=te(V);function ne(){const t=k();if(t._observer)return t._observer;let a=null;const l=new Map,e=(s,i)=>(a||(a=new IntersectionObserver(n=>{for(const f of n){const h=l.get(f.target);(f.isIntersecting||f.intersectionRatio>0)&&h&&h()}})),l.set(s,i),a.observe(s),()=>{l.delete(s),a.unobserve(s),l.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function re(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const oe=t=>(W("data-v-8e38b8ef"),t=t(),Y(),t),se={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},le=oe(()=>g("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),ie={class:"max-w-520px text-center z-20"},ce=["textContent"],ue=["textContent"],de={class:"w-full flex items-center justify-center"},fe={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const a=t;return F({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(l,e)=>{const r=ae;return G(),Q("div",se,[le,g("div",ie,[g("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:_(t.statusCode)},null,8,ce),g("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:_(t.description)},null,8,ue),g("div",de,[X(r,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:J(()=>[K(_(t.backHome),1)]),_:1})])])])}}},ve=$(fe,[["__scopeId","data-v-8e38b8ef"]]);export{ve as default};
