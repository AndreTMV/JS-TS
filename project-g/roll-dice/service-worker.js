'use strict';

// Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';

// Add list of files to cache here.
const FILES_TO_CACHE = [
  '/offline.html',
];

self.addEventListener('install', (event) => {
  // Precache static resources here.
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Remove previous cached data from disk.
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Add fetch event handler here.
  if (event.request.mode !== 'navigate') {
    // Not a page navigation, bail.
    return;
  }
  event.respondWith(
    fetch(event.request)
    .catch(() => {
      return caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.match('offline.html');
      });
    })
  );

});
