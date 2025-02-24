class MovableObject extends DrawableObject {
    otherDirection = false;
    speed = 0.15;
    speedY = 0;
    speedX = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    collectable = 0;

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
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
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
        if (this instanceof ThrowableObject) { // ThrowableObject should always fall
            return true;
        } else {
            return this.y < 270;
        }
    }

    isColliding(object) {
        // Charakter-Hitbox mit Offset
        let selfLeft = this.x + this.frameOffset.x;
        let selfRight = selfLeft + (this.width - this.frameOffset.width);
        let selfTop = this.y + this.frameOffset.y;
        let selfBottom = selfTop + (this.height - this.frameOffset.height);

        // Gegner-/Objekt-Hitbox mit Offset
        let objLeft = object.x + object.frameOffset.x;
        let objRight = objLeft + (object.width - object.frameOffset.width);
        let objTop = object.y + object.frameOffset.y;
        let objBottom = objTop + (object.height - object.frameOffset.height);

        // Kollisionslogik mit den neuen kleineren Hitboxen
        return selfRight >= objLeft &&  // Von rechts gegen Objekt
            selfLeft <= objRight &&  // Von links gegen Objekt
            selfBottom >= objTop &&  // Von oben gegen Objekt
            selfTop <= objBottom;    // Von unten gegen Objekt
    }

    collect() {
        this.collectable += 5;
        if (this.collectable > 100) {
            this.collectable = 100;
        } else {
            this.lastHit = new Date().getTime();
        }
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

    // die() {
    //     this.isDead = true;
    //     this.playAnimation(this.IMAGES_PUFFER_FISH_DEAD); // Dead-Animation starten

    //     // Gegner nach der Animation entfernen
    //     setTimeout(() => {
    //         let index = this.world.level.enemies.indexOf(this);
    //         if (index > -1) {
    //             this.world.level.enemies.splice(index, 1);
    //         }
    //     }, 1000); // Zeit anpassen je nach Länge der Dead-Animation
    // }

    die() {
        this.isDead = true;
        this.playAnimation(this.IMAGES_PUFFER_FISH_DEAD); // Dead-Animation starten

        // Richtung bestimmen (entgegen der Bewegungsrichtung des Charakters)
        let direction = this.world.character.otherDirection ? 1 : -1; // Falls Charakter nach links schaut -> Gegner fliegt nach rechts

        setTimeout(() => {
            this.flyOutOfCanvas(direction);
        }, 500); // 500ms warten, bevor der Gegner wegfliegt
    }

    flyOutOfCanvas(direction) {
        let flyInterval = setInterval(() => {
            this.x += 10 * direction; // Gegner fliegt in die bestimmte Richtung
            this.y -= 5; // Gegner steigt nach oben

            // Wenn Gegner aus dem Canvas ist, entfernen
            if (this.x < -200 || this.x > this.world.level.level_end_x + 200 || this.y < -200) {
                clearInterval(flyInterval);
                let index = this.world.level.enemies.indexOf(this);
                if (index > -1) {
                    this.world.level.enemies.splice(index, 1);
                }
            }
        }, 50); // Bewegung alle 50ms updaten
    }

    isDead() {
        return this.energy == 0;
    }
}
