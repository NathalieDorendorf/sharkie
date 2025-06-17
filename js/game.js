let canvas;
let world;
let keyboard = new Keyboard();

function startGame() {
    canvas = document.getElementById('canvas');
    document.getElementById('startContainer').remove();
    initLevel();
    world = new World(canvas, keyboard, level1);
    backgroundMusic.play();
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
    const icon = document.getElementById('fullscreenIcon');
    const fullscreenElement = document.fullscreenElement;

    if (!fullscreenElement) {
        enterFullscreen();
        icon.src = './assets/img/fullscreen-exit.svg';
        icon.alt = 'Exit Fullscreen';
    } else {
        exitFullscreen();
        icon.src = './assets/img/fullscreen.svg';
        icon.alt = 'Enter Fullscreen';
    }
}

function enterFullscreen() {
    const canvasContainer = document.getElementById('fullscreen');
    if (canvasContainer.requestFullscreen) {
        canvasContainer.requestFullscreen();
    } else if (canvasContainer.webkitRequestFullscreen) { /* Safari */
        canvasContainer.webkitRequestFullscreen();
    } else if (canvasContainer.msRequestFullscreen) { /* IE11 */
        canvasContainer.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

document.addEventListener('fullscreenchange', () => {
    const icon = document.getElementById('fullscreenIcon');
    if (!document.fullscreenElement) {
        icon.src = './assets/img/fullscreen.svg';
        icon.alt = 'Enter Fullscreen';
    } else {
        icon.src = './assets/img/fullscreen-exit.svg';
        icon.alt = 'Exit Fullscreen';
    }
});


// function fullscreen() {
//     let fullscreenElement = document.getElementById('fullscreen');
//     let canvas = document.getElementById('canvas');
//     enterFullscreen(fullscreenElement);
//     setTimeout(() => {
//         canvas.style.width = "100vw";
//         canvas.style.height = "100vh";
//     }, 300);
// }

// function enterFullscreen(element) {
//     if (element.requestFullscreen) {
//         element.requestFullscreen();
//     } else if (element.msRequestFullscreen) {
//         element.msRequestFullscreen();
//     } else if (element.mozRequestFullScreen) {
//         element.mozRequestFullScreen();
//     } else if (element.webkitRequestFullscreen) {
//         element.webkitRequestFullscreen();
//     }
// }

// document.addEventListener('fullscreenchange', function (event) {
//     const isFullscreen = !!document.fullscreenElement;    console.log('is Fullscreen?', isFullscreen);
//     if (!isFullscreen) {
//         let canvas = document.getElementById('canvas');
//         canvas.removeAttribute('style');
//     }
// }, false);

let musicOn = true;
let backgroundMusic = new Audio('./assets/audio/background.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5; // optional: angenehme Lautstärke

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

