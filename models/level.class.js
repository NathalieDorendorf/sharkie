class Level {
    enemies;
    lights;
    barriers;
    backgroundObjects;
    level_end_x = 1400;


    constructor(enemies, lights, barriers, backgroundObjects) {
        this.enemies = enemies;
        this.lights = lights;
        this.barriers = barriers;
        this.backgroundObjects = backgroundObjects;
    }
}