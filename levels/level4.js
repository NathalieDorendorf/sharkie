let level4;

function initLevel4() {
    const collectablePositions = [];
    const coins = Level.createCollectables(Coin, 20, collectablePositions);
    const poisons = Level.createCollectables(Poison, 20, collectablePositions);

    level4 = new Level(
        [
            new PufferFishGreen(),
            new PufferFishGreen(),
            new PufferFishRed(),
            new PufferFishRed(),
            new PufferFishYellow(),
            new PufferFishYellow(),
            new JellyFishPurple(),
            new JellyFishPurple(),
            new JellyFishYellow(),
            new JellyFishYellow(),
            new Endboss()
        ],
        [
            new Light(),
        ],
        [
            new Barrier('assets/img/3. Background/Barrier/2.png', 800, 0),
            new Barrier('assets/img/3. Background/Barrier/3.png', 1700, 230),
            new Barrier('assets/img/3. Background/Barrier/2.png', 2600, 0),
            new Barrier('assets/img/3. Background/Barrier/3.png', 3500, 230)
        ],
        [
            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D2.png', -719),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/D2.png', -719),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D2.png', -719),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D2.png', -719),

            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D1.png', 0),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/D1.png', 0),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D1.png', 0),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D1.png', 0),
            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D2.png', 719),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/D2.png', 719),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D2.png', 719),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D2.png', 719),

            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D1.png', 719 * 2),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 2),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 2),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D1.png', 719 * 2),
            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D2.png', 719 * 3),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 3),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 3),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D2.png', 719 * 3),

            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D1.png', 719 * 4),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 4),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 4),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D1.png', 719 * 4),
            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D2.png', 719 * 5),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 5),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 5),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D2.png', 719 * 5),
            
            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D1.png', 719 * 6),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 6),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 6),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D1.png', 719 * 6),
            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D2.png', 719 * 7),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 7),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 7),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D2.png', 719 * 7)
        ],
        coins,
        poisons
    );
}

