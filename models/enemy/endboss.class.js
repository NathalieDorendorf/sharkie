class Endboss extends MovableObject {
    y = 0;
    width = 500;
    height = 500;

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

    constructor() {
        super().loadImage(this.IMAGES_ENDBOSS_INTRODUCE[0]);
        this.loadImages(this.IMAGES_ENDBOSS_INTRODUCE);
        this.loadImages(this.IMAGES_ENDBOSS_FLOATING);
        this.loadImages(this.IMAGES_ENDBOSS_ATTACK);
        this.loadImages(this.IMAGES_ENDBOSS_HURT);
        this.loadImages(this.IMAGES_ENDBOSS_DEAD);
        this.x = 2300;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ENDBOSS_INTRODUCE);
        }, 250);
    }

    attack() {
        console.log('attacking');
        
    }
}