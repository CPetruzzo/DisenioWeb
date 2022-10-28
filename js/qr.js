const contenedorQR = document.getElementById('contenedorQR');
const contenedorQR2 = document.getElementById('contenedorQR2');

const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e)=>{
  e.preventDefault();
  QR.makeCode(formulario.link.value); 
});

const QR2 = new QRCode(contenedorQR2);

formulario.addEventListener('submit', (e)=>{
  e.preventDefault();
  QR2.makeCode(formulario.link.value); 
});

