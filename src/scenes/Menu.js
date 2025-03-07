class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }
    preload(){
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys()
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)

    
        const menuMap = this.add.tilemap('tilemapMenu')
        const menutileset = menuMap.addTilesetImage('terrain', 'tilesetImage')
        const terrainLayer = menuMap.createLayer('Terrain', menutileset, 0, 0)


        
        this.player = new Player(this, game.config.width / 2, game.config.height / 2 , 'car')
    }




    update() {
        if (Phaser.Input.Keyboard.JustDown(this.keyF)){
            this.scene.start('playScene')
        }
        if (this.cursors.down.isDown){
            this.scale.setGameSize(game.config.width + 600, this.scale.height)
            this.scene.start('creditsScene')
        }
        
      }
      



}