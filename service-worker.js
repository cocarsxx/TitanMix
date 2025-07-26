self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('titanmix').then(function(cache) {
      return cache.addAll([
        '/TitanMix/index.html',
        '/TitanMix/style.css',
        '/TitanMix/main.js',
        '/TitanMix/logo.jpeg',
        '/TitanMix/manifest.json'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
