<script>
class Time{
    this.now;
    this.startTime;
    this.stopTime;
    this.endTime;
    this.checkRun=false;
    ON_(){
        return this.checkRun=true;
    }
    Off_(){
        return this.checkRun=false;
    }
    setTime(){
        this.now = new Date(<?php echo time(); ?>*1000);
    }
    start(){

    }
    stop(){

    }
    continue(){

    }
    end(){

    }
    reset(){

    }
}

</script>