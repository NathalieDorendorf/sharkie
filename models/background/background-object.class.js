class BackgroundObject extends MovableObject {
    width = 1024;
    height = 640;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 640 - this.height;
    }
}