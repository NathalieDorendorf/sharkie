class Coin extends MovableObject {
    IMAGES_COIN = [
        'assets/img/4. Marcadores/1. Coins/1.png',
        'assets/img/4. Marcadores/1. Coins/2.png',
        'assets/img/4. Marcadores/1. Coins/3.png',
        'assets/img/4. Marcadores/1. Coins/4.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);

        this.x = 200 + Math.random() * 1000;
        this.y = 50 + Math.random() * 250;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 250);
    }
}