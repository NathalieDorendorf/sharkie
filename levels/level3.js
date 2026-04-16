let level3;

function initLevel3() {
    const collectablePositions = [];
    const coins = Level.createCollectables(Coin, 20, collectablePositions);
    const poisons = Level.createCollectables(Poison, 20, collectablePositions);

    level3 = new Level(
        [
            new PufferFishGreen(800),
            new JellyFishPurple(1150),
            new PufferFishRed(1500),
            new JellyFishYellow(1850),
            new PufferFishYellow(2200),
            new JellyFishPurple(2550),
            new PufferFishGreen(2900),
            new JellyFishYellow(3250),
            new PufferFishRed(3600),
            new PufferFishYellow(3900),
            new Endboss()
        ],
        [
            new Light(),
        ],
        [],
        [
            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L2.png', -719),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L2.png', -719),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L2.png', -719),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L2.png', -719),

            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L1.png', 0),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L1.png', 0),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L1.png', 0),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L1.png', 0),
            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L2.png', 719),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L2.png', 719),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L2.png', 719),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L2.png', 719),

            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L1.png', 719 * 2),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L1.png', 719 * 2),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L1.png', 719 * 2),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L1.png', 719 * 2),
            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L2.png', 719 * 3),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L2.png', 719 * 3),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L2.png', 719 * 3),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L2.png', 719 * 3),

            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L1.png', 719 * 4),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L1.png', 719 * 4),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L1.png', 719 * 4),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L1.png', 719 * 4),
            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L2.png', 719 * 5),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L2.png', 719 * 5),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L2.png', 719 * 5),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L2.png', 719 * 5),
            
            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L1.png', 719 * 6),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L1.png', 719 * 6),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L1.png', 719 * 6),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L1.png', 719 * 6),
            new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L2.png', 719 * 7),
            new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L2.png', 719 * 7),
            new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L2.png', 719 * 7),
            new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L2.png', 719 * 7)
        ],
        coins,
        poisons
    );
}

