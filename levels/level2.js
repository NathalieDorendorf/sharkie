let level2;

function initLevel2() {
    const collectablePositions = [];
    const coins = Level.createCollectables(Coin, 20, collectablePositions);
    const poisons = Level.createCollectables(Poison, 20, collectablePositions);

    level2 = new Level(
        [
            new JellyFishPurple(),
            new JellyFishPurple(),
            new JellyFishPurple(),
            new JellyFishPurple(),
            new JellyFishYellow(),
            new JellyFishYellow(),
            new JellyFishYellow(),
            new JellyFishYellow(),
            new Endboss()
        ],
        [
            new Light(),
        ],
        [],
        [
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
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D2.png', 719 * 3),

            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D1.png', 719 * 4),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 4),
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 4),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D1.png', 719 * 4),
            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D2.png', 719 * 5),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 5),
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 5),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D2.png', 719 * 5),

            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D1.png', 719 * 6),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 6),
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 6),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D1.png', 719 * 6),
            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D2.png', 719 * 7),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 7),
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 7),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D2.png', 719 * 7)

        ],
        coins,
        poisons
    );
}