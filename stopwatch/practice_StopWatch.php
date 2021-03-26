<script>

interface Actions{
    Off_();
    On_();
    setTime();
    start();
    stop();
    continue();
    end();
    reset();
}

class Practice_StopWatch implements Actions
{   
    private $now;
    private $startTime;
    private $stopTime;
    private $endTime;
    private $check_run= false;

    public function Off_()
    {
        $this -> $check_run = false;
    }

    public function On_()
    {
        $this -> $check_run = true;
    }
    public function setTime()
    {
        $this -> $now = new Date(time()*1000); 
    }

    public function start()
    {
        setTime();
        $this -> $startTime=$now; 
        On_();
    }
    public function stop()
    {
        setTime();
        $this -> $stopTime=$now; 
        Off_();
    }
    public function continue()
    {

    }
    public function end()
    {
        setTime();
        $this -> $endTime=$now; 
        On_();
    }
    public function reset()
    {
        setTime();
        $this -> $startTime=$now;
        On_();
    }

    public function update_clock()
    {
        setTime();
        Number.prototype.sm = function(){
        return (this > 9 ? '' : '0') + this;
        };
        this->$endTimenow.setSeconds(now.getSeconds() + 1);
        var h = now.getHours().sm()
        var m = now.getMinutes().sm()
        var s = now.getSeconds().sm();
        document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
	    setTimeout('startTime()',1000);

    }


    function microtime_float(){
    
        list($usec, $sec) = explode(" ", microtime());
    
        return ((float)$usec + (float)$sec);
    }



}



<script>