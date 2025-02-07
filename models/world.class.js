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
        new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D.png'),
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addToMap(this.character);
        
        this.enemies.forEach(enemy => {
            this.addToMap(enemy);
        });

        this.lights.forEach(light => {
            this.addToMap(light);
        });

        this.barriers.forEach(barrier => {
            this.addToMap(barrier);
        });

        this.backgroundObjects.forEach(background => {
            this.addToMap(background);
        });

        // draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addToMap(movableObject) {
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    }
}