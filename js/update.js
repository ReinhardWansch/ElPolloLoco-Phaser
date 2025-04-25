function moveCharacter(scene) {
    if (scene.cursors.left.isDown) {
        scene.character.x -= characterSpeed;
        scene.cameras.main.scrollX -= characterSpeed;
        scene.character.setFlipX(true); // Spiegeln, wenn nach links bewegt
        scene.character.body.offset = characterHitboxFacingLeft;
    } else if (scene.cursors.right.isDown) {
        scene.character.x += characterSpeed;
        scene.cameras.main.scrollX += characterSpeed;
        scene.character.setFlipX(false); // Normal, wenn nach rechts bewegt
        scene.character.body.offset = characterHitbox;
    }

    if (scene.cursors.up.isDown && scene.character.body.touching.down) {
        scene.character.setVelocityY(-330);
    }
}