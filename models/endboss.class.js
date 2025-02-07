class Endboss extends MovableObject {

    constructor() {
        super().loadImage('assets/img/2.Enemy/3 Final Enemy/2.floating/1.png');
    
        this.x = 500;
    }

    attack() {
        console.log('attacking');
        
    }
}