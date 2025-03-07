class Menu extends Phaser.Scene {
    constructor() {
        super("Level1Scene")
    }
    preload(){
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys()
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)


    
        
    }




    update() {
        
        
      }
      



}