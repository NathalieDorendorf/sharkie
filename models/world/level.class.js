class Level {
    enemies;
    lights;
    barriers;
    backgroundObjects;
    coins;
    poison;
    level_end_x = 2200;

    constructor(enemies, lights, barriers, backgroundObjects, coins, poison) {
        this.enemies = enemies;
        this.lights = lights;
        this.barriers = barriers;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poison = poison;
    }
}