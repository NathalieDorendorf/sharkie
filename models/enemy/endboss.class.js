class Endboss extends MovableObject {
    x = 2300;
    y = 0;
    width = 500;
    height = 500;
    isActivated = false;

    IMAGES_ENDBOSS_INTRODUCE = [
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    IMAGES_ENDBOSS_FLOATING = [
        'assets/img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    IMAGES_ENDBOSS_ATTACK = [
        'assets/img/2.Enemy/3 Final Enemy/Attack/1.png',
        'assets/img/2.Enemy/3 Final Enemy/Attack/2.png',
        'assets/img/2.Enemy/3 Final Enemy/Attack/3.png',
        'assets/img/2.Enemy/3 Final Enemy/Attack/4.png',
        'assets/img/2.Enemy/3 Final Enemy/Attack/5.png',
        'assets/img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    IMAGES_ENDBOSS_HURT = [
        'assets/img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'assets/img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'assets/img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'assets/img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    IMAGES_ENDBOSS_DEAD = [
        'assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png',
        'assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    energy = 100;
    isAttacking = false;
    isHurt = false;
    startX = 2300;

    constructor() {
        super().loadImage(this.IMAGES_ENDBOSS_INTRODUCE[0]);
        this.loadImages(this.IMAGES_ENDBOSS_INTRODUCE);
        this.loadImages(this.IMAGES_ENDBOSS_FLOATING);
        this.loadImages(this.IMAGES_ENDBOSS_ATTACK);
        this.loadImages(this.IMAGES_ENDBOSS_HURT);
        this.loadImages(this.IMAGES_ENDBOSS_DEAD);
        this.frameOffset = {
            x: 40,
            y: 230,
            width: 100,
            height: 340
        };
        this.animate();
    }

    animate() {
        let introCount = 0;
        let introInterval = setInterval(() => {
            if (world && world.isPaused) return;
            if (world.character.x >= 2000) {
                this.isActive = true;
                this.playAnimation(this.IMAGES_ENDBOSS_INTRODUCE);
                introCount++;
                if (introCount >= this.IMAGES_ENDBOSS_INTRODUCE.length) {
                    clearInterval(introInterval);
                    this.startBehavior();
                }
            }
        }, 250);
    }

    startBehavior() {
        setInterval(() => {
            if (world && world.isPaused) return;
            if (this.isDead) {
                this.playAnimation(this.IMAGES_ENDBOSS_DEAD);
            } else if (this.isHurt) {
                this.playAnimation(this.IMAGES_ENDBOSS_HURT);
            } else if (this.isAttacking) {
                this.playAnimation(this.IMAGES_ENDBOSS_ATTACK);
            } else {
                this.playAnimation(this.IMAGES_ENDBOSS_FLOATING);
            }
        }, 200);

        setInterval(() => {
            if (world && world.isPaused) return;
            if (!this.isDead && !this.isHurt) {
                this.attack();
            }
        }, 3000);
    }

    attack() {
        this.isAttacking = true;
        let rushInterval = setInterval(() => {
            if (world && world.isPaused) return;
            this.x -= 15;
        }, 1000 / 60);

        setTimeout(() => {
            clearInterval(rushInterval);
            this.isAttacking = false;
            let returnInterval = setInterval(() => {
                if (world && world.isPaused) return;
                if (this.x < this.startX) {
                    this.x += 8;
                } else {
                    clearInterval(returnInterval);
                }
            }, 1000 / 60);
        }, 800);
    }

    hit() {
        if (this.isDead || this.isHurt) return;
        this.energy -= 34;
        if (this.energy <= 0) {
            this.energy = 0;
            this.die();
        } else {
            this.isHurt = true;
            world.statusBarEndboss.setPercentage(this.energy);
            setTimeout(() => { this.isHurt = false; }, 1000);
        }
    }

    die() {
        this.isDead = true;
        world.statusBarEndboss.setPercentage(0);
        setTimeout(() => {
            world.stopGame();
            world.showWinScreen();
        }, 2000);
    }
}