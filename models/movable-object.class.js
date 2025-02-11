class MovableObject {
    x = 50;
    y = 150;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;

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

    playAnimation(images) {
        let index = this.currentImage % images.length;
        let path = images[index];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log('moving right');
        setInterval(() => {
            this.x += this.speed;
        }, 1000 / 60);

    }

    moveLeft() {
        console.log('moving left');
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    moveUp() {
        console.log('moving up');
        setInterval(() => {
            this.y += this.speed;
        }, 1000 / 60);
    }

    moveDown() {
        console.log('moving down');
        setInterval(() => {
            this.y -= this.speed;
        }, 1000 / 60);
    }

    hurt() {
        console.log('hurting');

    }

    die() {
        console.log('dying');

    }

}