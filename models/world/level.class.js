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

    static createCollectables(ClassType, count, usedPositions, minDistance = 80, excludeZones = []) {
        const items = [];
        for (let i = 0; i < count; i++) {
            let x, y, attempts = 0;
            do {
                x = 200 + Math.random() * 4000;
                y = 50 + Math.random() * 250;
                attempts++;
            } while (
                attempts < 100 && (
                    usedPositions.some(p => Math.abs(p.x - x) < minDistance && Math.abs(p.y - y) < minDistance) ||
                    excludeZones.some(z => x < z.x + z.width + 20 && x + 60 > z.x - 20 && y < z.y + z.height + 20 && y + 60 > z.y - 20)
                )
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