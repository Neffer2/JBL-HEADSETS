let width, height, score;

export class GameOverScene extends Phaser.Scene {
    constructor(){
        super('GameOverScene');
    }  

    preload(){}    

    create(){ 
        score = this.sys.settings.data.score;
        height = this.game.config.height;
        this.add.image(0, 0, 'background_go').setScale(0.49).setOrigin(0, 0);        
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.add.text((screenCenterX), (height/2), "Puntaje: "+score, { font: '70px font1', fill: '#ffffff' }).setOrigin(.5);

        setTimeout(() => {
            location.reload();
        }, 5000);
    }
} 