class PufferFishRed extends Enemy {
    IMAGES_PUFFER_FISH = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
    ];

    IMAGES_PUFFER_FISH_TRANSITION = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png'
    ];

    IMAGES_PUFFER_FISH_BIG = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png'
    ];

    IMAGES_PUFFER_FISH_DEAD = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_PUFFER_FISH[0]);
        this.loadImages(this.IMAGES_PUFFER_FISH);
        this.loadImages(this.IMAGES_PUFFER_FISH_TRANSITION);
        this.loadImages(this.IMAGES_PUFFER_FISH_BIG);
        this.loadImages(this.IMAGES_PUFFER_FISH_DEAD);

        this.x = 400 + Math.random() * 500; // zahl zwischen 400 und 700
        this.y = 100 + Math.random() * 200;
        this.speed = 0.15 + Math.random() * 0.5;
        this.frameOffset = {
            x: 10,
            y: 10,
            width: 25,
            height: 40
        };
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.IMAGES_PUFFER_FISH);
        }, 250);
    }
}