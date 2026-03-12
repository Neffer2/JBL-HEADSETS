let mContext, width, height, sheeps = [], amount = 2, destroySound, scoreText, scoreTimer, scoreCounter = 0, 
    time = 30, 
    notes = ['nota1', 'nota2', 'nota3', 'nota4', 'nota5'],
    notes_audio = ['C', 'D', 'E', 'F', 'G']; 

export class MainScene extends Phaser.Scene {
    constructor(){
        super('MainScene');
    }  

    preload(){}    

    create(){ 
        mContext = this;
        mContext.createSheeps(amount);
        mContext.setTimer();

        // Colliders
        this.physics.add.collider(sheeps, sheeps);
    }

    update(){}

    init() {
        width = this.game.config.width;
        height = this.game.config.height;
        this.add.image(0, 0, 'background').setScale(0.49).setOrigin(0, 0);        
        this.add.image(140, 50, 'logo').setScale(0.5);
        const headsets = this.add.image(0, 0, 'headsets').setScale(0.49).setOrigin(0.5, 0.5);
        headsets.setPosition(width / 2, height / 2);
        this.tweens.add({
            targets: headsets,
            scaleX: 0.52,
            scaleY: 0.52,
            duration: 700,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
        scoreText = this.add.text((width/2) + 68, 5, "Puntaje: "+scoreCounter, { font: '40px font1', fill: '#f18623' });
        scoreTimer = this.add.text((width/2) + 68, 50, "Tiempo: "+time, { font: '40px font1', fill: '#f18623' });
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    createSheeps(amount){
        for(let i = 0; i < amount; i++){
            let noteIndex = this.getRandomInt(0, notes.length);
            let sheep = mContext.physics.add.image(this.getRandomInt(0, width), this.getRandomInt(0, height), notes[noteIndex]).setScale(0.8);
            sheep.setData('noteAudio', notes_audio[noteIndex]);
            sheep.setInteractive();
            sheep.setCollideWorldBounds(true);
            sheep.setBounce(1);
            sheep.setCircle(90);
            sheeps.push(sheep);
        }

        if (amount > 2){
            this.cameras.main.shake(150, 0.02);
        }

        sheeps.forEach(sheep => {
            sheep.on('pointerdown', function(){
                mContext.deleteSheep(sheep);
            });
            
            sheep.setVelocity(this.getRandomInt(-300, 300), this.getRandomInt(-300, 300));
        });

        // World step
        this.physics.world.on('worldstep', () => {
            sheeps.forEach(sheep => {
                sheep.setAngularVelocity(
                    Phaser.Math.RadToDeg(sheep.body.velocity.x / sheep.body.halfWidth)
                );
            });
        });
    }

    deleteSheep(sheep){
        this.sound.play(sheep.getData('noteAudio'));
        sheeps.splice(sheeps.indexOf(sheep), 1);
        sheep.destroy();
        scoreCounter += 1;
        scoreText.setText("Puntaje: " + scoreCounter);

        if(sheeps.length == 0){
            mContext.createSheeps(amount += 2);
        }
    }   

    setTimer(){
        let timeInterval = setInterval(() => {
            time--;
            if (time < 10){scoreTimer.setText("Tiempo: 0"+time);}else {scoreTimer.setText("Tiempo: "+time);}
            if(time == 0){
                clearInterval(timeInterval);
                mContext.gameOver();
            }
        }, 1000);
    }

    gameOver(){
        mContext.scene.start('GameOverScene', {score: scoreCounter});
    }
} 