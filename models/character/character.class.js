class Character extends MovableObject {
    height = 220;
    width = 220;
    world;
    speed = 10;
    isDead = false;
    mouthOffset = {
        x: 80, 
        y: 50 
    };
    isSleeping = false;
    lastKeyPress;

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
        'assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'
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
        'assets/img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
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

        this.frameOffset = {
            x: 45,
            y: 110,
            width: 90,
            height: 165
        };

        this.animate();
        this.moving();
    }

    animate() {
        setTimeout(() => this.checkInitialSleep(), 5000);
        setInterval(() => {
            if (this.isSleeping) return;
            this.playAnimation(this.IMAGES_IDLE);
        }, 250);
        document.addEventListener("keydown", () => this.wakeUp());
        setInterval(() => this.checkSleep(), 500);
    }

    checkInitialSleep() {
        if (!this.isSleeping && !this.lastKeyPress) {
            this.isSleeping = true;
            this.sleep();
        }
    }

    wakeUp() {
        this.isSleeping = false;
        this.lastKeyPress = Date.now(); // Reset der Zeitmessung
        if (this.sleepInterval) {
            clearInterval(this.sleepInterval); // Sleep-Animation beenden
            this.sleepInterval = null;
        }
        this.playAnimation(this.IMAGES_IDLE); // Normale Animation starten
    }

    checkSleep() {
        if (!this.isSleeping && Date.now() - this.lastKeyPress > 3000) {
            this.isSleeping = true;
            this.sleep();
        }
    }

    sleep() {
        this.playAnimation(this.IMAGES_SLEEP);
        let sleepFrames = this.IMAGES_SLEEP.slice(12, 15); // Bilder 12-14 extrahieren
        this.sleepInterval = setInterval(() => {
            if (!this.isSleeping) {
                clearInterval(this.sleepInterval);
                this.sleepInterval = null;
                return;
            }
            this.playAnimation(sleepFrames);
            this.sinkToGround();
        }, 1500);
    }

    sinkToGround() {
        let sinkInterval = setInterval(() => {
            if (!this.isSleeping || !this.isAboveGround()) {
                clearInterval(sinkInterval);
                return;
            }
            this.y += 1;
        }, 1000 / 25);
    }

    moving() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > -600) {
                this.moveLeft();
                this.otherDirection = true;
            }
            if (this.world.keyboard.UP && this.y > -100) {
                this.moveUp();
            }
            if (this.world.keyboard.DOWN && this.y < 270) {
                this.moveDown();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.swim();
            }
        }, 50);

        setInterval(() => {
            if (this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.swim();
            }
            if (this.world.keyboard.SPACE) {
                this.attackFinSlap();
            }
        }, 250);
    }

    swim() {
        this.playAnimation(this.IMAGES_SWIM);
    }

    attackFinSlap() {
        this.playAnimation(this.IMAGES_ATTACK_FIN_SLAP);

        // Prüfe, ob ein Gegner getroffen wurde
        this.world.level.enemies.forEach(enemy => {
            if (this.isColliding(enemy)) {
                enemy.die(); // Gegner stirbt
            }
        });
    }
}