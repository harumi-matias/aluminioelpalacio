// asignar nombre y version de la cache
const CACHE_NAME = 'v1_cache_PWA';

// Archivos a cachear en la app
var urlsToCache = [
	'./',
	'./css/all.min.css',
	'./css/bootstrap.min.css',
	'./css/estilos.css',
    './css/normalize.css',	
    './css/leaflet.css',
    './css/swiper-bundle.min.css',
    './css/images/layers-2x.png',
    './css/images/layers.png',
    './css/images/marker-icon-2x.png',
    './css/images/marker-icon.png',
    './css/images/marker-shadow.png',
	'./images/192x192.png',
	'./images/512.png',
	'./images/apple-touch-icon.png',
	'./images/carlosv.jpg',
	'./images/carlosv.png',
	'./images/delarosa.jpg',
	'./images/delarosa.png',
	'./images/ferrero.png',
	'./images/giselle.png',
	'./images/hershey.png',
	'./images/kisses.jpg',
	'./images/kisses.png',
	'./images/lady.png',
	'./images/laposse.png',
	'./images/lasuiza.png',
	'./images/logo.png',
	'./images/m&m.jpg',
	'./images/m&m.png',
	'./images/ricolino.png',
	'./images/turin.png',
	'./js/anime.min.js',
	'./js/bootstrap.bundle.min.js',		
    './js/jquery-3.6.0.min.js',
    './js/leaflet.js',
	'./js/mis-scripts.js',
    './js/serviceworker.js',
    './js/jswiper-bundle.min.js',
	'./webfonts/fa-brands-400.eot',
	'./webfonts/fa-brands-400.svg',
	'./webfonts/fa-brands-400.ttf',
	'./webfonts/fa-brands-400.woff',
	'./webfonts/fa-brands-400.woff2',
	'./webfonts/fa-regular-400.eot',
	'./webfonts/fa-regular-400.svg',
	'./webfonts/fa-regular-400.ttf',
	'./webfonts/fa-regular-400.woff',
	'./webfonts/fa-regular-400.woff2',
	'./webfonts/fa-solid-900.eot',
	'./webfonts/fa-solid-900.svg',
	'./webfonts/fa-solid-900.ttf',
	'./webfonts/fa-solid-900.woff',
	'./webfonts/fa-solid-900.woff2',
];


// evento Install
self.addEventListener('install', e=> {
	e.waitUntil(
		caches.open(CACHE_NAME)
			.then(cache => {
				return cache.addAll(urlsToCache)
							.then(() => { 
							 self.skipWaiting();	
							});
			})
			.catch(err => console.log('No se ha registrado el cache', err))
	); 
});

// evento Activate
// que la app funcione sin conexion
self.addEventListener('activate', e=> {
	const cacheWhitelist = [CACHE_NAME];
	e.waitUntil(
		caches.keys()
			.then(cacheNames => {
				return Promise.all(
					cacheNames.map(cacheName => {

						if(cacheWhitelist.indexOf(cacheName) === -1){
							// Borrar elementos que no se necesitan
							return caches.delete(cacheName);
						}

					})						
				);
			})		
			.then(()=> {
				// Activar cache
				self.clients.claim();
			})
	);

}); 


// evento fetch 
self.addEventListener('fetch', e=> {
	e.respondWith(
		caches.match(e.request)
			.then(res => {
				if(res){
					// devuelvo datos desde cache
					return res;
				}

				return fetch(e.request);
			}) 
	);
});