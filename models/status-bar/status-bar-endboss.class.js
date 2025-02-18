class StatusBarEndboss extends StatusBar {
    x = 580;
    
    IMAGES_STATUSBAR = [
        'assets/img/4. Marcadores/green/Life/0_green.png',
        'assets/img/4. Marcadores/green/Life/20_green.png',
        'assets/img/4. Marcadores/green/Life/40_green.png',
        'assets/img/4. Marcadores/green/Life/60_green.png',
        'assets/img/4. Marcadores/green/Life/80_green.png',
        'assets/img/4. Marcadores/green/Life/100_green.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR);
        this.setPercentage(this.percentage);
    }
}