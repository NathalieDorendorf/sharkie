class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarCharacter = new StatusBarCharacter();
    statusBarCoin = new StatusBarCoin();
    statusBarPoison = new StatusBarPoison();
    statusBarEndboss = new StatusBarEndboss();
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    draw() {
        this.clearCanvas();
        this.drawDynamicElements();
        this.drawStaticElements();

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawStaticElements() {
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarCharacter);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarPoison);
        this.addToMap(this.statusBarEndboss);
        this.ctx.translate(this.camera_x, 0);
    }

    drawDynamicElements() {
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.barriers);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        }
        movableObject.draw(this.ctx);
        movableObject.drawFrame(this.ctx);
        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }

    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }

    flipImageBack(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkGameOver();
        }, 200);
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarCharacter.setPercentage(this.character.energy);
            }
        });
    }

    checkThrowObjects() {
        if (this.keyboard.SPACE) {
            let bubble = new ThrowableObjects(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bubble);
        }
    }

    checkGameOver() {
        if (this.statusBarCharacter.resolveImageIndex() === 0 && !this.character.isDead) {
            this.character.isDead = true;
            this.stopGame();
            this.character.playAnimationOnce(this.character.IMAGES_DEAD_POISENED);
            setTimeout(() => {
                this.showGameOverScreen();
            }, 3000);
        }
    }

    stopGame() {
        let highestId = setInterval(() => { }, 0);
        for (let i = 1; i <= highestId; i++) {
            clearInterval(i);
        }
    }

    showGameOverScreen() {
        let gameOverDiv = document.createElement('div');
        gameOverDiv.id = 'game-over';
        gameOverDiv.innerHTML = `<h1>Game Over</h1>`;
        gameOverDiv.style.position = 'absolute';
        gameOverDiv.style.top = '50%';
        gameOverDiv.style.left = '50%';
        gameOverDiv.style.transform = 'translate(-50%, -50%)';
        gameOverDiv.style.color = 'white';
        gameOverDiv.style.fontSize = '50px';
        gameOverDiv.style.background = 'rgba(0, 0, 0, 0.7)';
        gameOverDiv.style.padding = '20px';
        gameOverDiv.style.borderRadius = '10px';
        gameOverDiv.style.display = 'flex';
        gameOverDiv.style.flexDirection = 'column';
        gameOverDiv.style.justifyContent = 'center';
        gameOverDiv.style.alignItems = 'center';

        let tryAgainButton = document.createElement('img');
        tryAgainButton.src = 'assets/img/6.Botones/Try again/Recurso 18.png';
        tryAgainButton.style.width = '200px';
        tryAgainButton.style.cursor = 'pointer';
        tryAgainButton.addEventListener('click', () => this.restartGame());

        gameOverDiv.appendChild(tryAgainButton);
        document.body.appendChild(gameOverDiv);
    }

    restartGame() {
        document.getElementById('game-over')?.remove();
        location.reload();
    }

}