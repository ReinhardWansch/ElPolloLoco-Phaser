class Example extends Phaser.Scene {
    preload() {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');

        this.load.image('sky', '/img/example/space3.png');
        this.load.image('logo', '/img/example/phaser3-logo.png');
        this.load.image('red', '/img/example/red.png');
    }

    create() {
        this.add.image(400, 300, 'sky');

        const particles = this.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        particles.startFollow(logo);
    }
}

const config = {
    type: Phaser.AUTO,
    scene: Example,
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