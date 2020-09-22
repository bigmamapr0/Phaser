class Scene2 extends Phaser.Scene {
    
    constructor() {
        super("scene2");
    }

    create() {
        let background = this.add.image(0, 0, "background");
        background.setOrigin(0, 0);

        this.add.text(20, 20, "game loaded", {fill: "yellow"});
        
        setTimeout(() => {
            this.add.text(20, 40, "assets loaded", {fill: "yellow"});
        }, 500)

        setTimeout(() => {
            this.add.text(20, 60, "ready to play", {fill: "yellow"});
        }, 1000)
    }
}

export {Scene2}