'use strict';

const CACHE_NAME = 'v1';
const CACHE_ASSETS = [
    './index.html',
    './style.css',
    './app.js',
    // Add other assets you want to cache here
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching Assets');
            return cache.addAll(CACHE_ASSETS);
        })
    );
});

// Fetch Cached Assets
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Old cache deleted:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
