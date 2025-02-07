class PufferFish extends MovableObject {
    IMAGES_PUFFER_FISH_GREEN = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    IMAGES_PUFFER_FISH_YELLOW = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png'
    ];

    IMAGES_PUFFER_FISH_RED = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
    ];

    constructor() {
        super().loadImage('assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_PUFFER_FISH_GREEN);

        this.x = 400 + Math.random() * 500; // zahl zwischen 400 und 700
        this.y = 100 + Math.random() * 200;

        this.animate();
        this.animateMoving();
    }

    animate() {
        setInterval(() => {
            let index = this.currentImage % this.IMAGES_PUFFER_FISH_GREEN.length;
            let path = this.IMAGES_PUFFER_FISH_GREEN[index];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 250);
    }

    animateMoving() {
        setInterval(() => {
            this.x -= Math.random() * 0.5;
            this.y += Math.random() * 0.2;
        }, 1000 / 60);
    }
}