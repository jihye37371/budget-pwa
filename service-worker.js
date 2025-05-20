self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('남은돈-pocket').then(function(cache) {
      return cache.addAll(['/']);
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