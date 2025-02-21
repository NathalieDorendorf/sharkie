class PufferFishYellow extends Enemy {
    IMAGES_PUFFER_FISH = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png'
    ];

    IMAGES_PUFFER_FISH_TRANSITION = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png'
    ];

    IMAGES_PUFFER_FISH_BIG = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png'
    ];

    IMAGES_PUFFER_FISH_DEAD = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png'
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