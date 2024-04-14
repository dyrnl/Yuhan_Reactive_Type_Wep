// heart.js

class HeartObject {
    constructor(x, y, size, color, speed, rotationAngle) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speed = speed;
        this.rotationAngle = rotationAngle;
        this.direction = this.rotationAngle * Math.PI / 180; // 이동 방향
    }

    draw(ctx) {
        ctx.save(); // 현재 캔버스 상태 저장
        ctx.translate(this.x, this.y); // 이동 중심점을 현재 하트의 위치로 설정
        ctx.rotate(this.direction); // 이동 방향에 따라 회전
        ctx.fillStyle = this.color;
        ctx.beginPath();
        for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
            let x = 16 * Math.pow(Math.sin(t), 3);
            let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
            ctx.lineTo(this.size * x, -this.size * y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore(); // 이전 캔버스 상태 복원
    }

    update() {
        this.x += this.speed * Math.cos(this.direction);
        this.y += this.speed * Math.sin(this.direction);
    }
}

const canvas = document.getElementById('GameScreenCanvas');

if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hearts = [];

    function createHeart() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 20 + 10;
        const color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        const speed = Math.random() * 2 + 1;
        const rotationAngle = Math.random() * 360;

        const heart = new HeartObject(x, y, size, color, speed, rotationAngle);
        hearts.push(heart);

        if (hearts.length > 100) {
            hearts.shift();
        }
    }

    setInterval(createHeart, 200);

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        hearts.forEach(heart => {
            heart.draw(ctx);
            heart.update();
        });

        requestAnimationFrame(draw);
    }

    canvas.addEventListener('mousemove', (e) => {
        createHeart();
    });

    draw();
} else {
    console.error('Canvas element not found.');
}
