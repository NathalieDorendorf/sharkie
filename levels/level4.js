let level4;

function initLevel4() {
    const barriers = [
        new Barrier('assets/img/3. Background/Barrier/3.png', 800, 0),
        new Barrier('assets/img/3. Background/Barrier/2.png', 1700, 230),
        new Barrier('assets/img/3. Background/Barrier/3.png', 2600, 0),
        new Barrier('assets/img/3. Background/Barrier/2.png', 3500, 230)
    ];
    const barrierZones = barriers.map(b => ({ x: b.x, y: b.y, width: b.width, height: b.height }));

    const collectablePositions = [];
    const coins = Level.createCollectables(Coin, 20, collectablePositions, 80, barrierZones);
    const poisons = Level.createCollectables(Poison, 20, collectablePositions, 80, barrierZones);

    level4 = new Level(
        [
            new JellyFishPurple(800),
            new PufferFishGreen(1200),
            new JellyFishYellow(1600),
            new PufferFishRed(2000),
            new JellyFishPurple(2400),
            new PufferFishYellow(2800),
            new JellyFishYellow(3200),
            new PufferFishGreen(3600),
            new PufferFishRed(3900),
            new PufferFishYellow(4100),
            new Endboss()
        ],
        [
            new Light(),
        ],
        barriers,
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

