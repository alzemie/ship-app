// عامل خدمة بسيط حتى يُعتبر الموقع تطبيقًا قابلًا للتثبيت. لا يخزّن أي بيانات.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
