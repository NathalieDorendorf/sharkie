class PufferFishGreen extends MovableObject {
    IMAGES_PUFFER_FISH = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    IMAGES_PUFFER_FISH_TRANSITION = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'
    ];

    IMAGES_PUFFER_FISH_BIG = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'
    ];

    IMAGES_PUFFER_FISH_DEAD = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png'
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
        // this.animateMoving();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.IMAGES_PUFFER_FISH);
        }, 250);
    }

    // animateMoving() {
    //     setInterval(() => {
    //         this.x -= Math.random() * 0.5;
    //         this.y += Math.random() * 0.2;
    //     }, 1000 / 60);
    // }
}