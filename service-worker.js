const CACHE_NAME = 'legmaster-cache-v6';

const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json'
];

// Força o service worker a ativar imediatamente após o skipWaiting
self.addEventListener('message', event => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

// Evento de instalação: adiciona os arquivos ao cache
self.addEventListe
