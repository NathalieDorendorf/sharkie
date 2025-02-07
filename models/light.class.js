class Light extends MovableObject {
    y = 0;
    width = 300;
    height = 300;


    constructor() {
        super().loadImage('assets/img/3. Background/Layers/1. Light/1.png');

        this.x = 100 + Math.random() * 500;
    }

    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}