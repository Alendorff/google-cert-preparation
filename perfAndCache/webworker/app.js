(function() {
  var myWorker = new Worker('worker.js');

  myWorker.onmessage = function(event) {
    console.log('Message received', ...arguments);
    const { type, payload } = event.data
    if (type === 'SHIT_DONE') {
      document.querySelector('#app').innerHTML = payload
    }
  }

  myWorker.postMessage({ type: 'RUN_SHIT' });
})()


// shit from exam

const CACHE_NAME = 'debug-sw-v2';

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(async function(response) {
        return response || fetch(event.request).then(function(networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
      });
    })
  );
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(reg => {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  })
  .catch(err => {
    console.log('Registration failed with ' + err);
  });
}



self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(async function(response) {
        if (!response) {
          return fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse
          })
        }
        return response
      })
    })
  )
})