let canvasWidth= 720;
let canvasHeight= 480;

class ElPolloLoco extends Phaser.Scene {

    preload() {
        this.load.image('background', '/img/complete_background.png');
    }

    create() {
        const background= this.add.image(0, 0, 'background');
        background.setOrigin(0, 0);
        background.setScale(canvasHeight / background.height);
    }

    update() {
        this.cameras.main.scrollX += 2; // Bewegt die Kamera in jedem Frame um 2 Pixel nach rechts
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

