window.onload = function() {
    var urlAPK = "app.apk"; 
    var qrCodeDiv = document.getElementById("qrcode");
  
    var img = document.createElement('img');
  
    img.src = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(urlAPK);
    img.width = 200;
    img.height = 200;
  
    qrCodeDiv.appendChild(img);
  };