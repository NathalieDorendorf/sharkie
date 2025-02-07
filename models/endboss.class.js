class Endboss extends MovableObject {
    x = 500;
    y = 0;
    width = 500;
    height = 500;

    constructor() {
        super().loadImage('assets/img/2.Enemy/3 Final Enemy/2.floating/1.png');
    
    }

    attack() {
        console.log('attacking');
        
    }
}