class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }
    preload(){
    }

    create() {
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        this.cursors = this.input.keyboard.createCursorKeys()
        this.player = new Player(this, game.config.width / 2, game.config.height / 2 , 'knight')
    
        const menuMap = this.add.tilemap('tilemapMenu')
        const menutileset = menuMap.addTilesetImage('terrain', 'tilesetImage')
        const terrainLayer = menuMap.createLayer('Terrain', menutileset, 0, 0)

        terrainLayer.setCollisionByProperty({ collide: true })
        this.physics.add.collider(this.player, terrainLayer)


    }




    update() {
        this.player.update(this.cursors, this.keyF.isDown)
      }
      



}