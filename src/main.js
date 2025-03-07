
let config = {
    type: Phaser.AUTO,
    width: 400,
    height: 320,
    scene: [ Load, Menu, Credits ],
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

