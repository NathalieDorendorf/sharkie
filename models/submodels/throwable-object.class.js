class ThrowableObject extends MovableObject {
    height = 30;
    width = 30;

    IMAGE_BUBBLE = ['assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'];

    IMAGE_BUBBLE_POISONED = ['assets/img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'];

    constructor(x, y) {
        super().loadImage(this.IMAGE_BUBBLE[0]);
        this.x = x;
        this.y = y;
        this.throw();
    }

    throw() {
        this.speedY = 15;
        this.speedX = 15;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }

    // throw() {
    //     this.speedY = 10; // Langsamere Steigung
    //     this.speedX = 8;  // Langsamere Geschwindigkeit nach rechts
    //     this.applyGravity();

    //     setInterval(() => {
    //         this.x += this.speedX;
    //         this.y -= this.speedY; // Simuliert eine Wurfkurve
    //         this.speedY *= 0.95; // Langsame Abnahme des Y-Schubs für realistischeren Wurf
    //     }, 25);
    // }

}