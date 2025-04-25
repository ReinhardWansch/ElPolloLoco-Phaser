let canvasWidth = 720;
let canvasHeight = 480;

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
        this.character.body.setSize(248, 555); // Breite: 100px, Höhe: 200px
        this.character.body.setOffset(154, 587); // Verschiebt die Hitbox um 50px nach rechts und unten
        this.character.setScale(0.25);

        // Boden hinzufügen
        console.log(canvasWidth); ///DEBUG
        const ground = this.add.rectangle(0, canvasHeight - 40, 100000, 10, 0x000000, 0); // Transparenter Boden
        this.physics.add.existing(ground, true); // Füge Physik hinzu (statisch)
        // Kollision zwischen Charakter und Boden
        this.physics.add.collider(this.character, ground);
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
            gravity: { y: 1600 },
            debug: true
        }
    }
};

const game = new Phaser.Game(config);

