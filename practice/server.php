<?php

   $hostname = $_SERVER["HTTP_HOST"]; //도메인명(호스트)명
   
   if ($hostname === "pilot000.adotenglish.com") {
      $conn = mysqli_connect("58.229.208.192", "mct", "adotAI!@34" , "AI");
   } else if ($hostname === "dshareai.cafe24.com") {
      $conn = mysqli_connect("localhost", "dshareai", "adotAI!@34", "dshareai");
   } else {
      $conn = mysqli_connect("192.168.0.67", "mct", "1234" , "AI");
   }
       
   mysqli_query($conn, "set session character_set_connection=utf8;");
   mysqli_query($conn, "set session character_set_results=utf8;");
   mysqli_query($conn, "set session character_set_client=utf8;");   
?>