class JellyFish extends MovableObject {
    IMAGES_JELLY_FISH_PURPLE = [
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];

    constructor() {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_JELLY_FISH_PURPLE);

        this.x = 400 + Math.random() * 700;
        this.y = 100 + Math.random() * 200;
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
        this.animateMoving();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_JELLY_FISH_PURPLE);
        }, 250);
    }

    animateMoving() {
        setInterval(() => {
            this.x -= Math.random() * 0.5;
            this.y -= Math.random() * 0.2;
        }, 1000 / 60);
    }
}