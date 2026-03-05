const CACHE = 'guardiantrail-v1';
const CORE = [
  '/',
  '/index.html',
  '/home.html',
  '/registration.html',
  '/report.html',
  '/digital_id.html',
  '/user_incidents.html',
  '/sos.html',
  '/blockchain_explorer.html',
  '/offline.html',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap'
];


self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      
      return Promise.allSettled(CORE.map(url => cache.add(url)));
    }).then(() => self.skipWaiting())
  );
});


self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});


self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  if (e.request.method !== 'GET') return;

  
  if (url.hostname.includes('tile.openstreetmap') || url.hostname.includes('unpkg.com')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request)
        .then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => {
         
          if (e.request.mode === 'navigate') {
            return caches.match('/offline.html');
          }
        });
    })
  );
});


self.addEventListener('sync', e => {
  if (e.tag === 'sync-incidents') {
    e.waitUntil(syncIncidents());
  }
});

async function syncIncidents() {

  console.log('[SW] Syncing offline incidents...');
}
