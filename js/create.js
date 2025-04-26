let characterDebug;

function addBackground(scene) {
    const background = scene.add.image(0, 0, 'background');
    background.setOrigin(0, 0);
    background.setScale(canvasHeight / background.height);
}

function addGround(scene) {
    let ground = scene.add.rectangle(0, canvasHeight - 40, 100000, 10, 0x000000, 0); // Transparenter Boden
    scene.physics.add.existing(ground, true); // Füge Physik hinzu (statisch)
    scene.physics.add.collider(scene.character, ground);
}

function addCharacter(scene) {
    scene.character = scene.physics.add.sprite(160, 0, 'character');
    characterDebug= scene.character ///DEBUG
    // scene.character.body.setSize(248, 555); // Hitbox Breite und Höhe
    // scene.character.body.offset = characterHitbox; // Hitbox Position
    scene.character.setScale(0.5);
}

function addCharacterAnimations(scene) {
    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNumbers('character', { start: 0, end: 9 }),
        frameRate: 3,
        repeat: -1
    });
}