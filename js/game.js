let canvasWidth = 720;
let canvasHeight = 480;
let characterSpeed = 10;
let characterHitbox = { x: 154, y: 587 };
let characterHitboxFacingLeft = { x: 199, y: 587 };

class ElPolloLoco extends Phaser.Scene {

    preload() {
        this.load.image('background', '/img/complete_background.png');

        this.load.spritesheet('character', '/img/sprites/spritesheet-pepe.png', {
            frameWidth: 610, // Breite eines Frames
            frameHeight: 1200 // Höhe eines Frames
        });
    }

    create() {
        addBackground(this);
        addCharacter(this);
        addGround(this);
    }

    update() {
        this.cursors = this.input.keyboard.createCursorKeys();
        moveCharacter(this);
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
            gravity: { y: 1600 },
            debug: true
        }
    }
};

const game = new Phaser.Game(config);

