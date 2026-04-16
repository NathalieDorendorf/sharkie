class Barrier extends MovableObject {
    width = 200;
    height = 200;

    IMAGES_BARRIERS = [
        'assets/img/3. Background/Barrier/2.png',
        'assets/img/3. Background/Barrier/3.png'
    ];

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.loadImages(this.IMAGES_BARRIERS);
        this.x = x;
        this.y = y;
        this.frameOffset = { x: 20, y: 15, width: 40, height: 30 };
    }

}