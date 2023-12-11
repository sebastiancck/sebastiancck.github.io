window.onload = function() {
  var urlAPK = "app.apk"; 
  var qrCodeDiv = document.getElementById("qrcode");

  var img = document.createElement('img');

  img.src = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(urlAPK);
  img.width = 200;
  img.height = 200;

  qrCodeDiv.appendChild(img);

  // Obtener el User-Agent del navegador
  const userAgent = navigator.userAgent;

  // Verificar si es un dispositivo móvil
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  // Obtener referencias a los elementos
  const qrCodeSection = document.getElementById('qrCodeSection');
  const downloadButtonSection = document.getElementById('downloadButtonSection');

  // Mostrar u ocultar los elementos basados en el tipo de dispositivo
  if (isMobile) {
      qrCodeSection.style.display = 'none'; // Ocultar el QR en dispositivos móviles
      downloadButtonSection.style.display = 'block'; // Mostrar el botón de descarga en dispositivos móviles
  } else {
      qrCodeSection.style.display = 'block'; // Mostrar el QR en PCs
      downloadButtonSection.style.display = 'none'; // Ocultar el botón de descarga en PCs
  }
};
