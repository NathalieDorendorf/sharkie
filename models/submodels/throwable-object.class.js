class ThrowableObject extends MovableObject {
    height = 30;
    width = 30;
    frameOffset = { x: 0, y: 0, width: 0, height: 0 };

    IMAGE_BUBBLE = ['assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'];

    IMAGE_BUBBLE_POISONED = ['assets/img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'];

    constructor(x, y, otherDirection, isPoisoned) {
        super();
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
        if (isPoisoned) {
            this.loadImage(this.IMAGE_BUBBLE_POISONED[0]);
        } else {
            this.loadImage(this.IMAGE_BUBBLE[0]);
        }
        this.throw();
    }

    draw(ctx) {
        let cx = this.x + this.width / 2;
        let cy = this.y + this.height / 2;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
    }

    throw() {
        this.rotation = 0;
        let direction = this.otherDirection ? -1 : 1;
        let startY = this.y;
        let step = 0;
        let waveAmplitude = 25;   // Höhe der Welle in px (größer = stärkere Welle)
        let waveFrequency = 0.08; // Wie schnell die Welle schwingt (größer = kürzere Wellen)
        let horizontalSpeed = 5;  // Horizontale Fluggeschwindigkeit in px pro Frame

        let flyInterval = setInterval(() => {
            this.x += horizontalSpeed * direction;
            this.y = startY + Math.sin(step * waveFrequency) * waveAmplitude;
            this.rotation += 0.05 * direction;
            step++;
        }, 25);

        setTimeout(() => {
            clearInterval(flyInterval);
            this.floatUp();
        }, 3000);
    }

    floatUp() {
        let direction = this.otherDirection ? -1 : 1;
        let step = 0;
        setInterval(() => {
            this.x += 2 * direction;
            this.y -= 1 + step * 0.05;
            step++;
        }, 25);
    }
}