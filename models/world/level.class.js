class Level {
    enemies;
    lights;
    barriers;
    backgroundObjects;
    coins;
    poison;
    level_end_x = 4400;

    constructor(enemies, lights, barriers, backgroundObjects, coins, poison) {
        this.enemies = enemies;
        this.lights = lights;
        this.barriers = barriers;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poison = poison;
    }

    static createCollectables(ClassType, count, usedPositions, minDistance = 80) {
        const items = [];
        for (let i = 0; i < count; i++) {
            let x, y, attempts = 0;
            do {
                x = 200 + Math.random() * 4000;
                y = 50 + Math.random() * 250;
                attempts++;
            } while (
                attempts < 100 &&
                usedPositions.some(p => Math.abs(p.x - x) < minDistance && Math.abs(p.y - y) < minDistance)
            );
            const item = new ClassType();
            item.x = x;
            item.y = y;
            usedPositions.push({ x, y });
            items.push(item);
        }
        return items;
    }
}