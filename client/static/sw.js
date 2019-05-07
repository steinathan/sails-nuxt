importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/690edbab19ae5f59c1d0.js",
    "revision": "0541740f9085709e6790d4b6af27ea1b"
  },
  {
    "url": "/_nuxt/9e7e9d6f20b35b55be35.js",
    "revision": "99c25df5fdd65381b473eeb0f363d511"
  },
  {
    "url": "/_nuxt/a3df24f54fdbac752203.js",
    "revision": "b2f4ba4e8d921053d2482c06fbac1e6d"
  },
  {
    "url": "/_nuxt/aea8f01673eeeaaa99d0.js",
    "revision": "ab1be8b807906108f506f983063608b4"
  },
  {
    "url": "/_nuxt/b73af4325de4edd057ec.js",
    "revision": "7aab88dd30d349a3d00c384aee49f331"
  },
  {
    "url": "/_nuxt/fff7024d7d1a3e20521e.js",
    "revision": "1708aa201b8449b32a89a4c26c245708"
  }
], {
  "cacheId": "nuxt-app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
