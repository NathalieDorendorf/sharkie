class Light extends MovableObject {
    y = 0;
    width = 1200;
    height = 500;

    constructor() {
        super().loadImage('assets/img/3. Background/Layers/1. Light/COMPLETO.png');

        this.x = 100 + Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

}