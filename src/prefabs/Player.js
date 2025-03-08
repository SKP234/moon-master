class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame)
  
      scene.add.existing(this)
      scene.physics.add.existing(this)
      this.body.setCollideWorldBounds(true)
      this.setScale(2)
      this.Speed = 100
      
      this.anims.create({
        key: 'idle',
        frameRate: 0,
        repeat: -1,
        frames: this.anims.generateFrameNumbers('knight',{
            start: 0,
            end: 0
        })
    })
    this.anims.create({
        key: 'walk',
        frameRate: 18,
        repeat: -1,
        frames: this.anims.generateFrameNumbers('knight',{
            start: 1,
            end: 2
        })
    })
    this.anims.create({
        key: 'attack',
        frameRate: 14,
        repeat: -1,
        frames: this.anims.generateFrameNumbers('knight',{
            start: 3,
            end: 4
        })
    })
    }

  
  update(cursors, keyFdown) {
    if(cursors.left.isDown){
      this.body.setVelocityX(-this.Speed)
    } else if (cursors.right.isDown){
      this.body.setVelocityX(this.Speed)
    } else {
      this.body.setVelocityX(0)
      
    }
    if(cursors.up.isDown){
      this.body.setVelocityY(-this.Speed)
    } else if (cursors.down.isDown){
      this.body.setVelocityY(this.Speed)
    }  else{
      this.body.setVelocityY(0)

    }
    if(keyFdown){
      this.play('attack', true)
    } else if (this.body.velocity.x == 0 && this.body.velocity.y == 0){
      this.play('idle', true)
    } else {
      this.play('walk', true)

    }
  }

}