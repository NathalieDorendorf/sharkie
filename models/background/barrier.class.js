class Barrier extends MovableObject {
    width = 200;
    height = 200;

    // IMAGES_BARRIERS = [
    //     'assets/img/3. Background/Barrier/1.png',
    //     'assets/img/3. Background/Barrier/2.png',
    //     'assets/img/3. Background/Barrier/3.png'
    // ];

    constructor(imagePath) {
        super().loadImage(imagePath);
        // this.loadImages(this.IMAGES_BARRIERS);

        this.x = 100 + Math.random() * 500;
        this.y = 100 + Math.random() * 200;
    }

}