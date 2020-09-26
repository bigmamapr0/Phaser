import 'phaser';
import { BootScene } from './scenes/BootingScenes/BootScene';
import { MainMenu } from './scenes/BootingScenes/MainMenu';
import { Play } from './scenes/MainScenes/Play';
import { Settings } from './scenes/MainScenes/Settings';
import { Quit } from './scenes/MainScenes/Quit';

let config = {
    type: Phaser.AUTO,
    width: window.innerWidth, //1000
    height: window.innerHeight, //667
    background: "0x000000",
    title: "Test Project",
    physics: {
        default: 'arcade'
    },
    scene: [BootScene, MainMenu, Play, Settings, Quit]
}

let game = new Phaser.Game(config);

export {config}