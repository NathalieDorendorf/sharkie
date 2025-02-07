class MovableObject {
    x = 50;
    y = 150;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log('moving right');
        
    }

    moveLeft() {
        console.log('moving left');

    }

    moveUp() {
        console.log('moving up');

    }

    moveDown() {
        console.log('moving down');

    }

    hurt() {
        console.log('hurting');

    }

    die() {
        console.log('dying');

    }

}