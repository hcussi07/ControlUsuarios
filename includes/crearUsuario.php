<?php 
include_once("conectar.php");
$nombre = $_POST['nombre'];
$puesto = $_POST['puesto'];
$nickname = $_POST['nickname'];
$status = $_POST['status'];
$query = "INSERT INTO usuarios (nombre,puesto,nick,status)VALUES ('$nombre','$puesto','$nickname','$status')";
mysql_query($query);
 ?>