class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame)
  
      scene.add.existing(this)
      scene.physics.add.existing(this)
      this.body.setCollideWorldBounds(true)
      this.setScale(2)
    }

  preload(){
  }

  create(){
    this.cursors = this.input.keyboard.createCursorKeys()

  }

  update() {
    


  }

}