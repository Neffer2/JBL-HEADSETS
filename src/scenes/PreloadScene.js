export class PreloadScene extends Phaser.Scene {
    constructor(){
        super('PreloadScene');
    }  

    preload(){
        this.load.setPath('public/assets');
        this.load.image('background', 'generic-png/env/background_tall.jpg');
        this.load.image('background_tut', 'generic-png/env/background_tut.jpeg');
        this.load.image('background_go', 'generic-png/env/background_GO.jpeg');
        this.load.image('headsets', 'generic-png/env/headsets.png');
        // this.load.image('game-over', 'generic-png/env/game_over.png');
        this.load.image('logo', 'generic-png/env/logo.png');
        this.load.image('play-btn', 'buttons/play_button.png');

        // notes
        this.load.image('nota1', 'generic-png/notes/nota1.png');
        this.load.image('nota2', 'generic-png/notes/nota2.png');
        this.load.image('nota3', 'generic-png/notes/nota3.png');
        this.load.image('nota4', 'generic-png/notes/nota4.png');
        this.load.image('nota5', 'generic-png/notes/nota5.png');

        // Sounds
        this.load.audio('song', 'music/song.mp3');
        this.load.audio('C', 'music/notes/c.wav');
        this.load.audio('D', 'music/notes/d.wav');
        this.load.audio('E', 'music/notes/e.wav');
        this.load.audio('F', 'music/notes/f.wav');
        this.load.audio('G', 'music/notes/g.wav');
    }    
 
    create(){
        this.scene.start('MenuScene');   
        // this.scene.start('MainScene');   
    }
}