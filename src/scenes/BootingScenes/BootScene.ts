class BootScene extends Phaser.Scene {

    constructor() {
        super("bootScene");
    }

    preload() {
        this.load.image("background", '../../assets/background.jpg');
        this.load.image("duck", '../../assets/duck.png');
        this.load.image("playBackground", '../../assets/playBackground.jpg');
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
            this.scene.start("playScene");
        }, 400);
    }
}

export {BootScene};