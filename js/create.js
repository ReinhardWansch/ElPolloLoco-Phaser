let characterDebug; ///DEBUG
let chickenDebug; ///DEBUG

function addBackground(scene) {
    const background = scene.add.image(0, 0, 'background');
    background.setOrigin(0, 0);
    background.setScale(canvasHeight / background.height);
}

//TODO: extract collider
function addGround(scene) {
    let ground = scene.add.rectangle(0, canvasHeight - 40, 100000, 10, 0x000000, 0); // Transparenter Boden
    scene.physics.add.existing(ground, true); // Füge Physik hinzu (statisch)
    scene.physics.add.collider(scene.character, ground);
    scene.physics.add.collider(scene.chicken, ground);
}

function addCharacter(scene) {
    scene.character = scene.physics.add.sprite(160, 0, 'character');
    characterDebug= scene.character ///DEBUG
    // scene.character.body.setSize(248, 555); // Hitbox Breite und Höhe
    // scene.character.body.offset = characterHitbox; // Hitbox Position
    scene.character.setScale(0.5);
    addCharacterAnimations(scene);
}

function addCharacterAnimations(scene) {
    scene.anims.create({
        key: 'idle-character',
        frames: scene.anims.generateFrameNumbers('character', { start: 0, end: 9 }),
        frameRate: 3,
        repeat: -1
    });
    scene.anims.create({
        key: 'walk-character',
        frames: scene.anims.generateFrameNumbers('character', { start: 10, end: 15 }),
        frameRate: 10,
        repeat: -1
    });
    scene.anims.create({
        key: 'jump-character',
        frames: scene.anims.generateFrameNumbers('character', { start: 16, end: 24 }),
        frameRate: 10,
        repeat: -1
    });
}

function addChicken(scene) {
    scene.chicken = scene.physics.add.sprite(250, 0, 'chicken');
    chickenDebug= scene.chicken ///DEBUG
    addChickenAnimations(scene);
    // scene.character.body.setSize(248, 555); // Hitbox Breite und Höhe
    // scene.character.body.offset = characterHitbox; // Hitbox Position
    // scene.character.setScale(0.5);
}

function addChickenAnimations(scene) {
    scene.anims.create({
        key: 'walk-chicken',
        frames: scene.anims.generateFrameNumbers('chicken', { start: 0, end: 2 }),
        frameRate: 3,
        repeat: -1
    });
}