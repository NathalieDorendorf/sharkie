class StatusBarCoin extends StatusBar {
    y = 70;
    
    IMAGES_STATUSBAR = [
        'assets/img/4. Marcadores/Purple/coin_0.png',
        'assets/img/4. Marcadores/Purple/coin_20.png',
        'assets/img/4. Marcadores/Purple/coin_40.png',
        'assets/img/4. Marcadores/Purple/coin_60.png',
        'assets/img/4. Marcadores/Purple/coin_80.png',
        'assets/img/4. Marcadores/Purple/coin_100.png'
    ];
    
    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR);
        this.percentage = 0;
        this.setPercentage(this.percentage);
    }
}
