<?php
  $desti = "jordisalarodo@gmail.com";
  $nom = $_POST["nom"];
  $correu = $_POST["correu"];
  $telefon = $_POST["telefon"];
  $missatge = $_POST["missatge"];
  $contingut = "Nom: " . $nom  . "\nCorreu: " . $correu . "\nTelèfon: " . $telefon . "\nMissatge: " . $missatge;
  mail($desti, "Contacte", $contingut);
?>
