import { BackgroundGraphics } from "../../graphics/background";

class GameOver extends Phaser.Scene {

    private background: BackgroundGraphics;

    constructor() {
        super("gameOver");
    }

    create(score) {
        this.background = new BackgroundGraphics(this);
        this.add.existing(this.background);

        let screenCenterX = this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.height / 2;

        let scoreText = { score };
        score = score[Object.keys(scoreText)[0]];

        this.add.text(screenCenterX, screenCenterY, `SCORE: ${score} pts`, { fontSize: "100px" }).setOrigin(0.5);
        let backToMenu = this.add.text(100, 100, "<- MAIN MENU", { fontSize: "30px" }).setInteractive({ useHandCursor: true });

        backToMenu.on('pointerup', () => {
            this.scene.start("mainMenu");
        })
    }
}

export { GameOver }