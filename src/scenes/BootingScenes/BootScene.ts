class BootScene extends Phaser.Scene {

    constructor() {
        super("bootScene");
    }

    preload() {
        this.load.image("background", '../../assets/background.jpg');
        this.load.image("playBackground", '../../assets/playBackground.jpg');
        this.load.image("plane", '../../assets/plane.png');
    }

    create() {
        this.add.text(20, 20, "loading...", {fill: "yellow"});
        
        setTimeout(() => {
            this.add.text(20, 40, "assets loaded...", {fill: "yellow"});
        }, 100);
        
        setTimeout(() => {
            this.add.text(20, 60, "game loaded...", {fill: "yellow"});
        }, 200);  

        setTimeout(() => {
            this.add.text(20, 80, "ready to play", {fill: "yellow"});
        }, 300)

        setTimeout(() => {
            this.scene.start("mainMenu");
        }, 400);
    }
}

export {BootScene};