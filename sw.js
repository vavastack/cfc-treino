/* CFC Treino: service worker. Troque VERSAO a cada atualização. */
var VERSAO="cfc-treino-v2.0";
var ARQUIVOS=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","icons/apple-touch-icon.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(VERSAO).then(function(c){return c.addAll(ARQUIVOS);}).then(function(){return self.skipWaiting();}));});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==VERSAO;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener("fetch",function(e){
  var r=e.request; if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
  var nav=r.mode==="navigate"||r.url.endsWith("index.html");
  if(nav){ e.respondWith(fetch(r).then(function(res){var cp=res.clone();caches.open(VERSAO).then(function(c){c.put("index.html",cp);});return res;}).catch(function(){return caches.match("index.html");})); return; }
  e.respondWith(caches.match(r).then(function(m){return m||fetch(r).then(function(res){var cp=res.clone();caches.open(VERSAO).then(function(c){c.put(r,cp);});return res;});}));
});
