let canvasWidth= 720;
let canvasHeight= 480;

class ElPolloLoco extends Phaser.Scene {

    preload() {
        this.load.image('background', '/img/complete_background.png');

        this.load.spritesheet('character', '/img/sprites/spritesheet-pepe.png', {
            frameWidth: 610, // Breite eines Frames
            frameHeight: 1200 // Höhe eines Frames
        });
    }


    create() {
        const background= this.add.image(0, 0, 'background');
        background.setOrigin(0, 0);
        background.setScale(canvasHeight / background.height);

        this.character = this.physics.add.sprite(160, 0, 'character');
        this.character.setScale(0.25);
    }


    update() {
        // this.cameras.main.scrollX += 2; ///DEBUG
    }

}

const config = {
    type: Phaser.AUTO,
    scene: ElPolloLoco,
    parent: 'canvasCtn',
    width: 720,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};

const game = new Phaser.Game(config);

