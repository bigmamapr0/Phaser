import 'phaser';
import {BootScene } from './scene/BootScene';
import {MainMenu } from './scene/MainMenu';

let config = {
    type: Phaser.AUTO,
    width: window.innerWidth, //1000
    height: 950, //667
    background: "0x000000",
    title: "Test Project",
    physics: {
        default: 'arcade'
    },
    scene: [BootScene, MainMenu]
}

let game = new Phaser.Game(config);

export {config}