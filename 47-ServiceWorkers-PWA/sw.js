const nombreCache = 'apv-v3';


const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js',
    '/manifest.json'
];

//Instalando service workers
self.addEventListener('install', e => {
   

    e.waitUntil(
        caches.open(nombreCache).then( cache => {
            console.log("cacheamndo");
            cache.addAll(archivos);
        })
    )
})

//Activar el service workers
self.addEventListener('activate', e => {
    
    e.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys.filter( key => key !== nombreCache).map(key => caches.delete(key))
                )
            })
    )

})

//Evento fetch para descargar archivos estáticos
self.addEventListener("fetch", e=>{

    e.respondWith(
        caches.match(e.request)
        .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match('/error.html')))
    )
})