class Poison extends MovableObject {
height = 65;
width = 55;

    IMAGES_POISON = [
        'assets/img/4. Marcadores/Posiขn/Animada/1.png',
        'assets/img/4. Marcadores/Posiขn/Animada/2.png',
        'assets/img/4. Marcadores/Posiขn/Animada/3.png',
        'assets/img/4. Marcadores/Posiขn/Animada/4.png',
        'assets/img/4. Marcadores/Posiขn/Animada/5.png',
        'assets/img/4. Marcadores/Posiขn/Animada/6.png',
        'assets/img/4. Marcadores/Posiขn/Animada/7.png',
        'assets/img/4. Marcadores/Posiขn/Animada/8.png'
    ];

    IMAGES_POISON_DARK = [
        'assets/img/4. Marcadores/Posiขn/Dark - Left.png',
        'assets/img/4. Marcadores/Posiขn/Dark - Right.png'
    ];

    IMAGES_POISON_LIGHT = [
        'assets/img/4. Marcadores/Posiขn/Light - Left.png',
        'assets/img/4. Marcadores/Posiขn/Light - Right.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_POISON[0]);
        this.loadImages(this.IMAGES_POISON);

        this.x = 200 + Math.random() * 1000;
        this.y = 50 + Math.random() * 250;
        this.frameOffset = {
            x: 10,
            y: 10,
            width: 20,
            height: 15
        };

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_POISON);
        }, 250);
    }

}