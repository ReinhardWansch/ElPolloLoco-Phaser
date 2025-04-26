let canvasWidth = 720;
let canvasHeight = 480;
let characterWalkSpeed = 400;
let characterJumpSpeed = 660;
let characterHitbox = { x: 154, y: 587 };
let characterHitboxFacingLeft = { x: 199, y: 587 };

class ElPolloLoco extends Phaser.Scene {

    preload() {
        this.load.image('background', '/img/complete_background.png');

        this.load.spritesheet('character', '/img/sprites/spritesheet-pepe.png', {
            frameWidth: 305, // Breite eines Frames
            frameHeight: 600 // Höhe eines Frames
        });
        
        this.load.spritesheet('chicken', '/img/sprites/spritesheet-chicken.png', {
            frameWidth: 72, // Breite eines Frames
            frameHeight: 72 // Höhe eines Frames
        });
    }

    create() {
        addBackground(this);
        addCharacter(this);
        addChicken(this);
        addGround(this);
    }

    update() {
        this.cursors = this.input.keyboard.createCursorKeys();
        moveCharacter(this);
        scrollToCharacter(this);
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