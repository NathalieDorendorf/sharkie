class StatusBarCharacter extends StatusBar {
    y = 35;

    IMAGES_STATUSBAR = [
        'assets/img/4. Marcadores/Purple/heart_0.png',
        'assets/img/4. Marcadores/Purple/heart_20.png',
        'assets/img/4. Marcadores/Purple/heart_40.png',
        'assets/img/4. Marcadores/Purple/heart_60.png',
        'assets/img/4. Marcadores/Purple/heart_80.png',
        'assets/img/4. Marcadores/Purple/heart_100.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR);
        this.setPercentage(this.percentage);
    }
}