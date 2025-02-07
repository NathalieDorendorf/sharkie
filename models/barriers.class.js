class Barrier extends MovableObject {
    width = 100;
    height = 100;

    constructor(imagePath) {
        super().loadImage(imagePath);

        this.x = 100 + Math.random() * 500;
        this.y = 100 + Math.random() * 200;
    }

    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}