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
    poppingBubbles = [];
    isThrowing = false;

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
        this.drawBackgroundElements();
        this.drawStaticElements();
        this.drawCollectableElements();
        this.drawDynamicElements();
        if (!this.isPaused) {
            this.animationFrameId = requestAnimationFrame(() => this.draw());
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBackgroundElements() {
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.barriers);
        this.ctx.translate(-this.camera_x, 0);
    }

    drawStaticElements() {
        this.addToMap(this.statusBarCharacter);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarPoison);
        if (this.level.enemies.some(enemy => enemy instanceof Endboss && enemy.isActive)) {
            this.addToMap(this.statusBarEndboss);
        }
    }

    drawCollectableElements() {
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poison);
        this.ctx.translate(-this.camera_x, 0);
    }

    drawDynamicElements() {
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.throwableObjects);
        this.poppingBubbles = this.poppingBubbles.filter(b => {
            b.draw(this.ctx);
            return Date.now() - b.popStartTime < b.popDuration;
        });
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
        // movableObject.drawFrame(this.ctx);
        movableObject.drawSmallFrame(this.ctx);
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
        this.runIntervalId = setInterval(() => {
            this.checkCollisions();
            this.checkCollisionsCollectables();
            this.checkCollisionsBubbles();
            this.checkThrowObjects();
            this.checkGameOver();
        }, 100);
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarCharacter.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionsCollectables() {
        this.checkCollisionsCoins();
        this.checkCollisionsPoison();
    }

    checkCollisionsCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoin(index);
            }
        });
    }

    checkCollisionsPoison() {
        this.level.poison.forEach((poison, index) => {
            if (this.character.isColliding(poison)) {
                this.character.collectPoison(index);
            }
        });
    }

    checkCollisionsBubbles() {
        this.throwableObjects = this.throwableObjects.filter((bubble) => {
            if (bubble.y < -100) {
                bubble.destroy();
                return false;
            }
            for (let enemy of this.level.enemies) {
                if (!enemy.isDead && bubble.isColliding(enemy)) {
                    if (enemy instanceof Endboss) {
                        enemy.hit();
                    } else {
                        enemy.die();
                    }
                    bubble.pop();
                    this.poppingBubbles.push(bubble);
                    return false;
                }
            }
            return true;
        });
    }

    checkThrowObjects() {
        if (this.keyboard.THROW) this.character.lastKeyPress = Date.now();
        if (this.keyboard.THROW && !this.throwCooldown) {
            let spawnX = this.character.otherDirection ? this.character.x - 30 : this.character.x + 160;
            let isPoisoned = this.character.collectedPoison > 0;
            let bubble = new ThrowableObject(spawnX, this.character.y + 100, this.character.otherDirection, isPoisoned);
            this.throwableObjects.push(bubble);
            if (isPoisoned) {
                this.character.collectedPoison--;
                this.statusBarPoison.setPercentage(this.character.collectedPoison * 10);
            }
            this.throwCooldown = true;
            setTimeout(() => { this.throwCooldown = false; }, 200);
        }
    }

    checkGameOver() {
        if (this.character.energy <= 0 && !this.character.isDead) {
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

    pauseGame() {
        this.isPaused = true;
        cancelAnimationFrame(this.animationFrameId);
        clearInterval(this.runIntervalId);
    }

    resumeGame() {
        this.isPaused = false;
        this.character.lastKeyPress = Date.now();
        this.draw();
        this.run();
    }
        
    showGameOverScreen() {
        document.getElementById('game-over').classList.remove('d-none');
    }

    showWinScreen() {
        document.getElementById('win-screen').classList.remove('d-none');
        startConfetti();
    }
}