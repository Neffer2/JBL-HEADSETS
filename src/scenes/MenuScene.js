let width, height;

export class MenuScene extends Phaser.Scene {
    constructor(){
        super('MenuScene');
    }  

    preload(){
        
    }    
 
    create(){
        this.playMusic();
        width = this.game.config.width;
        height = this.game.config.height;
        this.add.image(0, 0, 'background_tut').setScale(0.49).setOrigin(0, 0);
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        // this.add.image(screenCenterX, (height/4), 'main-title').setScale(.5);
        let playButton = this.add.image(width/2, (height/2) + 400, 'play-btn').setScale(.4).setInteractive();
        playButton.on('pointerdown', () => {
            playButton.setScale(.3); 
            setTimeout(() => {
                this.scene.start('MainScene');
            }, 200);
        });
        
        playButton.on('pointerout', () => {            
            playButton.setScale(.4);
        });
    }

    playMusic(){
        let songs = ['song1', 'song2', 'song3'];
        let randomSong = songs[Math.floor(Math.random() * songs.length)];
        let backgroundMusic = this.sound.add(randomSong, { loop: true });
        backgroundMusic.volume = 0.4;
        backgroundMusic.play();
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}