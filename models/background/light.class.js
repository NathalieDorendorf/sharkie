class Light extends MovableObject {
    y = 0;
    width = 1200;
    height = 500;
    speed = 0.075;

    constructor() {
        super().loadImage('assets/img/3. Background/Layers/1. Light/COMPLETO.png');

        this.x = 100 + Math.random() * 500;
        // TO DO: soll sich nur bewegen, wenn sich der Character bewegt?
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

}