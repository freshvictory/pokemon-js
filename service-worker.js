const SITE = 'poke-tools';
const VERSION = 'v1';
const CACHE_KEY = `${SITE}:${VERSION}`;

const assets = [
  '/',
  '/index.html',
  '/index.js',
  '/main.css',
  '/router.js',
  '/types.css',
  '/types.js',
  '/images/PremiereBall-192.png',
  '/images/PremiereBall-512.png',
  '/images/types/Bug.svg',
  '/images/types/Dark.svg',
  '/images/types/Dragon.svg',
  '/images/types/Electric.svg',
  '/images/types/Fairy.svg',
  '/images/types/Fight.svg',
  '/images/types/fighting.svg',
  '/images/types/Fire.svg',
  '/images/types/Flying.svg',
  '/images/types/Ghost.svg',
  '/images/types/Grass.svg',
  '/images/types/Ground.svg',
  '/images/types/Ice.svg',
  '/images/types/Normal.svg',
  '/images/types/Poison.svg',
  '/images/types/Psychic.svg',
  '/images/types/Rock.svg',
  '/images/types/Steel.svg',
  '/images/types/Water.svg',
  '/components/custom-element.js',
  '/components/internal-link.js',
  '/components/triangle-icon.css',
  '/components/triangle-icon.js',
  '/components/type-icon.css',
  '/components/type-icon.js',
  '/components/type-legend.css',
  '/components/type-legend.js',
  '/components/type-link.css',
  '/components/type-link.js',
  '/components/type-list.css',
  '/components/type-list.js'
];


// INSTALLATION

self.addEventListener('install', (evt) => {
  console.log(`Installing ${VERSION}...`);

  self.skipWaiting();

  evt.waitUntil(cacheContent());

  console.log(`Installed ${VERSION}.`)
});


async function cacheContent() {
  const cache = await caches.open(CACHE_KEY);
  console.log(`Opened cache ${CACHE_KEY}.`);

  return cache.addAll(assets);
}


// ACTIVATION

self.addEventListener('activate', (evt) => {
  evt.waitUntil(updateCache());

  console.log(`${VERSION} is active.`);
});


async function updateCache() {
  console.log('Removing old caches...');

  const keys = await caches.keys();

  return Promise.all(
    keys.map((key) => {
      if (key.startsWith(SITE) && key !== CACHE_KEY) {
        console.log(`Clearing old cache ${key}...`);
        return caches.delete(key);
      }
    })
  );
}


// NETWORK PROXYING

self.addEventListener('fetch', (evt) => {
  evt.respondWith(respond(evt.request));
});


async function respond(request) {
  const cache = await caches.open(CACHE_KEY);
  const cachedResponse = await cache.match(request);

  return cachedResponse || fetch(request);
}
