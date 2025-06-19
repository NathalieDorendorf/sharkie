let canvas;
let world;
let keyboard = new Keyboard();
let musicOn = false;
let backgroundMusic = new Audio('./assets/audio/background.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

function startGame() {
    canvas = document.getElementById('canvas');
    document.getElementById('startContainer').remove();
    initLevel();
    world = new World(canvas, keyboard, level1);
    playMusic();
    console.log('my Character: ', world.character);

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
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
    let fullscreenElement = document.fullscreenElement;
    let icon = document.getElementById('fullscreenIcon');
    let canvasContainer = document.getElementById('fullscreen');
    if (!fullscreenElement) {
        enterFullscreen(canvasContainer);
        changeCanvasContainerSize();
        icon.src = './assets/img/fullscreen-exit.svg';
        icon.alt = 'Exit Fullscreen';
    } else {
        exitFullscreen();
        icon.src = './assets/img/fullscreen.svg';
        icon.alt = 'Enter Fullscreen';
    }
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

function changeCanvasContainerSize() {
    setTimeout(() => {
        canvasContainer.style.width = "100vw";
        canvasContainer.style.height = "100vh";
    }, 300);
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozRequestFullScreen) {
        document.mozRequestFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

document.addEventListener('fullscreenchange', () => {
    const isFullscreen = !!document.fullscreenElement;
    const icon = document.getElementById('fullscreenIcon');
    if (!isFullscreen) {
        let canvasContainer = document.getElementById('fullscreen');
        canvasContainer.removeAttribute('style');
        icon.src = './assets/img/fullscreen.svg';
        icon.alt = 'Enter Fullscreen';
    } else {
        icon.src = './assets/img/fullscreen-exit.svg';
        icon.alt = 'Exit Fullscreen';
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
