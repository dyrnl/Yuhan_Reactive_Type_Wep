var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext('2d');

var rotateVar = 0.0;
var PI = 3.14;

ctx.translate(canvas.width / 2, canvas.height / 2);

function drawRect(angle)
{
    ctx.fillStyle = "skyblue";
    ctx.save();
    ctx.rotate(angle);
    ctx.fillRect(-50, -50, 50, 50);
    ctx.restore();
}

var rotateAngle = 0;

function draw()
{
    rotateAngle += PI/200;
    ctx.clearRect(-100, -100, canvas.width, canvas.height);
    drawRect(rotateAngle)
    requestAnimationFrame(draw);
}

draw();













// ctx.beginPath();


// // draw();
// ctx.closePath();

// // requestAnimation 안 쓸 때 사용
// setInterval(draw, 1000.0 / 60.0)

// function draw()
// {    
//     

    

    
    
//     // 다음 프레임 요청(setInterval 안 쓸 때 사용)
//     // 
// }