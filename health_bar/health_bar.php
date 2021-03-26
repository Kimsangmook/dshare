<?php
class User{
    public $health = /*문제의 갯수-1 */null;
    public $point = /*누적 health*/null;

    function Substitute_health( $problem_num){
        $this->health = $problem_num;
    }
    function Substitute_point(){

    }
}

// class HealthBar{
//     $User;
//     private $UI_ProgrssBar;
//     private $UI_TextBlock;
//     private $UI_BackGruounBar;

//     function SetUser(User $student){
//         this->$User=$student;
//     }
//     function SetPercent(User)
// }
// HealthBar :: SetPercent($User){

// }
// HealthBar :: SetUser(User* $student) 
?> 