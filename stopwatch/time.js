function Time(){
    this.now;
    this.hour;
    this.minutes;
    this.seconds;
    this.startTime;
    this.stopTime;
    this.endTime;
    this.checkRun=false;

    this.On_=function(){
        return this.checkRun=true;
    }
    this.Off_=function(){
        return this.checkRun=false;
    }
    this.setTime=function(){
        this.now = new Date();
        this.hour = this.now.getHours();
        this.minutes = this.now.getMinutes();
        this.seconds = this.now.getSeconds();
    }

    this.start=function(){
        this.setTime()
        this.startTime=this.now;
        this.On_();
    }
    this.stop=function(){
        this.setTime();
        this.stopTime=this.now;
        this.Off_();
    }
    this.continue=function(){
        this.setTime()
        this.continueTime=this.now;
        this.On_();
    }
    this.end=function(){
        this.setTime();
        this.endTime=this.now;
        this.Off_();
    }
    this.reset=function(){

    }
}

// var time= new Time()
// console.log(time.checkRun);
// time.start();
// console.log(time.startTime);
// console.log(time.now);
// console.log(time.hour);
// console.log(time.minutes);
// console.log(time.seconds);
// console.log(time.checkRun);

function StopWatch(){
    this.time = new Time();
    this.time.setTime();
    this.startBtn = document.getElementById('startBtnTest')
    this.start()=function(){
        console.log(this.time.checkRun);
        this.startBtn.addEventListener('click',this.time.start());
        if(this.time.checkRun){
            console.log(this.time.checkRun);
        }
    }
}
StopWatch.prototype = new StopWatch();
var clock = new StopWatch();
clock.start();