// Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var studentID = 202327021;

function drawNum(num)
{
        ctx.beginPath();
        ctx.moveTo(30, 30);
        ctx.lineTo(30, 90);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
}

// (50,300) (974, 300) magenta 3px;
ctx.beginPath();
ctx.moveTo(50, canvas.height/2);
ctx.lineTo(canvas.width - 50, canvas.height/2);
ctx.strokeStyle = "magenta";
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

drawNum(studentID); // 화면 좌측 상단에 숫자 쓰기