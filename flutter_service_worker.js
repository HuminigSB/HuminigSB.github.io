'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "05f5363f9aa67772af8abe16833b369f",
"assets/assets%255Cimages%255CAlbeoricFala.png": "3b6c75de7405770bc6332226b81c5fe7",
"assets/assets%255Cimages%255CArvoreFundo1.png": "2a29b2b6d7c7a76c8b5039898d9de4be",
"assets/assets%255Cimages%255CArvoreFundo2.png": "d0478c1190aa13023206755e3261d81e",
"assets/assets%255Cimages%255CArvoreFundo3.png": "256592981a4d34b393fe822ea2c1f361",
"assets/assets%255Cimages%255CArvoreFundo4.png": "259b0d673f11eefb5d82fe63373b020e",
"assets/assets%255Cimages%255CArvoreFundo5.png": "0de552fbfb5403bb50232ebdd09ba2fb",
"assets/assets%255Cimages%255CArvoreFundo6.png": "903332b78a6c77e5e4f411e844ee0226",
"assets/assets%255Cimages%255CArvoreFundo7.png": "e72cad3bef4d2b626bd81e6bdd16ff51",
"assets/assets%255Cimages%255Cauditorio.png": "9d405797ec2a7e416743af2efb493104",
"assets/assets%255Cimages%255CauditorioApresenta%25C3%25A7%25C3%25A3o.png": "0ce52a80316ff4a7c45f9b927a6f5d7f",
"assets/assets%255Cimages%255CauditorioZoom.png": "6b6be65ba5eac06e4fae9d1593e0ffaa",
"assets/assets%255Cimages%255CBofzuikFala.png": "3809195ed41b805a631a35b4c38e3a97",
"assets/assets%255Cimages%255CbottonArvore.png": "3ce9f986e6da108847fcef59efd5e1a0",
"assets/assets%255Cimages%255CbottonFila.png": "036afd1caa0ca7eed6341c05fd46ef83",
"assets/assets%255Cimages%255CbottonLista.png": "69ee7f3def014a5eee6c3b88e939f31f",
"assets/assets%255Cimages%255CbottonPilha.png": "636baac0035047381c93444a77368992",
"assets/assets%255Cimages%255CErgdulgFala.png": "2a59cf79dd854faebefa68b034a3725c",
"assets/assets%255Cimages%255Cfachada.png": "292facb0266a80faaf3ca66458beafd9",
"assets/assets%255Cimages%255CFila1.png": "ce790ef3c95d3c2c6767917385d103ef",
"assets/assets%255Cimages%255CFila2.png": "6185eda35bffb7b596c0eda9f0c25595",
"assets/assets%255Cimages%255CFila3.png": "e1c8aa67fd14f88c110c0148e2aea0a2",
"assets/assets%255Cimages%255CFila4.png": "7459d66c881e93ca0e0601641cf92ad4",
"assets/assets%255Cimages%255CFila5.png": "251eceb1f1510c482783df55eccedac9",
"assets/assets%255Cimages%255CFila6.png": "2aa511ec8ee30bc07879494079ff0112",
"assets/assets%255Cimages%255CFila7.png": "bf549c3cf2e2ef4d5afd26426c0d1260",
"assets/assets%255Cimages%255CFila8.png": "58d8214118300e27072be169267f1dfd",
"assets/assets%255Cimages%255CFilaAnwudak.png": "f67e42a0b60f41c6a4eddf637cfc639f",
"assets/assets%255Cimages%255CFilaDaece.png": "a8e14db7674010cf6c115403b8667210",
"assets/assets%255Cimages%255Cformatura.png": "d64541fe9dbcd3ee8eb998e8b6e7ad74",
"assets/assets%255Cimages%255CfundoBadEnding.png": "e0363edfba113ae4571b995233a27fbd",
"assets/assets%255Cimages%255CGoodEscuro.png": "a04b417d647107953ef7e9c58615800e",
"assets/assets%255Cimages%255CGoodFim.png": "410d73fd3655bec11703e39d6621f388",
"assets/assets%255Cimages%255CGoodSala.png": "7bad24f835424fc609f379bc1a2922c4",
"assets/assets%255Cimages%255Cgrafo1.png": "f3981503d624023a7e79e39d37a8e00e",
"assets/assets%255Cimages%255Cgrafo2.png": "2042546c968115e1ddef4f9f317c86af",
"assets/assets%255Cimages%255Cgrafo3.png": "6d1db4212d1193c143a2fbd4b0d625a0",
"assets/assets%255Cimages%255CgrafoAdanxohad.png": "4c88c5d0aed2688447ffcf1138c0130b",
"assets/assets%255Cimages%255CgrafoCaminhoCurto.png": "bd3eed68a9ecda74895047018b3086a7",
"assets/assets%255Cimages%255CgrafoCurugaer.png": "6f37412c53e5fc5c4c95993cf0dc3eaf",
"assets/assets%255Cimages%255CgrafoDesconexo.png": "091838594c360dedaf51cbde3af395f5",
"assets/assets%255Cimages%255CgrafoDesconexo1sub1.png": "2bc3ae919fea0eb2c3a60c8f95678e0b",
"assets/assets%255Cimages%255CgrafoDesconexo1sub2.png": "c0664c6513d5cc529a6149f9af74e357",
"assets/assets%255Cimages%255CgrafoDesconexo2.png": "2f8334eebec9915867f261191ad9b451",
"assets/assets%255Cimages%255CgrafoDesconexo2Fala.png": "9f09209df779f5fb788d9865cecd9923",
"assets/assets%255Cimages%255CgrafoDuesror.png": "e4ece35401804f223c0e8a2943b65f61",
"assets/assets%255Cimages%255CgrafoGravi.png": "eb3efcbe1159e1bb124837f80d8f9fb8",
"assets/assets%255Cimages%255CgrafoRiobi.png": "af9dbc523ea1af43b1d053ac9c1bab96",
"assets/assets%255Cimages%255CgrafoTurma.png": "45d4614330f79180c98e4cccf4d8870b",
"assets/assets%255Cimages%255CheicoFala.png": "fff700b2cbb7b849ccb1d4cbfe39e465",
"assets/assets%255Cimages%255CLista1.png": "d6b49c21cf9c425f2adcdf6f253bce0c",
"assets/assets%255Cimages%255CLista2.png": "91d9ca09dd50b2cc2d3dc8e5f0e2ad42",
"assets/assets%255Cimages%255CLista3.png": "f6c92eef66b996b3e795e33c5786453c",
"assets/assets%255Cimages%255CLista4.png": "f9c65307dcf7ffdf357d3703ad237fd5",
"assets/assets%255Cimages%255CLista5.png": "a5a39af089323fdb0a56014615f9df55",
"assets/assets%255Cimages%255CLista6.png": "04aa36e0ed6cacb524277c3d8bb1ef54",
"assets/assets%255Cimages%255CLista7.png": "f6c92eef66b996b3e795e33c5786453c",
"assets/assets%255Cimages%255CLista8.png": "3114987e4b29bb92cd1fbbe3ecb355f8",
"assets/assets%255Cimages%255CLista9.png": "d6b49c21cf9c425f2adcdf6f253bce0c",
"assets/assets%255Cimages%255CListaFim.png": "e4c65d949ac2793d87876d0eb2b184c2",
"assets/assets%255Cimages%255CListaFinlas.png": "cea91299b4931bf2e875081bf28ec930",
"assets/assets%255Cimages%255CListaGiltaba.png": "b1ef5f5550e93dd384449548e96992fc",
"assets/assets%255Cimages%255CListaSubs1.png": "44726988e679e1b5063654a377aa8679",
"assets/assets%255Cimages%255CListaSubs2.png": "df54d5ca9fa7bb06d67bd3ed082d85fe",
"assets/assets%255Cimages%255CListaTamanho.png": "f9d6f09be7eae39fa67229d46e823057",
"assets/assets%255Cimages%255CLogo.png": "6abc83e94e26d8f64f0d80166fe88e4c",
"assets/assets%255Cimages%255Cnoctis.png": "5d7a417aff235d64d386ca96baad3bbc",
"assets/assets%255Cimages%255CpanfletoMostra.png": "9a8178cc356bad864946f9723ff42172",
"assets/assets%255Cimages%255CpanfletoMostraRunas.png": "427641acad169193b4e3b286c21d4ab9",
"assets/assets%255Cimages%255CPilhaFundo1.png": "a97111faffbc16dee7c080da756e53f5",
"assets/assets%255Cimages%255CPilhaFundo10.png": "3c40c0d163508e103d8e1cc15c1ccf5d",
"assets/assets%255Cimages%255CPilhaFundo11.png": "d29a97425b64c5726d0b503d9fe1f1ea",
"assets/assets%255Cimages%255CPilhaFundo12.png": "3ea8c59f008fc26353b0c05756cde911",
"assets/assets%255Cimages%255CPilhaFundo13.png": "e35d6488316d3b06a50f2281e0b5390b",
"assets/assets%255Cimages%255CPilhaFundo14.png": "a61b6f9c5cd261de2752371e228d00c4",
"assets/assets%255Cimages%255CPilhaFundo2.png": "54405892566533aa66db8eae971fd001",
"assets/assets%255Cimages%255CPilhaFundo3.png": "036210472350a24881caa3b5a98e80b9",
"assets/assets%255Cimages%255CPilhaFundo4.png": "69f54f1544e480dc497e57f44ac6ecb4",
"assets/assets%255Cimages%255CPilhaFundo5.png": "a56dbd77a297c1a807934076ae113d2c",
"assets/assets%255Cimages%255CPilhaFundo6.png": "5c2f2c58a12cd59b07503f46703ea8c1",
"assets/assets%255Cimages%255CPilhaFundo7.png": "676847b6d55105e1a4a211c4f8929486",
"assets/assets%255Cimages%255CPilhaFundo8.png": "1b44845537676ff9149ed870ac82ee89",
"assets/assets%255Cimages%255CPilhaFundo9.png": "a1b8019407f48ec0318d03f71b7b2d4f",
"assets/assets%255Cimages%255CXyugasoFala.png": "d9ec6f4bbacf6fdd0682fdc43e4db37a",
"assets/assets%255Cimages%255CzuganFala.png": "5bd2f4519b69e84fe3b11eea000c881a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "75775074c3ec6315c483c8f2562f3951",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ba69ce025f56e6bc28611af3e3d2c593",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "68c2343d17f7985da7f61ebb0f1c939b",
"/": "68c2343d17f7985da7f61ebb0f1c939b",
"main.dart.js": "80c29db5b9177cfa2392978d9dcdf31e",
"manifest.json": "94ff200d03a1201aed02c04e4182b72c",
"version.json": "1efc5ac51521022076e9ee19d193efe5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
