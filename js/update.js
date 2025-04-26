function moveCharacter(scene) {
    if (scene.cursors.left.isDown) {
        scene.character.setVelocityX(-characterWalkSpeed);
        scene.character.setFlipX(true); // Spiegeln, wenn nach links bewegt
        // scene.character.body.offset = characterHitboxFacingLeft;
    } else if (scene.cursors.right.isDown) {
        scene.character.setVelocityX(characterWalkSpeed);
        scene.character.setFlipX(false); // Normal, wenn nach rechts bewegt
        // scene.character.body.offset = characterHitbox;
    } else {
        scene.character.setVelocityX(0);
    }

    if (scene.cursors.up.isDown && scene.character.body.touching.down) {
        scene.character.setVelocityY(-characterJumpSpeed);
    }
}

function scrollToCharacter(scene) {
    scene.cameras.main.scrollX = scene.character.x - canvasWidth / 4;
}