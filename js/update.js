function moveCharacter(scene) {
    let currentAnimationKey;
    if (scene.character.anims.currentAnim)
    currentAnimationKey= scene.character.anims.currentAnim.key;
    if (scene.cursors.left.isDown) {
        scene.character.setVelocityX(-characterWalkSpeed);
        scene.character.setFlipX(true);
        if (currentAnimationKey != 'walk-character') scene.character.play('walk-character');
    } else if (scene.cursors.right.isDown) {
        scene.character.setVelocityX(characterWalkSpeed);
        scene.character.setFlipX(false);
        if (currentAnimationKey != 'walk-character') scene.character.play('walk-character');
    } else {
        scene.character.setVelocityX(0);
        if (currentAnimationKey != 'idle-character') scene.character.play('idle-character');
    }

    if (scene.cursors.up.isDown && scene.character.body.touching.down) {
        scene.character.setVelocityY(-characterJumpSpeed);
    }
}

function scrollToCharacter(scene) {
    scene.cameras.main.scrollX = scene.character.x - canvasWidth / 4;
}