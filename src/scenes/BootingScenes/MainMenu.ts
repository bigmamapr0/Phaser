import { Scene } from "phaser";
import { BackgroundGraphics } from "../../graphics/background";

class MainMenu extends Phaser.Scene{
    
    private background: BackgroundGraphics;

    constructor() {
        super("mainMenu");
    }

    create() {
        let screenCenterX = this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.height / 2;

        this.background = new BackgroundGraphics(this);
        this.add.existing(this.background);

        let play = this.add.text(screenCenterX, screenCenterY - 150, "PLAY", {fontSize: "50px"}).setOrigin(0.5);
        let settings = this.add.text(screenCenterX, screenCenterY, "SETTINGS", {fontSize: "50px"}).setOrigin(0.5);
        let quit = this.add.text(screenCenterX, screenCenterY + 150, "QUIT", {fontSize: "50px"}).setOrigin(0.5);

        play.setInteractive({ useHandCursor: true });
        settings.setInteractive({ useHandCursor: true });
        quit.setInteractive({ useHandCursor: true });

        play.on("pointerup", () => {
            this.scene.start("play");
        })

        settings.on('pointerup', () => {
            this.scene.start("settings");
        }); 

        quit.on('pointerup', () => {
            this.scene.start("quit");
        }); 
    }

}

export {MainMenu}