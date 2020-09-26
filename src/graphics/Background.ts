import { config } from "../game";

class BackgroundGraphics extends Phaser.GameObjects.TileSprite {
    private movementSpeed = 0.5;
    
    constructor(scene: Phaser.Scene) {
        super(scene, scene.cameras.main.width / 2, scene.cameras.main.height / 2, config.width, window.innerHeight, "playBackground");
    }

    update() {
        this.tilePositionX += this.movementSpeed;
    }
}

export { BackgroundGraphics }