//Colocando Cache
const CACHE_NAME = "v1_cache_gradient_gen";
const urlsToCache = [
    "./",
    "./?utm_source=web_app_manifest",
    "./pages/fallback.html",
    "./pages/css/styles.css",
    "./img/favicon.png",
    "./img/icon32.png",
    "./img/icon64.png",
    "./img/icon128.png",
    "./img/icon192.png",
    "./img/maskable.png",
    "./img/icon256.png",
    "./img/icon512.png",
    "./img/icon1024.png",
    "./js/main.js",
    "./js/app.js",
    "https://unpkg.com/vue@next",
    "./css/styles.css",
    "https://fonts.googleapis.com/css2?family=Roboto&display=swap"

];

// Escuchando evento install para agregar caches
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(
                cache => cache.addAll(urlsToCache)
                    .then(() => self.skipWaiting())
                    .catch(err => console.log(err))
            )
    )
});

//Escuchando evento activate
self.addEventListener("activate", e => {
    const cacheWhiteList = [CACHE_NAME]

    e.waitUntil(
        caches.keys()
            .then(
                cacheNames => {
                    return Promise
                        .all(cacheNames.map(
                            cacheName => {
                                if (cacheWhiteList.indexOf(cacheName) === -1) {
                                    return caches.delete(cacheName)
                                }
                            }
                        ))
                }
            ).then(
                () => self.clients.claim()
            )
    );
});

//Escuchando fetch, actualizar cache
self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then(
            (res) => {
                if (res) {
                    return res;
                }
                return fetch(e.request);
            }
        ).catch(
            () => caches.match("./pages/fallback.html")
        )
    );
});