// Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var studentID = 202327021;

function drawNum(num)
{
    
}

function drawSegment()
{
    ctx.beginPath();
    
    // 현재 ctx의 위치
    var currentX = 60;
    var currentY = 40;

    // vertical, horizontal
    var vSize = 30;
    var hSize = 10;

    ctx.moveTo(currentX, currentY -= ((vSize / 2) + hSize));
    ctx.stroke();
    ctx.lineTo(currentX += hSize, currentY += hSize);
    ctx.stroke();
    ctx.lineTo(currentX, currentY += hSize);
    ctx.stroke();
    ctx.lineTo(currentX -= hSize, currentY += hSize);
    ctx.stroke();
    ctx.lineTo(currentX -= hSize, currentY -= hSize);
    ctx.stroke();
    ctx.lineTo(currentX, currentY -= vSize);
    ctx.stroke();
    ctx.lineTo(currentX += hSize, currentY -= hSize);
    ctx.stroke();
    ctx.fill();
}

drawSegment();

// (50,300) (974, 300) magenta 3px;
ctx.beginPath();
ctx.moveTo(50, canvas.height/2);
ctx.lineTo(canvas.width - 50, canvas.height/2);
ctx.strokeStyle = "magenta";
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();



drawNum(studentID); // 화면 좌측 상단에 숫자 쓰기