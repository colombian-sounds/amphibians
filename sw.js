/* sw.js — service worker mínimo
   Solo permite que la app sea instalable en el teléfono/computador.
   Sin cache: el sitio siempre carga desde la red. */

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

/* Sin handler de fetch = el navegador hace las peticiones normalmente */
