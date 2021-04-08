<?php
    session_start();
?>

<div>
    세션 ID : <?= session_id() ?>
</div>
<div>
    세션생성일시 : <? $_SESSION['createTime'] ?>
</div>
<hr>
<div>
    <a href="session_start.php">세션생성</a>
    <a href="session_destroy.php">세션파괴</a>
</div>