class MovableObject {
    x = 120;
    y = 400;
    img;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
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