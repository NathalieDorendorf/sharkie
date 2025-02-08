class Light extends MovableObject {
    y = 0;
    width = 600;
    height = 400;

    constructor() {
        super().loadImage('assets/img/3. Background/Layers/1. Light/1.png');

        this.x = 100 + Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

}