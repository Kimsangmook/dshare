<?php
session_start();

echo "파괴 전의 세션 내용<br>";
print_r($_SESSION);

$_SESSION = array();

if (isset($_COOKIR[session_name()])){
    setcookie(session_name(), '', time() - 3600, '/');
}
session_destroy();

echo "<hr>세션 파괴 후<br>";
print_r($_SESSION);
?>
<hr>
<div>
    <a href="session_start.php">세션생성</a>
</div>