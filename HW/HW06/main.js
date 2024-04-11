var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext('2d');

var colors = ["#00ffff", "black", "red", "magenta", "pink", "cyan", "orange"]

class HeartObject
{
    constructor(color, radius, positionX, positionY)
    {
        this.color = color;
        this.radius = radius;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    draw()
    {
        ctx.beginPath();
        for (var angle = 0; angle < Math.PI * 2; angle += 0.01)
        {
            var x = this.positionX + this.radius * Math.cos(angle);
            var y = this.positionY + this.radius * Math.sin(angle);
            ctx.lineTo(x, y);
        }
        var colorIndex = Math.floor(Math.random() * 7);
        ctx.fillStyle = colors[colorIndex];
        ctx.fill();
        ctx.closePath();
    }
}

function draw()
{
    var Circle = new HeartObject("blue", Math.random()*100, Math.random()*500, Math.random()*500)
    Circle.draw();
    requestAnimationFrame(draw);
}
//setInterval(draw, 1000.0, 60.0)

draw();