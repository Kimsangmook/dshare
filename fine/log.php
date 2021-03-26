<?php
    /*로그 찍기
    *터미널 명령어: tail -f "파일명.txt"
    *실시간으로 터미널에 찍힙니다.
    */
	function log_write($str){
		//$cur_year = date(Y); 연도 사용하는 것 
		$cur_month = date(m); //현재 월
		$cur_day = date(d); //현재 날
		$cur_timestamp = date(c); //현재 시간
		//$dir = "./log/".$cur_year."/".$cur_month;	디렉토리용 변수	
		$myfile = fopen("logfile-".$cur_month."-".$cur_day.".txt", "a") or die("Unable to open file!"); 
        //현재 달, 현재 날 로그 파일 오픈, 파일 없을 경우 만듬, 안 열릴 경우 에러
		fwrite($myfile, "[".$cur_timestamp."]"); //시간출력,파일에 입력
		fwrite($myfile, $str."\n"); //내용출력, 파일에 입력
		fclose($myfile); //파일 끄기
	}
?>