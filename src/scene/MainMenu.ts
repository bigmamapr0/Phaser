class MainMenu extends Phaser.Scene {
    
    constructor() {
        super("mainMenu");
    }

    create() {
        let background = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "background");
        let scaleX = this.cameras.main.width / background.width;
        let scaleY = this.cameras.main.height / background.height;
        let scale = Math.max(scaleX, scaleY);
        background.setScale(scale).setScrollFactor(0);
    }
}

export {MainMenu}