window.onload = function() {
  // variables
  var urlAPK = "sebastiancck.github.io/app.apk"; 
  var QRCodigoDiv = document.getElementById("QRCodigo");
  var QRTexto = document.getElementById("QRMsg");
  var userAgent = navigator.userAgent;

  // identificador de dispositivo 
  var CelularSi = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  // verificar si esta en celular o pc para mostrar: qr o boton de descarga
  if (CelularSi) {
      document.getElementById("ApartadoBotonDescargar").style.display = "block";
      document.getElementById("ApartadoQRDescargar").style.display = "none";
      QRTexto.style.display = "none"; 
  } else {
      document.getElementById("ApartadoBotonDescargar").style.display = "none";
      document.getElementById("ApartadoQRDescargar").style.display = "block";

      // creacion de la imagen del qr
      var img = document.createElement('img');
      img.src = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(urlAPK);
      img.width = 200;
      img.height = 200;
      QRCodigoDiv.appendChild(img);
  }
};

