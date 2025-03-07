class Load extends Phaser.Scene {

    constructor() {
        super("loadScene")
    }

    preload() {
        this.loadingText = this.add.text(game.config.width / 2, game.config.height / 3, 'loading.').setOrigin(0.5)

        this.time.addEvent({
          delay: 500,
          callback: () => {
            if(this.loadingText.text == 'loading...'){
                this.loadingText.text = 'loading.'
            } else{
                this.loadingText.text += '.'
            }
          },
          loop: true
        })

        let loadingBar = this.add.graphics()
        this.load.on('progress', (value) => {
            loadingBar.clear();
            loadingBar.fillStyle(0xFFFFFF, 1);
            loadingBar.fillRect(0, game.config.height / 2, game.config.width * value, 5)
        })   
        this.load.on('complete', () => {
            loadingBar.destroy();
            this.scene.start('menuScene')
        })
        

        this.load.image('tilesetImage', './assets/terrain.png')
        this.load.tilemapTiledJSON('tilemapMenu', './assets/menutileset.json')
        
        this.load.image('car', './assets/car.png')
    }

    create(){

    }

}