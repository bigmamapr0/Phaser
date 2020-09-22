class Scene1 extends Phaser.Scene {

    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("background", '../../assets/background.jpg');
    }

    create() {
        this.add.text(20, 20, "loading...");

        setTimeout(() => {
            this.scene.start("scene2");
        }, 500);
    }
}

export {Scene1};