// function onScanSuccess(decodedText, decodedResult) {
//     console.log(`Code scanned = ${decodedText}`, decodedResult);
//     sessionStorage.setItem('qrdata', decodedText)
//     window.location.href = './addgadgets.html'
//     // document.getElementById('output').textContent = decodedText;
// }

const html5QrCode = new Html5Qrcode("qr-reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
    document.getElementById('output').textContent = decodedText;
    /* handle success */
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };

// If you want to prefer back camera
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

function setqrdata() {
    const qrdata = JSON.parse(sessionStorage.getItem('qrdata'))
    const uid = qrdata.uid
    const uname = qrdata.uname

    document.getElementById('userid').setAttribute(value, uid)
    document.getElementById('username').setAttribute(value, uname)
}

// var html5QrcodeScanner = new Html5QrcodeScanner(
//     "qr-reader", { fps: 10, qrbox: 250 });
// html5QrcodeScanner.render(onScanSuccess);