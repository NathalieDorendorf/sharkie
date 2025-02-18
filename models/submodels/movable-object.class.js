class MovableObject extends DrawableObject {
    otherDirection = false;
    speed = 0.15;
    speedY = 0;
    speedX = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    // offsetY;
    offset = {
        top: 0, // 120
        bottom: 0, // 30
        left: 0, // 40
        right: 0 // 30
    }

    playAnimation(images) {
        let index = this.currentImage % images.length;
        let path = images[index];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    playAnimationOnce(images) {
        let i = 0;
        let animationInterval = setInterval(() => {
            if (i < images.length) {
                this.img = this.imageCache[images[i]];
                i++;
            } else {
                clearInterval(animationInterval); // Stoppt die Animation am letzten Frame
            }
        }, 200); // Passe die Geschwindigkeit nach Bedarf an
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveUp() {
        this.y += this.speed;
    }

    moveDown() {
        this.y -= this.speed;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObjects) { // ThrowableObject should always fall
            return true;
        } else {
            return this.y < 180;
        }
    }

    jump() {
        this.speedY = 20;
    }

    isColliding(object) {
        return (this.x + this.width) >= object.x && // from right to enemy
            this.x <= (object.x + object.width) && // from left to enemy
            (this.y + this.height) >= object.y &&  // from top to enemy
            this.y <= (object.y + object.height); // from bottom to enemy
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // difference in ms
        timePassed = timePassed / 1000; // difference in s
        return timePassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

}


// return (this.x + this.width) >= object.x && this.x <= (object.x + object.width) &&
//     (this.y + this.offsetY + this.height) >= object.y &&
//     (this.y + this.offsetY) <= (object.y + object.height);      
//     }
