class Character extends MovableObject {

    constructor() {
        super().loadImage('assets/img/1.Sharkie/1.IDLE/1.png');
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