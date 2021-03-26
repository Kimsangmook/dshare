var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
/*원에 관한 변수*/
//기본값 
var ballRadius = 10;
var ballColor = "#0095DD";
//위치
var x= canvas.width/2;
var y=canvas.height-30;
//이동크기
var dx =2;
var dy =-2;

/*발판에 관한 변수*/
//기본값
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX =(canvas.width- paddleWidth)/2;

/*컨트롤에 관한 변수*/
var rightPressed = false;
var leftPressed = false;

/*벽돌변수 */
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];
for (var c=0; c<brickColumnCount; c++){
    bricks[c]=[];
    for(var r=0; r<brickRowCount; r++){
        bricks[c][r] = {
            x:0, y:0, status: 1
        };
    }
}

/*점수 및 생명*/
var score = 0;
var lives = 3;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function drawScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score:"+score, 8, 20);
}

function drawLives(){
    ctx.font ="16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

/*벽돌 */
function drawBricks(){
    for(var c=0; c<brickColumnCount; c++){
        for(var r=0; r<brickRowCount; r++){
            if(bricks[c][r].status == 1){
            bricks[c][r].x=(c*(brickWidth+brickPadding))+brickOffsetLeft;
            bricks[c][r].y=(r*(brickHeight+brickPadding))+brickOffsetTop;
            ctx.beginPath();

            ctx.rect(bricks[c][r].x, bricks[c][r].y, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
            }
        }
    }
}
/*충돌*/
function collisionDetction(){
    for(var c =0; c<brickColumnCount; c++){
        for(var r=0; r<brickRowCount; r++){
            var b =bricks[c][r];
            if(b.status ==1){
               if(x>b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight){
                    dy=-dy;
                    b.status = 0;
                    ballColor="#"+(parseInt(Math.random()*0xffffff)).toString(16);
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}
/*입력*/
function keyDownHandler(e){
    if(e.keyCode == 39){
        rightPressed = true;
    }
    else if(e.keyCode == 37){
        leftPressed =true;
    }
}
function keyUpHandler(e){
    if(e.keyCode == 39){
        rightPressed=false;
    }
    else if(e.keyCode == 37){
        leftPressed = false;
    }
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2); //원그리기
    ctx.fillStyle =ballColor; //색
    ctx.fill();
    ctx.closePath();
}
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);//캔버스 다시 그리기
    drawBall(); // 원그리기
    drawPaddle();
    drawBricks();
    drawScore();
    drawLives();
    collisionDetction();


    x +=dx;
    y +=dy;

    /*원 충돌 제어 */
    if(y + dy < ballRadius ){
        dy=-dy;
        ballColor="#"+(parseInt(Math.random()*0xffffff)).toString(16);
    }else if(y+dy > canvas.height-ballRadius){
        if(x >= paddleX && x <= paddleX + paddleWidth){
            dy = -dy;
        }
        else{
            lives--;
            if(!lives){
                alert("GAME OVER");
                document.location.reload();
            }
            else{
                x = canvas.width/2;
                y = canvas.height-30;
                dx =3;
                dy=-3;
                paddleX = (canvas.width -paddleWidth)/2;
            }
        }
    }
    if(x+dx < ballRadius ||x+dx>canvas.width - ballRadius){
        dx=-dx;
        ballColor="#"+(parseInt(Math.random()*0xffffff)).toString(16);
    }
    /*발판 제어 */
    if(rightPressed && paddleX< canvas.width-paddleWidth){
        paddleX +=7;
    }
    else if(leftPressed && paddleX > 0){
        paddleX -=7;
    }

    requestAnimationFrame(draw);
}

draw();
