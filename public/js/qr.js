function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
    sessionStorage.setItem('qrdata', decodedText)
    window.location.href = './addgadgets.html'
    document.getElementById('output').textContent = decodedText;
}

function setqrdata() {
    const qrdata = JSON.parse(sessionStorage.getItem('qrdata'))
    const uid = qrdata.uid
    const uname = qrdata.uname

    document.getElementById('userid').setAttribute(value, uid)
    document.getElementById('username').setAttribute(value, uname)
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });

html5QrcodeScanner.render(onScanSuccess);