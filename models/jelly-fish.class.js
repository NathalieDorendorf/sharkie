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

        this.animate();
        this.animateMoving();
    }

    animate() {
        setInterval(() => {
            let index = this.currentImage % this.IMAGES_JELLY_FISH_PURPLE.length;
            let path = this.IMAGES_JELLY_FISH_PURPLE[index];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 250);
    }

    animateMoving() {
        setInterval(() => {
            this.x -= Math.random() * 0.5;
            this.y -= Math.random() * 0.2;
        }, 1000 / 60);
    }
}