class JellyFish extends MovableObject {

    constructor() {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
    
        this.x = 200 + Math.random() * 500;
        this.y = 100 + Math.random() * 200;
    }

}