import { Play } from "./Play";
import { BackgroundGraphics } from "../../graphics/background";

class Settings extends Phaser.Scene {

    private background: BackgroundGraphics;

    constructor() {
        super("settings");
    }

    create() {
        let screenCenterX = this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.height / 2;

        this.background = new BackgroundGraphics(this);
        this.add.existing(this.background);

        let backToMenu = this.add.text(100, 100, "<- MAIN MENU", { fontSize: "30px" }).setInteractive({ useHandCursor: true });

        backToMenu.on('pointerup', () => {
            this.scene.start("mainMenu");
        });

        let audio = this.add.text(screenCenterX, screenCenterY, "AUDIO: ON", { fontSize: "50px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        audio.on('pointerup', () => {
            // TODO: add sound
            if (audio.text == "AUDIO: ON") {
                audio.text = "AUDIO: OFF"
            } else {
                audio.text = "AUDIO: ON"
            }
        })
    }
}

export { Settings }