class Rocket extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y, width, height, color) {
        super(scene, x, y, width, height, color)
        this.currentScene = scene
      scene.add.existing(this)
      scene.physics.add.existing(this)
      this.setVisible(false)
      this.isFiring = false
      this.turned = false
    }


  

  update(keyFjustdown, playerX, playerY) {
    if(this.isFiring == false){
        this.x = playerX
        this.y = playerY - 25
    }
    if(keyFjustdown && this.isFiring == false){
        this.currentScene.sound.play('shoot')
        this.setVisible(true)
        this.isFiring = true
        this.body.setVelocity(0, -200)
    } else if(keyFjustdown && this.isFiring == true && this.turned == false){
        this.turned = true
        this.body.setVelocity(200, 0)
    }
    
    if(this.y < 0 || this.x > game.config.width){
        this.reset()
    }
  }

  reset() {
    this.setVisible(false)
    this.isFiring = false
    this.turned = false
    this.body.setVelocity(0, 0)
  }

}