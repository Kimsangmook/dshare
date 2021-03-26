<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<title>PHP Form Validation</title>
</head>

<body>
<?php 
	$nameMsg = $emailMsg = $genderMsg = $websiteMsg = $favtopicMsg = $commentMsg = "";
	$name = $email = $gender = $website = $favtopic = $comment = "";
	
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$name = $_POST["name"];
		$gender = $_POST["gender"];
		$email = $_POST["email"];
		$website = $_POST["website"];
		$favtopic = $_POST["favtopic"];
		$comment = $_POST["comment"];
	}
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

<h2>회원 가입 양식</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
	이름 : <input type="text" name="name">
	<br><br>
	성별 : 
	<input type="radio" name="gender" value="female">여자
	<input type="radio" name="gender" value="male">남자
	<br><br>
	이메일 : <input type="text" name="email">
	<br><br>
	홈페이지 : <input type="text" name="website">
	<br><br>
	관심 있는 분야 :
	<input type="checkbox" name="favtopic[]" value="movie"> 영화
	<input type="checkbox" name="favtopic[]" value="music"> 음악
	<input type="checkbox" name="favtopic[]" value="game"> 게임
	<input type="checkbox" name="favtopic[]" value="coding"> 코딩
	<br><br>
	기타 : <textarea name="comment"></textarea>
	<br><br>
	<input type="submit" value="전송" >

<?php 
	echo "<h2>입력된 회원 정보</h2>";
	echo "이름 : ".$name."<br>";
	echo "성별 : ".$gender."<br>";
	echo "이메일 : ".$email."<br>";
	echo "홈페이지 : ".$website."<br>";
	echo "관심 있는 분야 : ";
	if (!empty($favtopic)) {
		foreach ($favtopic as $value) {
			echo $value." ";
		}
	}
	echo "<br>기타 : ".$comment;
	log_write($name);
?>

</form>

</body>

</html>