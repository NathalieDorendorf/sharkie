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
        if (this.isPopping) {
            let progress = (Date.now() - this.popStartTime) / this.popDuration;
            let scale = 1 + progress * 1.5;
            let alpha = 1 - progress;
            ctx.save();
            ctx.globalAlpha = Math.max(0, alpha);
            ctx.translate(cx, cy);
            ctx.scale(scale, scale);
            ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
            ctx.restore();
            ctx.globalAlpha = 1;
        } else {
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(this.rotation);
            ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
            ctx.restore();
        }
    }

    throw() {
        this.rotation = 0;
        let direction = this.otherDirection ? -1 : 1;
        let startY = this.y;
        let step = 0;
        let waveAmplitude = 25;
        let waveFrequency = 0.08;
        let horizontalSpeed = 5;

        this.flyInterval = setInterval(() => {
            this.x += horizontalSpeed * direction;
            this.y = startY + Math.sin(step * waveFrequency) * waveAmplitude;
            this.rotation += 0.05 * direction;
            step++;
        }, 25);

        this.floatTimeout = setTimeout(() => {
            clearInterval(this.flyInterval);
            this.flyInterval = null;
            this.floatUp();
        }, 3000);
    }

    floatUp() {
        let direction = this.otherDirection ? -1 : 1;
        let step = 0;
        this.floatInterval = setInterval(() => {
            this.x += 2 * direction;
            this.y -= 1 + step * 0.05;
            step++;
        }, 25);
    }

    pop() {
        this.isPopping = true;
        this.popStartTime = Date.now();
        this.popDuration = 300;
        this.destroy();
    }

    destroy() {
        clearInterval(this.flyInterval);
        clearInterval(this.floatInterval);
        clearTimeout(this.floatTimeout);
    }
}