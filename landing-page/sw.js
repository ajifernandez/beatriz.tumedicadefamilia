// Minimal service worker for Dra. Beatriz Jiménez Canet Landing Page
const CACHE_NAME = 'beatriz-medica-v1.2';

self.addEventListener('install', (event) => {
  // Skip waiting to activate the service worker immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Claim clients immediately
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Simple pass-through for now
  // In the future, caching strategies can be added here
});
