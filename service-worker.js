self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
      );
});

self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('site-cache').then(function(cache) {
        return cache.addAll([
            'index.html',
            'click.css',
            'manifest.json',
            'wa-icon.png'
        ])
      })
    );
  });