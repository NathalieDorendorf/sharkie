class StatusBar extends DrawableObjects {
    x = 20;
    y = 0;
    width = 180;
    height = 50;
    percentage = 100;

    IMAGES_HEART_GREEN = [
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];

    IMAGES_COINS_ORANGE = [
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png',
    ];

    IMAGES_BOTTLE_BLUE = [
        'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];

    IMAGES_ENDBOSS_GREEN = [
        'assets/img/7_statusbars/2_statusbar_endboss/green.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEART_GREEN);
        this.loadImages(this.IMAGES_COINS_ORANGE);
        this.loadImages(this.IMAGES_BOTTLE_BLUE);
        this.setPercentage(100);
    }

    // setPercentage(50);
    setPercentage(percentage) {
        this.percentage = percentage; // => 0 ... 5
        let path = this.IMAGES_HEART_GREEN[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}