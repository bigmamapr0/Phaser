class BootScene extends Phaser.Scene {

    constructor() {
        super("bootScene");
    }

    preload() {
        this.load.image("background", '../../assets/background.jpg');
    }

    create() {
        this.add.text(20, 20, "loading...", {fill: "yellow"});
        
        setTimeout(() => {
            this.add.text(20, 40, "assets loaded...", {fill: "yellow"});
        }, 1000);
        
        setTimeout(() => {
            this.add.text(20, 60, "game loaded...", {fill: "yellow"});
        }, 1250);  

        setTimeout(() => {
            this.add.text(20, 80, "ready to play", {fill: "yellow"});
        }, 1500)

        setTimeout(() => {
            this.scene.start("mainMenu");
        }, 1700);
    }
}

export {BootScene};