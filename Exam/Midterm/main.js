window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var startButtonClicked = false; // 시작 버튼 클릭 여부

    // 중앙에 흰색 네모 그리기
    drawSquare(ctx, canvas.width / 2 - 50, canvas.height / 2 - 20, 100, 40, 'white', '시작');

    // 캔버스 클릭 이벤트 처리
    canvas.addEventListener('click', function(event) {
        var rect = canvas.getBoundingClientRect();
        var mouseX = event.clientX - rect.left;
        var mouseY = event.clientY - rect.top;

        // 시작 버튼을 클릭한 경우
        if (!startButtonClicked && mouseX >= canvas.width / 2 - 50 && mouseX <= canvas.width / 2 + 50 &&
            mouseY >= canvas.height / 2 - 20 && mouseY <= canvas.height / 2 + 20) {
            startButtonClicked = true; // 시작 버튼 클릭 상태로 변경
            // 시작 버튼을 클릭한 경우, 1초 후에 별과 하트를 그리는 함수 호출
            setTimeout(function() {
                clearCanvas(ctx); // 캔버스 초기화
                drawStar(ctx, canvas.width / 2, canvas.height / 2, 5, 10, 4); // 별 그리기
                drawRandomHeart(ctx, canvas.width, canvas.height, 15, 'red'); // 하트 그리기
            }, 1000); // 1초 후에 동작
            // 네모의 색상을 변경
            drawSquare(ctx, canvas.width / 2 - 50, canvas.height / 2 - 20, 100, 40, 'rgb(0, 32, 96)', '시작');
            // 마우스 이벤트 제거
            canvas.removeEventListener('mousemove', mouseMoveHandler);
        }
    });

    // 네모 위에 마우스를 올렸을 때 색상 변경
    canvas.addEventListener('mousemove', mouseMoveHandler);

    // 마우스 이벤트 처리 함수
    function mouseMoveHandler(event) {
        var rect = canvas.getBoundingClientRect();
        var mouseX = event.clientX - rect.left;
        var mouseY = event.clientY - rect.top;

        // 시작 버튼을 클릭하지 않았고, 마우스가 네모 위에 있는 경우에만 색상 변경
        if (!startButtonClicked && mouseX >= canvas.width / 2 - 50 && mouseX <= canvas.width / 2 + 50 &&
            mouseY >= canvas.height / 2 - 20 && mouseY <= canvas.height / 2 + 20) {
            // 네모의 색상 변경
            drawSquare(ctx, canvas.width / 2 - 50, canvas.height / 2 - 20, 100, 40, 'rgb(248, 203, 178)', '시작');
        } else {
            // 네모의 색상을 다시 흰색으로 변경
            drawSquare(ctx, canvas.width / 2 - 50, canvas.height / 2 - 20, 100, 40, 'white', '시작');
        }
    }
};

// 흰색 네모 그리기
function drawSquare(ctx, x, y, width, height, color, text) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = 'black'; // 외곽선 색상 설정
    ctx.lineWidth = 2; // 외곽선 두께 설정
    ctx.strokeRect(x, y, width, height); // 외곽선 그리기
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(text, x + 25, y + 27);
}

// 캔버스 초기화 함수
function clearCanvas(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

// 별 그리는 함수
function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    var rot = (Math.PI / 2) * 3;
    var step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (var i = 0; i < spikes; i++) {
        var x = cx + Math.cos(rot) * outerRadius;
        var y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.lineWidth = 2; // 선 굵기 변경
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.fillStyle = 'gold';
    ctx.fill();
}

// 랜덤한 위치에 하트 그리는 함수
function drawRandomHeart(ctx, canvasWidth, canvasHeight, size, color) {
    const x = Math.random() * canvasWidth;
    const y = Math.random() * canvasHeight;

    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
        let px = 16 * Math.pow(Math.sin(t), 3);
        let py = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        ctx.lineTo(size * px / 20, -size * py / 20); // 크기를 작게 조정
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}
