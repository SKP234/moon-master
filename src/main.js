// Name: Kyle Nguyen
// Based off of Moon Master from Aqua Teen Hunger Force(Season 3, Episode 8; 2:36)
// Major Components: Physics, Tileset, Animation, Timers, Audio, Input(keyboard)


let config = {
    type: Phaser.AUTO,
    width: 400,
    height: 320,
    scene: [ Load, Menu, Credits , Level1, Level2, Level3, Level3intro],
    scale: {
        autoCenter: Phaser.Scale.autoCenter
    },
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    zoom: 2,
}


let game = new Phaser.Game(config)

