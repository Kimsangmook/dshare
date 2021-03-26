<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <title>PHP</title>
  </head>
  <body>
    <?php
    include_once 'time.php';
    ?>

    <h1 class = "h1-clock"></h1>

    <script src = "clock.js"></script>

    <p>
    <script> 
      var now = new Date(<?php echo time(); ?>*1000);
      var time = new Time();
      console.log(now);

      Number.prototype.sm = function(){
        return (this > 9 ? '' : '0') + this;
      }; 

      function startTime() { 
	      now.setSeconds(now.getSeconds() + 1);
        // console.log(now.setSeconds(now.getSeconds() + 1));
        var h = now.getHours().sm()
        // console.log(h);
        var m = now.getMinutes().sm()
        // console.log(m);
        var s = now.getSeconds().sm();
        console.log(s);
        document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
	      setTimeout('startTime()',1000);
      }
    </script> 
    <body onload="startTime()"> 
    <div id="time"></div>
    </p>
    <div>
    	<div >
        <span id="ptestMin" >00</span>
        <span>:</span>
        <span id="ptestSec">00</span>
        <span >.</span>
        <span id="ptestMilisec">00</span>
	    </div>
	    <div>
	  	  <ul id="recordListTest" ></ul>
	    </div>
	    <div >
		   <button type="button" id="startBtnTest" >START</button>
		   <button type="button" id="stopBtnTest" >STOP</button>
	    </div>
    </div>
    <script>
      var stTime = 0
      var endTime = 0
      var timerStart

      var testMin
      var testSec
      var testMilisec

      var startBtn = document.getElementById('startBtnTest')
      var stopBtn = document.getElementById('stopBtnTest')
      var recordList = document.getElementById('recordListTest')

      startBtn.addEventListener('click', function() {
        if(this.innerText == 'RECORD' && testMilisec) {
          var li = document.createElement('li')
          li.style.color = '#fff'
          li.innerText = testMin + ' : ' + testSec + ' : ' + testMilisec
          if(! recordList.firstChild) {
            recordList.append(li)
          } else {
            recordList.insertBefore(li, recordList.firstChild)
          }
          return false
        }
        this.innerText = 'RECORD'
        
        if(!stTime) {
          stTime = Date.now()
        } else {
          stopBtn.innerText = 'STOP'
          stTime += (Date.now() - endTime)
        }
        
        timerStart = setInterval(function() {
          var nowTime = new Date(Date.now() - stTime)

          testMin = addZero(nowTime.getMinutes())
          testSec = addZero(nowTime.getSeconds())
          testMilisec = addZero(Math.floor(nowTime.getMilliseconds() / 10))

          document.getElementById('ptestMin').innerText = testMin
          document.getElementById('ptestSec').innerText = testSec
          document.getElementById('ptestMilisec').innerText = testMilisec
        }, 1)
      })
      
      stopBtn.addEventListener('click', function() {
        if(timerStart) {
          clearInterval(timerStart)

          if(this.innerText == 'STOP') {
            endTime = Date.now()
            this.innerText = 'RESET'
            startBtn.innerText = 'RESTART'
          } else {
            stTime = 0
            testMin = 0
            testSec = 0
            testMilisec = 0
            document.getElementById('ptestMin').innerText = '00'
            document.getElementById('ptestSec').innerText = '00'
            document.getElementById('ptestMilisec').innerText = '00'
            startBtn.innerText = 'START'
            this.innerText = 'STOP'
            timerStart = null
            recordList.innerHTML = ''
          }
        }
      })

      function addZero(num) {
        return (num < 10 ? '0'+num : ''+num)
      }
    </script>
  </body>
</html>