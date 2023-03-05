<?php
  // Obtener los datos del formulario
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $plato = $_POST['plato'];
  
  // Conectar a la base de datos y guardar la información de la compra
  $conexion = mysqli_connect('localhost', 'usuario', 'contraseña', 'basedatos');
  $consulta = "INSERT INTO compras (nombre, email, plato) VALUES ('$nombre', '$email', '$plato')";
  mysqli_query($conexion, $consulta);
  mysqli_close($conexion);
  
  // Redirigir al usuario a una página de confirmación
  header('Location: confirmacion.php');
?>
