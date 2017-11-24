var cacheName = 'product-hunt';

self.addEventListener('install', event => { event.waitUntil(
  caches.open(cacheName).then(cache => cache.addAll([
    '/bootstrap.js','/material.min.css','/material.min.js','/static/js/bundle.js','/index.html','/sem.css','/','/src/Logo/logo_splash.png','/src/views/Login.js','/src/views/Uploadpage.js','/src/views/Revision.js']))
  ); 
});

//fetch
self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      if(response)
        return response;

      var fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(function(fetchResponse){
        if(!fetchResponse || fetchResponse.status !== 0)
          return fetchResponse;

        var responseToCache = fetchResponse.clone();

        caches.open(cacheName).then(function(cache) {
          cache.put(event.request,responseToCache);
        });
return fetchResponse;
      });
    })
  )
})