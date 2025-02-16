class ThrowableObject extends MovableObject {


    constructor(x, y) {
        super().loadImage('assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');

        this.x = x;
        this.y = y;

        this.throw();
    }

    throw() {
        this.speedY = 20;
        this.speedX = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 7;
        }, 25);
    }
}