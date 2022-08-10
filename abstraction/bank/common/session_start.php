<?php 
    session_start();
    if(!isset($_SESSION['user_id'])) {
        echo "<meta http-equiv='refresh' content='0;url=/bank/setting/admin/login.html'>";
        exit;
    }else{

    }  
?>