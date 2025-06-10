let level2;

function initLevel2() {
    level2 = new Level(
        [
            new JellyFish(),
            new JellyFish(),
            new JellyFish(),
            new Endboss()
        ],
        [
            new Light(),
        ],
        [
            new Barrier('assets/img/3. Background/Barrier/1.png'),
            new Barrier('assets/img/3. Background/Barrier/2.png'),
            new Barrier('assets/img/3. Background/Barrier/3.png'),
        ],
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
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D2.png', 719 * 3)

        ],
        []
    );
}