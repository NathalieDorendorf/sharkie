class MovableObject {
    x = 100;
    y = 300;
    img;
    height = 150;
    width = 150;


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