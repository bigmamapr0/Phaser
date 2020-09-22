import { config } from "../game";

class Scene2 extends Phaser.Scene {
    
    constructor() {
        super("scene2");
    }

    create() {
        let background = this.add.image(0, 0, "background");
        background.setOrigin(0, 0);

        this.add.text(20, 20, "game loaded", {fill: "yellow"});
    }
}

export {Scene2}