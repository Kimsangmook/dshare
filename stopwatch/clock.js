/*화면에 시간 찍어주는 javascript*/
// class="clock"을 달아주면 적용됩니다.

// const clock = document.querySelector('.clock'); //clock이라는 클라스 선택
// let now;
// let hour;
// let minutes;
// let seconds;
// let stopTime;

// let checkRun=false;

// var timerStart;

function addZero(num) {
    return (num < 10 ? '0'+num : ''+num)
  }

// function myGetTime(){
//     now = new Date(); //time 인스턴스
//     hour = now.getHours();
//     minutes = now.getMinutes();
//     seconds = now.getSeconds();
//     clock.innerHTML = `${addZero(hour)}:${addZero(minutes)}:${addZero(seconds)}`
//     //화면에 뿌리기
// }


// function init(){
//     setInterval(getTime, 1000); //1초마다 getTime함수 호출
// }

// setInterval(myGetTime, 1000);

var startTime=0;
var endTime=0;
var timerStart
var Min;
var Sec;
var Milisec;

function Start(){

    if(!startTime) {
        startTime = Date.now()
    } else {
        startTime += (Date.now() - endTime)
    }
    timerStart = setInterval(function() {
    var nowTime = new Date(Date.now() - startTime)
    console.log(nowTime);

    Min = addZero(nowTime.getMinutes())
    Sec = addZero(nowTime.getSeconds())
    Milisec = addZero(Math.floor(nowTime.getMilliseconds() / 10))

    console.log(Sec);
    // console.log(Milisec);
    document.getElementById('postTestMin').innerText = Min
    document.getElementById('postTestSec').innerText = Sec
    document.getElementById('postTestMilisec').innerText = Milisec
    }, 1)
}

function Stop(){

  if(timerStart) {
    clearInterval(timerStart);
    endTime = Date.now();
}
}
function Clear(){
    startTime = 0
    Min = 0
    Sec = 0
    Milisec = 0
    document.getElementById('postTestMin').innerText = '00'
    document.getElementById('postTestSec').innerText = '00'
    document.getElementById('postTestMilisec').innerText = '00'
}