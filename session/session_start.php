<?php

# 세션 글로벌 변수를 초기화
session_start();

if(!isset($_SESSION['count'])){
    $_SESSION['count'] = 0;
}
if(!isset($_SESSION['createTime'])){
    $_SESSION['createTime'] = date("Y/m/d H:i:s");
}

// # 세션 ID를 보관 하고 있는 쿠키 삭제
// $_SESSION = array();
// if(isset($_COOKIE[session_name()])){
//     setcookie(session_name().'',time() - 3600, '/');
// }

// # 현재 세션에 관련된 모든 데이터를 파괴
// session_destroy();

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>SESSION</title>
    </head>
    <body>
        <div>
            세션ID : <?= session_id() ?>
        </div>
        <div>
            dortptm tn : <?= $_SESSION['count']++ ?>
        </div>
        <div>
            세션생성일시 : <?= $_SESSION['createTime'] ?>
        </div>
        <hr>
        <div>
            <a href="session_check.php">세션유지확인</a>
            <a href="session_destroy.php">세션파괴</a>
        </div>
    </body>
</html>