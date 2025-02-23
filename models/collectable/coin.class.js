class Coin extends MovableObject {
    height = 40;
    width = 40;

    IMAGES_COIN = [
        'assets/img/4. Marcadores/1. Coins/1.png',
        'assets/img/4. Marcadores/1. Coins/2.png',
        'assets/img/4. Marcadores/1. Coins/3.png',
        'assets/img/4. Marcadores/1. Coins/4.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);

        this.x = 200 + Math.random() * 1000;
        this.y = 50 + Math.random() * 250;
        this.frameOffset = {
            x: 5,
            y: 5,
            width: 10,
            height: 10
        };

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 350);
    }
}