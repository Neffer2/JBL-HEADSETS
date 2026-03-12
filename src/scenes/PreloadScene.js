export class PreloadScene extends Phaser.Scene {
    constructor(){
        super('PreloadScene');
    }  

    preload(){
        this.load.setPath('public/assets');
        this.load.image('background', 'generic-png/env/background_tall.jpg');
        this.load.image('background_tut', 'generic-png/env/background_tut.jpeg');
        this.load.image('background_go', 'generic-png/env/background_go.jpg');
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
        this.load.audio('song1', 'music/song1.mp3');
        this.load.audio('song2', 'music/song2.mp3');
        this.load.audio('song3', 'music/song3.mp3');
        this.load.audio('C', 'music/notes/c.mp3');
        this.load.audio('D', 'music/notes/d.mp3');
        this.load.audio('E', 'music/notes/e.mp3');
        this.load.audio('F', 'music/notes/f.mp3');
        this.load.audio('G', 'music/notes/g.mp3');
        this.load.audio('A', 'music/notes/a.mp3');
        this.load.audio('B', 'music/notes/b.mp3');
    }    
 
    create(){
        this.scene.start('MenuScene');   
        // this.scene.start('MainScene');   
    }
}