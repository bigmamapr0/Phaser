import { BackgroundGraphics } from "../../graphics/background";

class Play extends Phaser.Scene {
    private background: BackgroundGraphics;

    public score: number = 0;
    private scoreOnPlane: number = 50;

    private spawnRate: number = 350;

    private gameTime: number = 30;
    public remainingTime: number;

    constructor() {
        super("play");
    }

    create() {
        let screenCenterX = this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.height / 2;

        this.background = new BackgroundGraphics(this);
        this.add.existing(this.background);
        
        this.remainingTime = this.gameTime;

        let scoreText = this.add.text(screenCenterX,  40, `SCORE: ${this.score}`, { fontSize: "50px" }).setOrigin(0.5);

        let timeText = this.add.text(screenCenterX,  scoreText.height + 40, `time remaining: ${this.remainingTime} sec`, { fontSize: "20px" }).setOrigin(0.5);

        let spawnPlanes = this.time.addEvent({
            delay: this.spawnRate,
            callback: () => {
                let plane = this.add.image(Phaser.Math.Between(100, (<number>this.game.config.width) - 100), Phaser.Math.Between(40, (<number>this.game.config.height) - 40), "plane");
                plane.setInteractive({ useHandCursor: true });
                this.add.existing(plane);

                plane.on('pointerup', () => {
                    this.score += this.scoreOnPlane;
                    scoreText.text = `SCORE: ${this.score} pts`
                    plane.destroy();
                });

                if (this.remainingTime <= 0) {
                    plane.disableInteractive();
                    
                }
            },
            callbackScope: this,
            loop: true
        });

        this.time.addEvent({
            delay: 1000,
            callback: () => {
                if (this.remainingTime <= 0) {
                    this.remainingTime = 0;
                    spawnPlanes.destroy();
                    console.log("Game Over!");
                    
                    this.scene.start("gameOver", {score: this.score});
                } else {
                    this.remainingTime--;
                }

                timeText.text = `time remaining: ${this.remainingTime}`
                
            },
            callbackScope: this,
            loop: true
        });
    }
    
    update() {
        this.background.update();
    }
}

export { Play };