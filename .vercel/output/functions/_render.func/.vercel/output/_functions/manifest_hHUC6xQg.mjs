import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_D9VfkyYO.mjs';
import { g as decodeKey } from './chunks/astro/server_fyeRQW9z.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CA0Hj4ul.js"}],"styles":[{"type":"external","src":"/_astro/_movie_id_.C5sxlejZ.css"},{"type":"inline","content":".footer[data-astro-cid-sz7xmlte]>p[data-astro-cid-sz7xmlte]{width:100%;color:#fff;text-align:center;padding:20px}:root{--red: #a4161a;--background: #f0f9fe}html{font-family:system-ui,sans-serif;scroll-behavior:smooth}body{min-height:100vh;background-color:#141414;color:#fff}code{font-family:Archivo,Playfair Display,Menlo,Monaco,Lucida Console,Courier New,monospace}body,figure{margin:0;padding:0}a{text-decoration:none}ul{list-style:none;margin:0;padding:0}*,*:before,*:after{box-sizing:border-box}h1,h2,h3,h4{margin:0;padding:0}p{margin:0;text-wrap:pretty}@media (prefers-reduced-motion: reduce){html{scroll-behavior:auto}}*{margin:0;box-sizing:border-box}\n"}],"routeData":{"route":"/movie-details/[movie_id]","isIndex":false,"type":"page","pattern":"^\\/movie-details\\/([^/]+?)\\/?$","segments":[[{"content":"movie-details","dynamic":false,"spread":false}],[{"content":"movie_id","dynamic":true,"spread":false}]],"params":["movie_id"],"component":"src/pages/movie-details/[movie_id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"function f(){document.querySelectorAll(\".movie__img\").forEach(o=>{o.addEventListener(\"click\",function(){const s=this.getAttribute(\"data-id\");window.location.href=`movie-details/${s}`})})}const m=document.getElementsByClassName(\"movie__items\");function v(){const o=document.getElementById(\"searchInput\"),s=document.getElementById(\"searchButton\"),e=document.getElementById(\"clearSearchButton\");o.addEventListener(\"keydown\",function(t){t.key===\"Enter\"&&(c(),l())}),s.addEventListener(\"click\",function(){c(),l()}),e.addEventListener(\"click\",function(){n(),l()});function l(){document.querySelector(\".nav__list\").classList.toggle(\"nav__list--show\")}function c(){const t=o.value.toLowerCase();document.querySelectorAll(\".movies__container\").forEach(function(r){const u=r.querySelectorAll(\".movie__items\");Array.from(u).forEach(function(i){i.style.display=\"flex\"}),Array.from(u).forEach(function(i){const d=i.querySelector(\".movie__title\");d&&!d.textContent.toLowerCase().includes(t)&&(i.style.display=\"none\")})}),a()}function n(){o.value=\"\",Array.from(m).forEach(function(t){t.style.display=\"flex\"}),a()}}function a(){document.querySelectorAll(\".movie__genres--list\").forEach(function(e){const c=Array.from(e.querySelectorAll(\".movie__items\")).every(function(t){return t.style.display===\"none\"}),n=e.querySelector(\".noMovies__message--item\");e.children.length===1||c?(e.style.display=\"flex\",e.style.alignItems=\"center\",e.style.justifyContent=\"center\",n.style.display=\"flex\"):(e.style.display=\"flex\",e.style.alignItems=\"center\",e.style.justifyContent=\"left\",n.style.display=\"none\")}),document.querySelectorAll(\".movie__list\").forEach(function(e){const c=Array.from(e.querySelectorAll(\".movie__items\")).every(function(t){return t.style.display===\"none\"}),n=e.querySelector(\".noMovies__message--item\");e.children.length===1||c?(e.style.display=\"flex\",e.style.alignItems=\"center\",e.style.justifyContent=\"center\",n.style.display=\"flex\"):(e.style.display=\"grid\",e.style.justifyContent=\"center\",e.style.alignItems=\"center\",n.style.display=\"none\")})}function _(){const o=document.querySelector(\".nav__menu\"),s=document.querySelector(\".nav__list\"),e=document.querySelectorAll(\".nav__link\");o.addEventListener(\"click\",function(){s.classList.toggle(\"nav__list--show\")}),e.forEach(function(l){l.addEventListener(\"click\",function(){s.classList.remove(\"nav__list--show\")})})}function h(){document.querySelectorAll(\".nav__scroll\").forEach(s=>{s.addEventListener(\"click\",function(e){e.preventDefault();const l=this.getAttribute(\"href\").substring(1),c=document.querySelector(`.${l}`);if(c){const n=document.querySelector(\".nav__list\"),t=document.querySelectorAll(\".nav__link\");n.classList.toggle(\"nav__list--show\"),t.forEach(function(){n.classList.remove(\"nav__list--show\")});const r=c.offsetTop-110;window.scrollTo({top:r,behavior:\"smooth\"})}})})}function g(){f(),v(),a(),_(),h()}document.addEventListener(\"DOMContentLoaded\",function(){g()});\n"}],"styles":[{"type":"inline","content":".footer[data-astro-cid-sz7xmlte]>p[data-astro-cid-sz7xmlte]{width:100%;color:#fff;text-align:center;padding:20px}:root{--red: #a4161a;--background: #f0f9fe}html{font-family:system-ui,sans-serif;scroll-behavior:smooth}body{min-height:100vh;background-color:#141414;color:#fff}code{font-family:Archivo,Playfair Display,Menlo,Monaco,Lucida Console,Courier New,monospace}body,figure{margin:0;padding:0}a{text-decoration:none}ul{list-style:none;margin:0;padding:0}*,*:before,*:after{box-sizing:border-box}h1,h2,h3,h4{margin:0;padding:0}p{margin:0;text-wrap:pretty}@media (prefers-reduced-motion: reduce){html{scroll-behavior:auto}}*{margin:0;box-sizing:border-box}\n"},{"type":"external","src":"/_astro/index.CzT16mqo.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/src/pages/movie-details/[movie_id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/movie-details/[movie_id]@_@astro":"pages/movie-details/_movie_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_hHUC6xQg.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.BlaSi67Q.js","/astro/hoisted.js?q=0":"_astro/hoisted.CA0Hj4ul.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/calinema_banner.Bktsb6sq.webp","/_astro/_movie_id_.C5sxlejZ.css","/_astro/index.CzT16mqo.css","/arrow_drop_down.svg","/banner.svg","/calinema_banner.webp","/close.svg","/favicon.svg","/menu.svg","/search.svg","/_astro/hoisted.CA0Hj4ul.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"WkNd/F9Z/Fwu/9w1C/1m3X4Om6C75B+jh4gEXBHMTG4=","experimentalEnvGetSecretEnabled":false});

export { manifest };
