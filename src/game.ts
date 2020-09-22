import 'phaser';
import {Scene1 } from './scene/Scene1';
import {Scene2 } from './scene/Scene2';

let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 667,
    background: "0x000000",
    title: "Test Project",
    physics: {
        default: 'arcade'
    },
    scene: [Scene1, Scene2]
}

let game = new Phaser.Game(config);

export {config}