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
        this.load.tilemapTiledJSON('tilemapCredit', './assets/creditstileset.json')
        this.load.tilemapTiledJSON('tilemapLevel1', './assets/lv1tileset.json')
        this.load.tilemapTiledJSON('tilemapLevel2', './assets/lv2tileset.json')
        this.load.tilemapTiledJSON('tilemapLevel3intro', './assets/lv3introtileset.json')
        this.load.tilemapTiledJSON('tilemapLevel3', './assets/lv3tileset.json')

        this.load.spritesheet('knight', './assets/knightspritesheet.png', {
            frameWidth: 13,
            frameHeight: 10,
        })
        this.load.spritesheet('gorgatron', './assets/gorgatronspritesheet.png', {
            frameWidth: 20,
            frameHeight: 20,
        })
        
        this.load.image('car', './assets/car.png')
        this.load.image('title', './assets/title.png')
        this.load.image('playtext', './assets/playtext.png')
        this.load.image('creditstext', './assets/creditstext.png')
        this.load.image('returntext', './assets/returntext.png')


        this.load.audio('playerstep', './assets/playerstep.wav')
        this.load.audio('attack', './assets/attack.wav')
        this.load.audio('shoot', './assets/shoot.wav')
        this.load.audio('gorgatronstep', './assets/gorgatronstep.wav')

        //brian narrator
        this.load.audio('congrats', './assets/congrats.wav')
        this.load.audio('credits', './assets/credits.wav')
        this.load.audio('menu', './assets/menu.wav')
        this.load.audio('level1', './assets/level1.wav')
        this.load.audio('level2', './assets/level2.wav')
        this.load.audio('level3', './assets/level3.wav')
        this.load.audio('beware', './assets/beware.wav')
        this.load.audio('shootgorgatron', './assets/shootgorgatron.wav')
        this.load.audio('ending', './assets/ending.wav')
    }

    create(){

    }

}