class JellyFishYellow extends MovableObject {
    IMAGES_JELLY_FISH_YELLOW = [
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
    ];

    IMAGES_JELLY_FISH_YELLOW_DANGEROUS = [
        'assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 1.png',
        'assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 2.png',
        'assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 3.png',
        'assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 4.png'
    ];

    IMAGES_JELLY_FISH_YELLOW_DEAD = [
        'assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png'
    ];

    IMAGES_JELLY_FISH_YELLOW_DANGEROUS_DEAD = [
        'assets/img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/green/g4.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_JELLY_FISH_YELLOW[0]);
        this.loadImages(this.IMAGES_JELLY_FISH_YELLOW);
        this.x = 400 + Math.random() * 700;
        this.y = 100 + Math.random() * 200;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
        this.animateMoving();
    }

    animate() {
        this.animInterval = setInterval(() => {
            if (world && world.isPaused) return;
            this.playAnimation(this.IMAGES_JELLY_FISH_YELLOW);
        }, 250);
    }

    animateMoving() {
        this.moveInterval = setInterval(() => {
            if (world && world.isPaused) return;
            this.x -= Math.random() * 0.5;
            this.y -= Math.random() * 0.2;
        }, 1000 / 60);
    }
}