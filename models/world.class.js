class World {
    character = new Character();

    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
        new Endboss()
    ];
    lights = [
        new Light(),
    ];
    barriers = [
        new Barrier('assets/img/3. Background/Barrier/1.png'),
        new Barrier('assets/img/3. Background/Barrier/2.png'),
        new Barrier('assets/img/3. Background/Barrier/3.png'),
    ];
    backgroundObjects = [
        new BackgroundObject('assets/img/3. Background/Layers/5. Water/D2.png', -719),
        new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D2.png', -719),
        new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D2.png', -719),
        new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D2.png', -719),

        new BackgroundObject('assets/img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('assets/img/3. Background/Layers/5. Water/D2.png', 719),
        new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D2.png', 719),
        new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D2.png', 719),
        new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D2.png', 719),

        new BackgroundObject('assets/img/3. Background/Layers/5. Water/D1.png', 719 * 2),
        new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 2),
        new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 2),
        new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D1.png', 719 * 2),
        new BackgroundObject('assets/img/3. Background/Layers/5. Water/D2.png', 719 * 3),
        new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 3),
        new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 3),
        new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D2.png', 719 * 3)

    ];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.lights);
        this.addObjectsToMap(this.barriers);

        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

        this.ctx.translate(-this.camera_x, 0);

        // draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        }
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }

    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }

    flipImageBack(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }
}