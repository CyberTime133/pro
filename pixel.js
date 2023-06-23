window.addEventListener('load', () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    function drawRandomPoint() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        ctx.beginPath();
        ctx.arc(x, y, 1, 0, 2 * Math.PI);
        ctx.fill();
    }

    for (let i = 0; i < 1000; i++) {
        drawRandomPoint();
    }
});
