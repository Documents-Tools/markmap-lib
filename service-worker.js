!function(){"use strict";const e=["client/client.12da585f.js","client/index.e4bbc37e.js","client/about.08b7a367.js","client/usage.80fc7e81.js","client/repl.f4a2b450.js","client/codemirror.72faa78e.js","client/markdown.ead1f7f9.js","client/client.e7d9641f.js"].concat(["service-worker-index.html","CNAME","donate/alipay.svg","donate/paypal.svg","donate/qr_alipay.png","donate/qr_wechat.png","donate/wechat.svg","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json","markmap.svg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1586149999014").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1586149999014"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const a=new URL(e.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&t.has(a.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586149999014").then(async t=>{try{const a=await fetch(e.request);return t.put(e.request,a.clone()),a}catch(a){const n=await t.match(e.request);if(n)return n;throw a}}))))})}();
