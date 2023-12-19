if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/public/sw.js")
    .then((reg) => {
      console.log("ServiceWorker registered", reg);
    })
    .catch((err) => {
      console.log("ServiceWorker not registered", err);
    });
}

// facebook integration
window.fbAsyncInit = function () {
  FB.init({
    appId: "575850994726893",
    xfbml: true,
    version: "v18.0",
  });
};

document.getElementById('shareBtn').onclick = function() {
    FB.ui({
      display: 'popup',
      method: 'share',
      href: 'https://developers.facebook.com/docs/',
    }, function (response) {
        console.log("shared",response);
    });
  }