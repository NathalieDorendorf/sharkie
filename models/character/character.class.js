class Character extends MovableObject {
    height = 220;
    width = 220;
    world;
    speed = 10;
    isSleeping = false;
    isSwimming = false;
    isFinSlapping = false;
    isAttackingBubbles = false;
    isAttackingBubblesPoisoned = false;
    isHurtPoisoned = false;
    isHurtElectric = false;
    isDeadPoisoned = false;
    isDeadElectric = false;
    lastKeyPress;
    hasActed = false;
    vx = 0;
    vy = 0;
    tiltAngle = 0;
    sleepInterval;
    animationInterval;
    mouthOffset = {
        x: 80, 
        y: 50 
    };

    IMAGES_IDLE = [
        'assets/img/1.Sharkie/1.IDLE/1.png',
        'assets/img/1.Sharkie/1.IDLE/2.png',
        'assets/img/1.Sharkie/1.IDLE/3.png',
        'assets/img/1.Sharkie/1.IDLE/4.png',
        'assets/img/1.Sharkie/1.IDLE/5.png',
        'assets/img/1.Sharkie/1.IDLE/6.png',
        'assets/img/1.Sharkie/1.IDLE/7.png',
        'assets/img/1.Sharkie/1.IDLE/8.png',
        'assets/img/1.Sharkie/1.IDLE/9.png',
        'assets/img/1.Sharkie/1.IDLE/10.png',
        'assets/img/1.Sharkie/1.IDLE/11.png',
        'assets/img/1.Sharkie/1.IDLE/12.png',
        'assets/img/1.Sharkie/1.IDLE/13.png',
        'assets/img/1.Sharkie/1.IDLE/14.png',
        'assets/img/1.Sharkie/1.IDLE/15.png',
        'assets/img/1.Sharkie/1.IDLE/16.png',
        'assets/img/1.Sharkie/1.IDLE/17.png',
        'assets/img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_SLEEP = [
        'assets/img/1.Sharkie/2.Long_IDLE/i1.png',
        'assets/img/1.Sharkie/2.Long_IDLE/I2.png',
        'assets/img/1.Sharkie/2.Long_IDLE/I3.png',
        'assets/img/1.Sharkie/2.Long_IDLE/I4.png',
        'assets/img/1.Sharkie/2.Long_IDLE/I5.png',
        'assets/img/1.Sharkie/2.Long_IDLE/I6.png',
        'assets/img/1.Sharkie/2.Long_IDLE/I7.png',
        'assets/img/1.Sharkie/2.Long_IDLE/I8.png',
        'assets/img/1.Sharkie/2.Long_IDLE/I9.png',
        'assets/img/1.Sharkie/2.Long_IDLE/I10.png',
        'assets/img/1.Sharkie/2.Long_IDLE/I11.png',
        'assets/img/1.Sharkie/2.Long_IDLE/I12.png',
        'assets/img/1.Sharkie/2.Long_IDLE/I13.png',
        'assets/img/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    IMAGES_SWIM = [
        'assets/img/1.Sharkie/3.Swim/1.png',
        'assets/img/1.Sharkie/3.Swim/2.png',
        'assets/img/1.Sharkie/3.Swim/3.png',
        'assets/img/1.Sharkie/3.Swim/4.png',
        'assets/img/1.Sharkie/3.Swim/5.png',
        'assets/img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_ATTACK_FIN_SLAP = [
        'assets/img/1.Sharkie/4.Attack/Fin slap/1.png',
        'assets/img/1.Sharkie/4.Attack/Fin slap/2.png',
        'assets/img/1.Sharkie/4.Attack/Fin slap/3.png',
        'assets/img/1.Sharkie/4.Attack/Fin slap/4.png',
        'assets/img/1.Sharkie/4.Attack/Fin slap/5.png',
        'assets/img/1.Sharkie/4.Attack/Fin slap/6.png',
        'assets/img/1.Sharkie/4.Attack/Fin slap/7.png',
        'assets/img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];

    IMAGES_ATTACK_BUBBLES = [
        'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ];

    IMAGES_ATTACK_BUBBLES_POISONED = [
        'assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
    ];

    IMAGES_HURT_POISENED = [
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];

    IMAGES_HURT_ELECTRIC_SHOCK = [
        'assets/img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'assets/img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'assets/img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ];

    IMAGES_DEAD_POISENED = [
        'assets/img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    IMAGES_DEAD_ELECTRIC_SHOCK = [
        'assets/img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'assets/img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'assets/img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'assets/img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'assets/img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'assets/img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'assets/img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'assets/img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'assets/img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'assets/img/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadAllImages();
        this.lastKeyPress = Date.now();
        this.frameOffset = {
            x: 45,
            y: 110,
            width: 90,
            height: 165
        };
        this.checkActions();
        this.animate();
        this.moving();
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate(this.tiltAngle);
        ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
    }

    loadAllImages() {
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_SLEEP);
        this.loadImages(this.IMAGES_ATTACK_FIN_SLAP);
        this.loadImages(this.IMAGES_ATTACK_BUBBLES);
        this.loadImages(this.IMAGES_ATTACK_BUBBLES_POISONED);
        this.loadImages(this.IMAGES_HURT_POISENED);
        this.loadImages(this.IMAGES_HURT_ELECTRIC_SHOCK);
        this.loadImages(this.IMAGES_DEAD_POISENED);
        this.loadImages(this.IMAGES_DEAD_ELECTRIC_SHOCK);
    }

    checkActions() {
        setInterval(() => {
            if (this.world.isPaused) return;
            this.checkForSwimming();
            this.checkForFinSlapping();
            this.checkForBubbleAttack();
            this.checkIsSleeping();
        }, 100);
    }

    animate(FPS = 5) {
        this.animationInterval = setInterval(() => {
            if (this.world && this.world.isPaused) return;
            if (this.isDeadElectric) {
                this.playAnimation(this.IMAGES_DEAD_ELECTRIC_SHOCK);
            } else if (this.isDeadPoisoned) {
                this.playAnimation(this.IMAGES_DEAD_POISENED);
            } else if (this.isHurtElectric) {
                this.playAnimation(this.IMAGES_HURT_ELECTRIC_SHOCK);
            } else if (this.isHurtPoisoned) {
                this.playAnimation(this.IMAGES_HURT_POISENED);
            } else if (this.isAttackingBubblesPoisoned) {
                this.playAnimation(this.IMAGES_ATTACK_BUBBLES_POISONED);
            } else if (this.isAttackingBubbles) {
                this.playAnimation(this.IMAGES_ATTACK_BUBBLES);
            } else if (this.isFinSlapping) {
                this.playAnimation(this.IMAGES_ATTACK_FIN_SLAP);
            } else if (this.isSleeping) {
                this.sleep(FPS);
            } else if (this.isSwimming) {
                this.playAnimation(this.IMAGES_SWIM);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 1000 / FPS);
    }

    resetAnimation(FPS) {
        clearInterval(this.animationInterval);
        this.animate(FPS);
    }

    // checkActions() {
    //     setInterval(() => {
    //         this.checkForFinSlapping();
    //     }, 1000 / 30);
    // }

    // checkForFinSlapping() {
    //     if (this.world.keyboard.SPACE && !this.isFinSlapping) {
    //         this.isFinSlapping = true;
    //         this.currentImage = 0; // Reset to the first frame of the fin slap animation
    //         this.resetAnimation(30);
    //         setTimeout(() => {
    //             this.isFinSlapping = false;
    //         }, 1000);
    //     }
    // }

    // animate() {
    //     setTimeout(() => this.checkInitialSleep(), 5000);
    //     setInterval(() => {
    //         if (this.isSleeping) return;
    //         this.playAnimation(this.IMAGES_IDLE);
    //     }, 250);
    //     document.addEventListener("keydown", () => this.wakeUp());
    //     setInterval(() => this.checkSleep(), 500);
    // }

    // checkInitialSleep(FPS = 250) {
    //     setInterval(() => {
    //         if (!this.isSleeping && !this.lastKeyPress) {
    //             this.isSleeping = true;
    //             this.sleep();
    //         }
    //     }, 1000 / FPS);
    // }

    wakeUp() {
        this.isSleeping = false;
        this.lastKeyPress = Date.now();
        if (this.sleepInterval) {
            clearInterval(this.sleepInterval);
            this.sleepInterval = null;
        }
        if (this.sinkInterval) {
            clearInterval(this.sinkInterval);
            this.sinkInterval = null;
        }
        this.resetAnimation(5);
    }

    checkIsSleeping() {
        if (this.isSleeping || this.isHurtPoisoned || this.isHurtElectric) return;
        const threshold = this.hasActed ? 4000 : 8000;
        if (Date.now() - this.lastKeyPress > threshold) {
            this.isSleeping = true;
        }
    }

    sleep(FPS = 5) {
        if (this.sleepInterval) return;
        let introFrames = this.IMAGES_SLEEP.slice(0, 12);
        let loopFrames = this.IMAGES_SLEEP.slice(12, 15);
        let introIndex = 0;
        this.sleepInterval = setInterval(() => {
            if (!this.isSleeping) {
                clearInterval(this.sleepInterval);
                this.sleepInterval = null;
                return;
            }
            if (introIndex < introFrames.length) {
                this.img = this.imageCache[introFrames[introIndex]];
                introIndex++;
            } else {
                this.playAnimation(loopFrames);
                this.sinkToGround();
            }
        }, 1000 / FPS);
    }

    sinkToGround() {
        if (this.sinkInterval) return;
        this.sinkInterval = setInterval(() => {
            if (!this.isSleeping || !this.isAboveGround()) {
                clearInterval(this.sinkInterval);
                this.sinkInterval = null;
                return;
            }
            this.y += 1;
        }, 1000 / 25);
    }

    moving() {
        const acceleration = 1.5;
        const friction = 0.8;
        const maxSpeed = this.speed;

        setInterval(() => {
            if (this.world.isPaused) return;
            let isMoving = false;

            if (this.world.keyboard.RIGHT) {
                this.vx = Math.min(this.vx + acceleration, maxSpeed);
                this.otherDirection = false;
                isMoving = true;
            } else if (this.world.keyboard.LEFT) {
                this.vx = Math.max(this.vx - acceleration, -maxSpeed);
                this.otherDirection = true;
                isMoving = true;
            } else {
                this.vx *= friction;
                if (Math.abs(this.vx) < 0.2) this.vx = 0;
            }

            if (this.world.keyboard.UP) {
                this.vy = Math.max(this.vy - acceleration, -maxSpeed);
                isMoving = true;
            } else if (this.world.keyboard.DOWN) {
                this.vy = Math.min(this.vy + acceleration, maxSpeed);
                isMoving = true;
            } else {
                this.vy *= friction;
                if (Math.abs(this.vy) < 0.2) this.vy = 0;
            }

            if (this.vx !== 0 || this.vy !== 0) {
                this.x = Math.max(-600, Math.min(this.x + this.vx, this.world.level.level_end_x));
                this.y = Math.max(-100, Math.min(this.y + this.vy, 270));
            }

            const targetTilt = (this.vy / maxSpeed) * 25 * (Math.PI / 180);
            this.tiltAngle += (targetTilt - this.tiltAngle) * 0.1;

            if (isMoving) {
                if (this.isSleeping) this.wakeUp();
                this.lastKeyPress = Date.now();
                this.hasActed = true;
            }
            this.world.camera_x = -this.x + 50;
        }, 1000 / 60);

        // setInterval(() => {
        //     if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        //         this.swim();
        //     }
        // }, 50);

        // setInterval(() => {
        //     if (this.world.keyboard.UP || this.world.keyboard.DOWN) {
        //         this.swim();
        //     }
        //     if (this.world.keyboard.SPACE) {
        //         this.attackFinSlap();
        //     }
        // }, 250);
    }

    checkForSwimming() {
        const wasSwimming = this.isSwimming;
        this.isSwimming = (
            this.world.keyboard.RIGHT ||
            this.world.keyboard.LEFT ||
            this.world.keyboard.UP ||
            this.world.keyboard.DOWN
        );
        if (this.isSwimming !== wasSwimming && !this.isFinSlapping && !this.isAttackingBubbles && !this.isAttackingBubblesPoisoned) {
            this.resetAnimation(this.isSwimming ? 10 : 5);
        }
    }

    checkForBubbleAttack() {
        if (this.world.keyboard.THROW) {
            this.lastKeyPress = Date.now();
            this.hasActed = true;
            if (this.isSleeping) this.wakeUp();
        }
        if (this.world.keyboard.THROW && !this.isAttackingBubbles && !this.isAttackingBubblesPoisoned) {
            let isPoisoned = this.collectedPoison > 0;
            let frameDuration = Math.ceil(this.IMAGES_ATTACK_BUBBLES.length / 15 * 1000);
            this.resetAnimation(15);
            if (isPoisoned) {
                this.isAttackingBubblesPoisoned = true;
                setTimeout(() => {
                    this.isAttackingBubblesPoisoned = false;
                    this.resetAnimation(5);
                }, frameDuration);
            } else {
                this.isAttackingBubbles = true;
                setTimeout(() => {
                    this.isAttackingBubbles = false;
                    this.resetAnimation(5);
                }, frameDuration);
            }
        }
    }

    hitElectric() {
        if (this.isHurtElectric || this.isDead) return;
        this.energy -= 20;
        if (this.energy < 0) this.energy = 0;
        this.lastHit = new Date().getTime();
        this.lastKeyPress = Date.now();
        this.hasActed = true;
        this.lastDeathType = 'electric';
        if (this.isSleeping) this.wakeUp();
        if (this.energy <= 0) return;
        this.isHurtElectric = true;
        this.currentImage = 0;
        let bounceDirection = this.otherDirection ? 1 : -1;
        let bounceInterval = setInterval(() => {
            this.x += bounceDirection * 5;
        }, 1000 / 60);
        let frameDuration = Math.ceil(this.IMAGES_HURT_ELECTRIC_SHOCK.length / 10 * 1000);
        this.resetAnimation(10);
        setTimeout(() => {
            clearInterval(bounceInterval);
            this.isHurtElectric = false;
            this.resetAnimation(5);
        }, frameDuration);
    }

    hit() {
        if (this.isHurtPoisoned || this.isDead) return;
        this.energy -= 20;
        if (this.energy < 0) this.energy = 0;
        this.lastHit = new Date().getTime();
        this.lastKeyPress = Date.now();
        this.hasActed = true;
        if (this.isSleeping) this.wakeUp();
        if (this.energy <= 0) return;
        this.isHurtPoisoned = true;
        this.currentImage = 0;
        let bounceDirection = this.otherDirection ? 1 : -1;
        let bounceInterval = setInterval(() => {
            this.x += bounceDirection * 5;
        }, 1000 / 60);
        let frameDuration = Math.ceil(this.IMAGES_HURT_POISENED.length / 10 * 1000);
        this.resetAnimation(10);
        setTimeout(() => {
            clearInterval(bounceInterval);
            this.isHurtPoisoned = false;
            this.resetAnimation(5);
        }, frameDuration);
    }

    checkForFinSlapping() {
        if (this.world.keyboard.SPACE && !this.isFinSlapping) {
            if (this.isSleeping) this.wakeUp();
            this.isFinSlapping = true;
            this.lastKeyPress = Date.now();
            this.hasActed = true;
            this.currentImage = 0;
            let frameDuration = Math.ceil(this.IMAGES_ATTACK_FIN_SLAP.length / 15 * 1000);
            this.resetAnimation(15);
            setTimeout(() => {
                this.isFinSlapping = false;
                this.resetAnimation(5);
            }, frameDuration);
        }
    }

    // checkSleepLogic() {
    //     if (Date.now() - this.lastKeyPress > 5000 && !this.isSleeping) {
    //         this.isSleeping = true;
    //         this.currentImage = 0;
    //     }
    //     if (this.world.keyboard.UP || this.world.keyboard.DOWN || this.world.keyboard.LEFT || this.world.keyboard.RIGHT || this.world.keyboard.SPACE) {
    //         this.isSleeping = false;
    //     }
    // }

    // sinkToGround() {
    //     if (this.y < 270) {
    //         this.y += 0.5;
    //     }
    // }

    // swim() {
    //     this.playAnimation(this.IMAGES_SWIM);
    // }

    // attackFinSlap() {
    //     this.playAnimation(this.IMAGES_ATTACK_FIN_SLAP);
    //     this.world.level.enemies.forEach(enemy => {
    //         if (this.isColliding(enemy)) {
    //             enemy.die();
    //         }
    //     });
    // }
}