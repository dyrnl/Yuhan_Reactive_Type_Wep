var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext('2d');

var PI = Math.PI;

var sunSize = 100;
var earthOrbitRadius = 200;
var earthSize = 40;
var moonOrbitRadius = 50;
var moonSize = 20;

var sunRotationSpeed = PI / 100; // 태양의 자전 속도
var earthRotationSpeed = PI / 150; // 지구의 자전 속도
var moonRotationSpeed = PI / 80; // 달의 자전 속도

var earthOrbitSpeed = PI / 200; // 지구의 공전 속도
var moonOrbitSpeed = PI / 100; // 달의 공전 속도

var rotateAngleEarth = 0;
var rotateAngleMoon = 0;
var rotateAngleSun = 0;

ctx.translate(canvas.width / 2, canvas.height / 2);

function drawRect(x, y, width, height, color) 
{
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawSun() 
{
    ctx.save();
    ctx.rotate(rotateAngleSun);
    drawRect(-sunSize / 2, -sunSize / 2, sunSize, sunSize, "orange");
    ctx.restore();
}

function drawEarth(earthOrbitSpeed) 
{
    ctx.save();
    ctx.rotate(earthOrbitSpeed); // 지구의 공전
    ctx.translate(earthOrbitRadius, 0);
    ctx.rotate(rotateAngleEarth); // 지구의 자전
    drawRect(-earthSize / 2, -earthSize / 2, earthSize, earthSize, "skyblue");
    drawMoon(rotateAngleMoon);
    ctx.restore();
}

function drawMoon(moonOrbitSpeed) 
{
    rotateAngleMoon += moonRotationSpeed;
    ctx.save();
    ctx.rotate(moonOrbitSpeed); // 달의 공전
    ctx.translate(moonOrbitRadius, 0);
    ctx.rotate(rotateAngleMoon); // 달의 자전
    drawRect(-moonSize / 2, -moonSize / 2, moonSize, moonSize, "gray");
    ctx.restore();
}

function draw() 
{
    rotateAngleSun += sunRotationSpeed;
    rotateAngleEarth -= earthRotationSpeed;
    
    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    drawSun();
    drawEarth(rotateAngleEarth);
    
    //requestAnimationFrame(draw);
}

setInterval(draw, 1000.0 / 60.0)

draw();