<?php
    include "./health_bar.php";
    $student = new User;
    $student->Substitute_health(3);
    $student->point = "4";
$title = "title";
$value = "Hello world!!";
$value = $student->health." Wow!!!! very good!!!";
$data = 0;


// 1부터 10까지 루프
for ($i = 1; $i <= 10; $i ++) {
// 짝수의 경우만
if ($i % 2 == 0) {
$data += $i;
}
}
// 결과는 2 + 4 + 6 + 8 + 10 = 30


?>
<!DOCTYPE html>
<html>
<head>
    <title>
    <?=$title?>
</title>
</head>
<body>
    <?=$value?>
<br />
    <?=$data?>
</body>
</html>

