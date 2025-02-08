class Character extends MovableObject {
    height = 220;
    width = 220;
    IMAGES_IDLE = [
        'assets/img/1.Sharkie/1.IDLE/1.png',
        'assets/img/1.Sharkie/1.IDLE/2.png',
        'assets/img/1.Sharkie/1.IDLE/3.png',
        'assets/img/1.Sharkie/1.IDLE/4.png',
        'assets/img/1.Sharkie/1.IDLE/5.png',
        'assets/img/1.Sharkie/1.IDLE/6.png',
        'assets/img/1.Sharkie/1.IDLE/7.png',
        'assets/img/1.Sharkie/1.IDLE/8.png',
        'assets/img/1.Sharkie/1.IDLE/9.png',
        'assets/img/1.Sharkie/1.IDLE/10.png',
        'assets/img/1.Sharkie/1.IDLE/11.png',
        'assets/img/1.Sharkie/1.IDLE/12.png',
        'assets/img/1.Sharkie/1.IDLE/13.png',
        'assets/img/1.Sharkie/1.IDLE/14.png',
        'assets/img/1.Sharkie/1.IDLE/15.png',
        'assets/img/1.Sharkie/1.IDLE/16.png',
        'assets/img/1.Sharkie/1.IDLE/17.png',
        'assets/img/1.Sharkie/1.IDLE/18.png'
    ];
    world;

    constructor() {
        super().loadImage('assets/img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);

        this.animate();
    }

    animate() {
        setInterval(() => {
            let index = this.currentImage % this.IMAGES_IDLE.length; // let index = 0 % 18; 0, Rest 0, 0 Rest 1... 0 Rest 17, 1 Rest 0
            // index = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9...
            let path = this.IMAGES_IDLE[index];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 250);
    }

    attack() {
        console.log('attacking');
        
    }

    jump() {
        console.log('jumping');

    }   

    sleep() {
        console.log('sleeping');
        
    }
    

}