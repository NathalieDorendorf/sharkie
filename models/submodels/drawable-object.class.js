class DrawableObject {
    x = 50;
    y = 150;
    height = 100;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;
    frameOffset = {
        x: 10,  // left
        y: 10,  // top
        width: 20,  // right
        height: 20  // bottom
    };

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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof PufferFishGreen || this instanceof Endboss || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawSmallFrame(ctx) {
        if (this instanceof Character || this instanceof PufferFishGreen || this instanceof Endboss || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(
                this.x + this.frameOffset.x,
                this.y + this.frameOffset.y,
                this.width - this.frameOffset.width,
                this.height - this.frameOffset.height
            );
            ctx.stroke();
        }
    }
}