/*화면에 시간 찍어주는 javascript*/
// class="clock"을 달아주면 적용됩니다.

const clock = document.querySelector('.clock'); //clock이라는 클라스 선택


function getTime(){
    const time = new Date(); //time 인스턴스
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clock.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
    //화면에 뿌리기
}


function init(){
    setInterval(getTime, 1000); //1초마다 getTime함수 호출
}

init();