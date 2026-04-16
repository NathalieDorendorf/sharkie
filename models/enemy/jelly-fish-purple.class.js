class JellyFishPurple extends MovableObject {
    height = 80;
    width = 80;

    IMAGES_JELLY_FISH_PURPLE = [
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];

    IMAGES_JELLY_FISH_PURPLE_DANGEROUS = [
        'assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 1.png',
        'assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 2.png',
        'assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 3.png',
        'assets/img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 4.png'
    ];

    IMAGES_JELLY_FISH_PURPLE_DEAD = [
        'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
    ];

    IMAGES_JELLY_FISH_PURPLE_DANGEROUS_DEAD = [
        'assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png'
    ];

    constructor(x) {
        super().loadImage(this.IMAGES_JELLY_FISH_PURPLE[0]);
        this.loadImages(this.IMAGES_JELLY_FISH_PURPLE);
        this.loadImages(this.IMAGES_JELLY_FISH_PURPLE_DANGEROUS);
        this.loadImages(this.IMAGES_JELLY_FISH_PURPLE_DEAD);
        this.loadImages(this.IMAGES_JELLY_FISH_PURPLE_DANGEROUS_DEAD);
        this.IMAGES_JELLY_FISH_PURPLE_DEAD_CYCLE = this.IMAGES_JELLY_FISH_PURPLE_DEAD.flatMap(
            (img, i) => [img, this.IMAGES_JELLY_FISH_PURPLE_DANGEROUS_DEAD[i]]
        );
        this.IMAGES_JELLY_FISH_PURPLE_CYCLE = [
            ...this.IMAGES_JELLY_FISH_PURPLE,
            ...this.IMAGES_JELLY_FISH_PURPLE_DANGEROUS,
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
            this.playAnimation(this.IMAGES_JELLY_FISH_PURPLE_CYCLE);
        }, 250);
    }

    die() {
        this.isDead = true;
        this.clearIntervals();
        this.playAnimationOnce(this.IMAGES_JELLY_FISH_PURPLE_DEAD_CYCLE);
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