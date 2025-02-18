class StatusBarPoison extends StatusBar {
    percentage = 0;

    IMAGES_STATUSBAR = [
        'assets/img/4. Marcadores/Purple/poison_0.png',
        'assets/img/4. Marcadores/Purple/poison_20.png',
        'assets/img/4. Marcadores/Purple/poison_40.png',
        'assets/img/4. Marcadores/Purple/poison_60.png',
        'assets/img/4. Marcadores/Purple/poison_80.png',
        'assets/img/4. Marcadores/Purple/poison_100.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR);
        this.setPercentage(this.percentage);
    }
}