if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/public/sw.js')
        .then((reg) => { console.log('ServiceWorker registered',reg) })
        .catch((err) => { console.log('ServiceWorker not registered',err) })
}