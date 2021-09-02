<?php
    $hostname = $_SERVER["HTTP_HOST"]; //도메인명(호스트)명
    if($hostname !== "dshareai.cafe24.com") {
    $conn = mysqli_connect("192.168.0.67", "mct", "1234" , "AI");
    // $conn = mysqli_connect("172.27.194.180", "mct", "1234" , "AI");
    } else {
    $conn = mysqli_connect("localhost", "dshareai", "adotAI!@34", "dshareai");
    }
    mysqli_query($conn, "set session character_set_connection=utf8;");
    mysqli_query($conn, "set session character_set_results=utf8;");
    mysqli_query($conn, "set session character_set_client=utf8;");  

    // var_dump($lines);
    $csv = array_map('str_getcsv', file('new2.csv'));
    // var_dump($csv);
    // var_dump($csv[0]);
    $columns = $csv[0];
    // var_dump($columns);
    // echo '<br>';
    unset($csv[0]);
    // foreach($csv as $value) {
    //     var_dump($value);
    //     echo '<br>';
    // }
    mysqli_begin_transaction($conn);
    foreach($csv as $key => $value) {
        echo $key;
        echo $value[4];
        echo '<br>';
        $sqlRT= "select no from Problems where name regexp '".$value[4]."$'";
        echo $sqlRT;
        $varResult=0;
        $RT_set=mysqli_query($conn, $sqlRT);
        if(mysqli_num_rows($RT_set)>0){ // 존재할 경우
            while($row=mysqli_fetch_assoc($RT_set)){ //없을때까지
                $varResult=$row['no'];
            }
        }

        $sqlRT2 = "select no, name from Problems where no ";
        $sqlRT2 .= "NOT IN (select distinct child from RevStructs union select distinct parent from RevStructs)";
        $sqlRT2 .= "and type2 = 'REV' and type3 = 'EXPAND' and question = \"".$value[5]."\"";
        
        echo $sqlRT2;
        $varResult2=0;
        $RT2_set=mysqli_query($conn, $sqlRT2);
        if(mysqli_num_rows($RT2_set)>0){ // 존재할 경우
            while($row=mysqli_fetch_assoc($RT2_set)){ //없을때까지
                $varResult2=$row['no'];
            }
        }
        echo '<br>';

        if($varResult==0||$varResult2 == 0){
            echo "요호호";
            $sqlinsert = "";
        }else{
            $sqlinsert = "INSERT INTO RevStructs (parent, child) VALUES (".$varResult.",".$varResult2.")";
        }
        var_dump($sqlinsert);
        echo '<br>';
        // if(!mysqli_query($conn, $sqlinsert)){
        //     echo "{$key}번 QUESTION 에러";
        //     echo "{$key}번 QUESTION 에러";
        //     echo "{$key}번 QUESTION 에러";
        //     echo "{$key}번 QUESTION 에러";
        //     echo "{$key}번 QUESTION 에러";
        //     echo "{$key}번 QUESTION 에러";
        //     echo '<br>';
        //     mysqli_rollback($conn);
        // }

        // $elements = array();
        // $sqlQuestion = "INSERT INTO Elements (view_id, form_id, contents, type) VALUES (28, -1, '" . addslashes($value[5]) . "', 'QUESTION')";
        // echo $sqlQuestion;
        // echo '<br>';
        // if(!mysqli_query($conn, $sqlQuestion)){
        //     echo "{$key}번 QUESTION 에러";
        //     echo "{$key}번 QUESTION 에러";
        //     echo "{$key}번 QUESTION 에러";
        //     echo "{$key}번 QUESTION 에러";
        //     echo "{$key}번 QUESTION 에러";
        //     echo "{$key}번 QUESTION 에러";
        //     echo '<br>';
        //     mysqli_rollback($conn);
        //     break;
        // }
        // $question_id = mysqli_insert_id($conn);
        // $elements['QUESTION'] = $question_id;
        // $layout_id;
        // if($value[17]) {
        //     $layout_id = 25;
        //     $sqlPassage = "INSERT INTO Elements (view_id, form_id, contents, type) VALUES (41, -1, '" . addslashes($value[17]) . "', 'PASSAGE')";
        //     if(!mysqli_query($conn, $sqlPassage)){
        //         echo "{$key}번 PASSAGE 에러";
        //         echo "{$key}번 PASSAGE 에러";
        //         echo "{$key}번 PASSAGE 에러";
        //         echo "{$key}번 PASSAGE 에러";
        //         echo "{$key}번 PASSAGE 에러";
        //         echo "{$key}번 PASSAGE 에러";
        //         echo '<br>';
        //         mysqli_rollback($conn);
        //         break;
        //     }
        //     $passage_id = mysqli_insert_id($conn);
        //     $elements['PASSAGE'] = $passage_id;
        //     echo $sqlPassage;
        //     echo '<br>';
        // }
        // else {
        //     $layout_id = 22;
        //     $elements['PASSAGE'] = -1;
        // }
        // $elements['WORDS'] = -1;
        // $elements['BOX'] = -1;
        // $elements['DIRECTION'] = -1;
        // $choices = array();
        // $choices['CHOICE1'] = $value[6];
        // $choices['CHOICE2'] = $value[7];
        // $choices['CHOICE3'] = $value[8];
        // $choices['CHOICE4'] = $value[9];
        // $choicejson = json_encode($choices);
        // var_dump($choicejson);
        // $sqlChoices = "INSERT INTO Elements (view_id, form_id, contents, type) VALUES (29, -1, '" . addslashes($choicejson) . "', 'CHOICES')";
        // echo $sqlChoices;
        // echo '<br>';
        // if(!mysqli_query($conn, $sqlChoices)){
        //     echo "{$key}번 CHOICES 에러";
        //     echo "{$key}번 CHOICES 에러";
        //     echo "{$key}번 CHOICES 에러";
        //     echo "{$key}번 CHOICES 에러";
        //     echo "{$key}번 CHOICES 에러";
        //     echo "{$key}번 CHOICES 에러";
        //     echo '<br>';
        //     mysqli_rollback($conn);
        //     break;
        // }
        // $choices_id = mysqli_insert_id($conn);
        // $elements['CHOICES'] = $choices_id;
        // $elements['SENTENCE'] = 2830;
        // $elementjson = json_encode($elements);
        // echo $elementjson;
        // $name = $value[0]."_".$value[4];
        // var_dump($name);
        // $type = 'SYNTAX';
        // $type2 = 'REV';
        // $type3 = 'EXPAND';
        // $answer = '{"ANSWER1" : 1}';
        // $question = $value[5];
        // $sqlInsert = "INSERT INTO Problems (layout_id, elements, name, answer, type, type2, type3, question) VALUES ({$layout_id}, '" . addslashes($elementjson) . "', '{$name}', '" . addslashes($answer) . "', '{$type}', '{$type2}', 'EXPAND', '" . addslashes($question) . "')";
        // echo "<br>";
        // echo $sqlInsert;
        // echo "<br>";
        // if(!mysqli_query($conn, $sqlInsert)){
        //     echo "{$key}번 PROBLEMS 에러";
        //     echo "{$key}번 PROBLEMS 에러";
        //     echo "{$key}번 PROBLEMS 에러";
        //     echo "{$key}번 PROBLEMS 에러";
        //     echo "{$key}번 PROBLEMS 에러";
        //     echo "{$key}번 PROBLEMS 에러";
        //     echo '<br>';
        //     mysqli_rollback($conn);
        //     break;
        // }
        // echo '<br>';
        // echo '<br>';
    }
    // mysqli_commit($conn);
    mysqli_close($conn);
?>