let canvas;
let world;
let keyboard = new Keyboard();
let musicOn = false;
let backgroundMusic = new Audio('./assets/audio/background.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;
let winSound = new Audio('./assets/audio/win.mp3');
winSound.volume = 0.7;

function restartGame() {
    location.reload();
}

function startConfetti() {
    const confettiCanvas = document.getElementById('confetti-canvas');
    confettiCanvas.classList.remove('d-none');
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const colors = ['#ff595e', '#ffca3a', '#6a4c93', '#1982c4', '#8ac926', '#ff6d00'];
    const pieces = Array.from({ length: 120 }, () => ({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * -confettiCanvas.height,
        w: 8 + Math.random() * 8,
        h: 4 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 2 + Math.random() * 3,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.2,
        drift: (Math.random() - 0.5) * 1.5,
    }));

    function drawConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        ctx.globalCompositeOperation = 'source-over';
        pieces.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
            p.y += p.speed;
            p.x += p.drift;
            p.angle += p.spin;
            if (p.y > confettiCanvas.height) {
                p.y = -p.h;
                p.x = Math.random() * confettiCanvas.width;
            }
        });
        requestAnimationFrame(drawConfetti);
    }
    drawConfetti();
    winSound.play().catch(() => {});
}

function startGame() {
    canvas = document.getElementById('canvas');
    initLevel();
    world = new World(canvas, keyboard, level1);
    // playMusic();
    console.log('my Character: ', world.character);
    toggleDisplayNone('canvas');
    toggleDisplayNone('startscreen');
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    if (document.fullscreenElement) {
        const canvasContainer = document.getElementById('fullscreen');
        canvasContainer.style.display = 'flex';
        canvasContainer.style.alignItems = 'center';
        canvasContainer.style.justifyContent = 'center';
        canvasContainer.style.width = '100vw';
        canvasContainer.style.height = '100vh';
        canvasContainer.style.background = 'black';
        canvas.style.width = 'auto';
        canvas.style.height = '100vh';
    }
}

window.addEventListener("keydown", (event) => {
    // console.log(event);
    if (event.key == 39 || event.key === 'ArrowRight' || event.key === 'd') {
        keyboard.RIGHT = true;
    }
    if (event.key == 37 || event.key === 'ArrowLeft' || event.key === 'a') {
        keyboard.LEFT = true;
    }
    if (event.key == 38 || event.key === 'ArrowUp' || event.key === 'w') {
        keyboard.UP = true;
    }
    if (event.key == 40 || event.key === 'ArrowDown' || event.key === 's') {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32 || event.key === 'Shift' || event.key === 'Space' || event.key === ' ') {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 70 || event.key === 'f' || event.keyCode == 67 || event.key === 'c') {
        keyboard.THROW = true;
    }
});

window.addEventListener("keyup", (event) => {
    if (event.key == 39 || event.key === 'ArrowRight' || event.key === 'd') {
        keyboard.RIGHT = false;
    }
    if (event.key == 37 || event.key === 'ArrowLeft' || event.key === 'a') {
        keyboard.LEFT = false;
    }
    if (event.key == 38 || event.key === 'ArrowUp' || event.key === 'w') {
        keyboard.UP = false;
    }
    if (event.key == 40 || event.key === 'ArrowDown' || event.key === 's') {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32 || event.key === 'Shift' || event.key === 'Space' || event.key === ' ') {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 70 || event.key === 'f' || event.keyCode == 67 || event.key === 'c') {
        keyboard.THROW = false;
    }
});

function checkOrientation() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        if (window.innerHeight < 480) {
            newHeight = window.innerHeight;
            document.getElementById('canvas').style.height = `${newHeight}px`;
        }
    }
    else {
        document.getElementById('canvas').style.height = `100%`;
    }
}

function toggleFullscreen() {
    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
    if (!isFullscreen) {
        const el = document.documentElement;
        const request = el.requestFullscreen
            || el.webkitRequestFullscreen
            || el.mozRequestFullScreen
            || el.msRequestFullscreen;
        if (request) request.call(el).catch(() => {});
    } else {
        exitFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

document.addEventListener('fullscreenchange', () => {
    const isFullscreen = !!document.fullscreenElement;
    const icon = document.getElementById('fullscreenIcon');
    const canvasContainer = document.getElementById('fullscreen');
    const gameCanvas = document.getElementById('canvas');
    const gameRunning = !gameCanvas.classList.contains('d-none');
    if (isFullscreen) {
        if (gameRunning) {
            canvasContainer.style.display = 'flex';
            canvasContainer.style.alignItems = 'center';
            canvasContainer.style.justifyContent = 'center';
            canvasContainer.style.width = '100vw';
            canvasContainer.style.height = '100vh';
            canvasContainer.style.background = 'black';
            gameCanvas.style.width = 'auto';
            gameCanvas.style.height = '100vh';
        }
        icon.src = './assets/img/fullscreen-exit.svg';
        icon.alt = 'Exit Fullscreen';
    } else {
        canvasContainer.removeAttribute('style');
        gameCanvas.removeAttribute('style');
        icon.src = './assets/img/fullscreen.svg';
        icon.alt = 'Enter Fullscreen';
    }
}, false);

function playMusic() {
    if (!musicOn) {
        backgroundMusic.play();
        musicOn = true;
        document.getElementById('soundToggleIcon').src = './assets/img/sound-on.svg';
        document.getElementById('soundToggleIcon').alt = 'Music On';
    }
}

function toggleMusic() {
    const icon = document.getElementById('soundToggleIcon');
    musicOn = !musicOn;
    if (musicOn) {
        backgroundMusic.play();
        icon.src = './assets/img/sound-on.svg';
        icon.alt = 'Music On';
    } else {
        backgroundMusic.pause();
        icon.src = './assets/img/sound-off.svg';
        icon.alt = 'Music Off';
    }
}

function toggleDisplayNone(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle('d-none');
    }
}

function toggleOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        toggleDisplayNone(overlayId);
        toggleDisplayNone('startscreen');
    }
    const content = overlay.querySelector('.overlay-content');
    if (content) {
        content.scrollTop = 0;
    }
}

function goToHome() {
    world.stopGame();
    world = null;
    toggleDisplayNone('canvas');
    toggleDisplayNone('startscreen');
    if (backgroundMusic && typeof backgroundMusic.pause === 'function') {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }
    const soundIcon = document.getElementById('soundToggleIcon');
    if (soundIcon) {
        soundIcon.src = './assets/img/sound-on.svg';
        soundIcon.alt = 'Sound On';
    }
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}

function togglePlayPauseGame() {
    const playPauseButton = document.getElementById('playToggleIcon');
    if (!world) return;
    if (!world.isPaused) {
        world.pauseGame();
        playPauseButton.src = './assets/img/play.svg';
        playPauseButton.alt = 'Resume Game';
    } else {
        world.resumeGame();
        playPauseButton.src = './assets/img/pause.svg';
        playPauseButton.alt = 'Pause Game';
    }
}
