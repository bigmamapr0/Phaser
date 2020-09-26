import { Play } from "../scenes/MainScenes/Play";

class Plane extends Phaser.GameObjects.Image {

    public plane;

    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        this.scene = scene;
        this.x = x;
        this.y = y;

        this.plane = this.scene.add.image(x, y, "plane");
    }
}

export { Plane }