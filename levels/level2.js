let level2;

function initLevel2() {
    const collectablePositions = [];
    const coins = Level.createCollectables(Coin, 20, collectablePositions);
    const poisons = Level.createCollectables(Poison, 20, collectablePositions);

    level2 = new Level(
        [
            new JellyFishPurple(800),
            new JellyFishPurple(1600),
            new JellyFishPurple(2400),
            new JellyFishPurple(3200),
            new JellyFishYellow(1200),
            new JellyFishYellow(2000),
            new JellyFishYellow(2800),
            new JellyFishYellow(3700),
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