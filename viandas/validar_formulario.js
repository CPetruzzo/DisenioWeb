// Obtener el formulario y el botón de envío
var formulario = document.querySelector('#formulario');
var boton = document.querySelector('#enviar');

// Agregar un evento de click al botón de envío
boton.addEventListener('click', function(evento) {
  // Prevenir el envío automático del formulario
  evento.preventDefault();
  
  // Obtener los valores de los campos del formulario
  var nombre = document.querySelector('#nombre').value;
  var email = document.querySelector('#email').value;
  var plato = document.querySelector('#plato').value;
  
  // Validar que los campos no estén vacíos
  if (nombre === '' || email === '' || plato === '') {
    alert('Por favor complete todos los campos del formulario');
  } else {
    // Enviar el formulario al archivo PHP para procesar la compra
    formulario.submit();
  }
});
