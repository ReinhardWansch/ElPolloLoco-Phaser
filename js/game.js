let canvasWidth = 720;
let canvasHeight = 480;
let character; ///DEBUG
let characterSpeed = 10;
let characterHitbox= {x: 154, y: 587};
let characterHitboxFacingLeft= {x: 199, y: 587};
let characterIsMoving= false;
let characterFacingLeft= false;

class ElPolloLoco extends Phaser.Scene {

    preload() {
        this.load.image('background', '/img/complete_background.png');

        this.load.spritesheet('character', '/img/sprites/spritesheet-pepe.png', {
            frameWidth: 610, // Breite eines Frames
            frameHeight: 1200 // Höhe eines Frames
        });
    }


    create() {
        const background = this.add.image(0, 0, 'background');
        background.setOrigin(0, 0);
        background.setScale(canvasHeight / background.height);

        // Character hinzufügen
        this.character = this.physics.add.sprite(160, 0, 'character');
        // Hitbox anpassen
        this.character.body.setSize(248, 555); // Hitbox Breite und Höhe
        this.character.body.offset= characterHitbox;
        this.character.setScale(0.25);
        character= this.character; ///DEBUG

        // Boden hinzufügen
        const ground = this.add.rectangle(0, canvasHeight - 40, 100000, 10, 0x000000, 0); // Transparenter Boden
        this.physics.add.existing(ground, true); // Füge Physik hinzu (statisch)
        // Kollision zwischen Charakter und Boden
        this.physics.add.collider(this.character, ground);
    }


    update() {
        const cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown) {
            this.character.x -= characterSpeed;
            this.cameras.main.scrollX -= characterSpeed;
            this.character.setFlipX(true); // Spiegeln, wenn nach links bewegt
            this.character.body.offset= characterHitboxFacingLeft;
        } else if (cursors.right.isDown) {
            this.character.x += characterSpeed;
            this.cameras.main.scrollX += characterSpeed;
            this.character.setFlipX(false); // Normal, wenn nach rechts bewegt
            this.character.body.offset= characterHitbox;
        }

        if (cursors.up.isDown && this.character.body.touching.down) {
            this.character.setVelocityY(-330);
        }
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

