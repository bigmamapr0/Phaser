import { config } from "../../game";
import { BackgroundGraphics } from "../../graphics/background";

class Play extends Phaser.Scene {
    private background: BackgroundGraphics;

    constructor() {
        super("playScene");
    }

    create() {
        let screenCenterX = this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.height / 2;

        this.background = new BackgroundGraphics(this);
        this.add.existing(this.background);
    }

    update() {
        this.background.update();
    }
}

export { Play }