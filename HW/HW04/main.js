// Canvas Element 불러오기
// 이 코드는 베낀 코드가 아닌 
// 다함께 공부해서 만들어낸 코드입니다. 

var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var studentID = 202327021;

const SEGMENT_HORISONTAL_SIZE = 1;
const SEGMENT_VERTICAL_SIZE = 4;

drawNum(studentID);

function drawNum(num)
{
    var digit = 0;

    var fontSize = 8;

    var padding = (SEGMENT_VERTICAL_SIZE * fontSize) + (SEGMENT_HORISONTAL_SIZE * 4 * fontSize) + (fontSize * 0.8) + fontSize;

    for (var i = num; parseInt(i) != 0; i /= 10)
        digit++;

    for (var i = 0; i < digit; i++)
    {
        var digitNum = num / (10 ** (digit - (i + 1)));
        num %= (10 ** (digit - (i + 1)));
        drawSevenSegment(padding * i, 0, fontSize, digitNum);
    }
}

function drawSevenSegment(x, y, fontSize, num)
{
    if(num > 9)
        return;

    var padding = fontSize / 3;
    
    const SEGMENT_SIZE = (SEGMENT_VERTICAL_SIZE * fontSize) / 2 + SEGMENT_HORISONTAL_SIZE * fontSize;

    var A = num & 0b1000;
    A = A >> 3;
    var B = num & 0b0100;
    B = B >> 2;
    var C = num & 0b0010;
    C = C >> 1;
    var D = num & 0b0001;
    
    // a
    if((!B & !D) | C | (B & D) | A)
    drawSegment(SEGMENT_SIZE + SEGMENT_HORISONTAL_SIZE * fontSize + padding / 2 + x, SEGMENT_HORISONTAL_SIZE * fontSize + y, fontSize, SEGMENT_HORISONTAL_SIZE, SEGMENT_VERTICAL_SIZE, false);
    
    // b
    if(!B | (!C & !D) | (C & D))
    drawSegment(SEGMENT_SIZE * 2 + SEGMENT_HORISONTAL_SIZE * fontSize + padding + x, SEGMENT_SIZE + SEGMENT_HORISONTAL_SIZE * fontSize + padding + y, fontSize, SEGMENT_HORISONTAL_SIZE, SEGMENT_VERTICAL_SIZE, true);
    
    // c
    if(!C | D | B)
    drawSegment(SEGMENT_SIZE * 2 + SEGMENT_HORISONTAL_SIZE * fontSize + padding + x, (SEGMENT_SIZE * 3) + SEGMENT_HORISONTAL_SIZE * fontSize + padding * 3 + y, fontSize, SEGMENT_HORISONTAL_SIZE, SEGMENT_VERTICAL_SIZE, true);
    
    // d
    if((!B & !D) | (!B & C) | (B & !C & D) | (C & !D) | A)
    drawSegment(SEGMENT_SIZE + SEGMENT_HORISONTAL_SIZE * fontSize + padding / 2 + x, (SEGMENT_SIZE * 4) + SEGMENT_HORISONTAL_SIZE * fontSize + padding * 4 + y, fontSize, SEGMENT_HORISONTAL_SIZE, SEGMENT_VERTICAL_SIZE, false);
    
    // e
    if((!B & !D) | (C & !D))
    drawSegment(SEGMENT_HORISONTAL_SIZE * fontSize + x, (SEGMENT_SIZE * 3) + SEGMENT_HORISONTAL_SIZE * fontSize + padding * 3 + y, fontSize, SEGMENT_HORISONTAL_SIZE, SEGMENT_VERTICAL_SIZE, true);
    
    // f
    if((!C & !D) | (B & !C) | (B & !D) | A)
    drawSegment(SEGMENT_HORISONTAL_SIZE * fontSize + x, SEGMENT_SIZE + SEGMENT_HORISONTAL_SIZE * fontSize + padding + y, fontSize, SEGMENT_HORISONTAL_SIZE, SEGMENT_VERTICAL_SIZE, true);
    
    // g
    if((!B & C) | (B & !C) | A | (B & !D))
    drawSegment(SEGMENT_SIZE + SEGMENT_HORISONTAL_SIZE * fontSize + padding / 2 + x, SEGMENT_SIZE * 2 + SEGMENT_HORISONTAL_SIZE * fontSize + padding * 2+ y, fontSize, SEGMENT_HORISONTAL_SIZE ,SEGMENT_VERTICAL_SIZE, false);
}

function drawSegment(x, y, segmentSize, hSize, vSize, isVertical)
{
    ctx.beginPath();
    
    // 현재 ctx의 위치
    var currentX = x;
    var currentY = y;

    // vertical, horizontal
    hSize *= segmentSize;
    vSize *= segmentSize;

    if(isVertical)
    {
        ctx.moveTo(currentX, currentY -= ((vSize / 2) + hSize));
        ctx.lineTo(currentX += hSize, currentY += hSize);
        ctx.lineTo(currentX, currentY += vSize);
        ctx.lineTo(currentX -= hSize, currentY += hSize);
        ctx.lineTo(currentX -= hSize, currentY -= hSize);
        ctx.lineTo(currentX, currentY -= vSize);
        ctx.lineTo(currentX += hSize, currentY -= hSize);
            
    }
    else
    {
        ctx.moveTo(currentX -= ((vSize) / 2) + hSize, currentY);
        ctx.lineTo(currentX += hSize, currentY -= hSize);
        ctx.lineTo(currentX += vSize, currentY);
        ctx.lineTo(currentX += hSize, currentY += hSize);
        ctx.lineTo(currentX -= hSize, currentY += hSize);
        ctx.lineTo(currentX -= vSize, currentY);
        ctx.lineTo(currentX -= hSize, currentY -= hSize);
    }
    
    ctx.fill();
}

// (50,300) (974, 300) magenta 3px;
ctx.beginPath();
ctx.moveTo(50, canvas.height/2);
ctx.lineTo(canvas.width - 50, canvas.height/2);
ctx.strokeStyle = "magenta";
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();