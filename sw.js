/* sw.js — service worker mínimo
   Solo permite que la app sea instalable.
   Sin cache: el sitio siempre carga desde la red.
   Cambia CACHE_VERSION para forzar actualización sin borrar historial. */

const CACHE_VERSION = 'v2';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* Sin handler de fetch = el navegador hace las peticiones normalmente */
