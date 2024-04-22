window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
  
    // 캔버스의 중앙 좌표 계산
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
  
    // 로컬 좌표계 설정
    ctx.translate(centerX, centerY);

    // 별 그리기
    drawStar(ctx, 0, 0, 5, 10, 4); // outerRadius와 innerRadius 값 조정

    // 하트 그리기
    drawHeartOnStar(ctx, centerX, centerY, 10, 'red'); // 별 중앙에 하트 그리기
};

// 별 그리는 함수
function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    var rot = (Math.PI / 2) * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (var i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
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

// 별 위에 하트 그리는 함수
function drawHeartOnStar(ctx, cx, cy, size, color) {
    ctx.save(); 
    ctx.translate(cx, cy); 
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
        let x = 16 * Math.pow(Math.sin(t), 3);
        let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        ctx.lineTo(size * x, -size * y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore(); 
}
