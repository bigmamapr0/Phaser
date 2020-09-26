import { Scene } from "phaser";

class MainMenu extends Phaser.Scene{
    
    constructor() {
        super("mainMenu");
    }

    create() {
        let screenCenterX = this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.height / 2;

        let background = this.add.image(screenCenterX, screenCenterY, "background");
        let scaleX = this.cameras.main.width / background.width;
        let scaleY = this.cameras.main.height / background.height;
        let scale = Math.max(scaleX, scaleY);
        background.setScale(scale).setScrollFactor(0);

        let play = this.add.text(screenCenterX, screenCenterY - 150, "PLAY", {fontSize: "50px", fill: "black"}).setOrigin(0.5);
        let settings = this.add.text(screenCenterX, screenCenterY, "SETTINGS", {fontSize: "50px", fill: "black"}).setOrigin(0.5);
        let quit = this.add.text(screenCenterX, screenCenterY + 150, "QUIT", {fontSize: "50px", fill: "black"}).setOrigin(0.5);

        play.setInteractive({ useHandCursor: true });
        settings.setInteractive({ useHandCursor: true });
        quit.setInteractive({ useHandCursor: true });

        play.on("pointerup", () => {
            this.scene.start("playScene");
        })

        settings.on('pointerup', () => {
            this.scene.start("settingsScene");
        }); 

        quit.on('pointerup', () => {
            this.scene.start("quitScene");
        }); 
    }

}

export {MainMenu}