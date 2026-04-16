class JellyFishYellow extends MovableObject {
    height = 80;
    width = 80;

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

    constructor(x) {
        super().loadImage(this.IMAGES_JELLY_FISH_YELLOW[0]);
        this.loadImages(this.IMAGES_JELLY_FISH_YELLOW);
        this.loadImages(this.IMAGES_JELLY_FISH_YELLOW_DANGEROUS);
        this.loadImages(this.IMAGES_JELLY_FISH_YELLOW_DEAD);
        this.loadImages(this.IMAGES_JELLY_FISH_YELLOW_DANGEROUS_DEAD);
        this.IMAGES_JELLY_FISH_YELLOW_DEAD_CYCLE = this.IMAGES_JELLY_FISH_YELLOW_DEAD.flatMap(
            (img, i) => [img, this.IMAGES_JELLY_FISH_YELLOW_DANGEROUS_DEAD[i]]
        );
        this.IMAGES_JELLY_FISH_YELLOW_CYCLE = [
            ...this.IMAGES_JELLY_FISH_YELLOW,
            ...this.IMAGES_JELLY_FISH_YELLOW_DANGEROUS,
        ];
        this.x = x !== undefined ? x : 400 + Math.random() * 700;
        this.y = 100 + Math.random() * 200;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
        this.animateMoving();
    }

    animate() {
        this.animInterval = setInterval(() => {
            if (world && world.isPaused) return;
            this.playAnimation(this.IMAGES_JELLY_FISH_YELLOW_CYCLE);
        }, 250);
    }

    die() {
        this.isDead = true;
        this.clearIntervals();
        this.playAnimationOnce(this.IMAGES_JELLY_FISH_YELLOW_DEAD_CYCLE);
        let direction = world.character.otherDirection ? 1 : -1;
        setTimeout(() => {
            this.flyOutOfCanvas(direction);
        }, 800);
    }

    animateMoving() {
        const startY = this.y;
        let t = 0;
        this.moveInterval = setInterval(() => {
            if (world && world.isPaused) return;
            this.x -= this.speed;
            this.y = startY + Math.sin(t) * 40;
            t += 0.03;
        }, 1000 / 60);
    }
}