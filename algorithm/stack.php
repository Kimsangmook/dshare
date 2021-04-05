<?php
$stack = [];
array_push($stack, 'A');
array_push($stack, 'B');
array_push($stack, 'C');
echo json_encode($stack)."\n";
# ["A","B","C"]
echo end($stack)."\n";
# C

$element = array_pop($stack);
echo $element, json_encode($stack)."\n";
# C["A","B"]
$element = array_pop($stack);
echo $element, json_encode($stack)."\n";
# B["A"]
$element = array_pop($stack);
echo $element, json_encode($stack)."\n";
# A[]
?>
