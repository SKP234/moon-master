class Gorgatron extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, cursors, frame) {
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
        frames: this.anims.generateFrameNumbers('gorgatron',{
            start: 0,
            end: 0
        })
    })
    this.anims.create({
        key: 'walk',
        frameRate: 2,
        repeat: -1,
        frames: this.anims.generateFrameNumbers('gorgatron',{
            start: 1,
            end: 2
        })
    })
    this.anims.create({
        key: 'dead',
        frameRate: 0,
        repeat: -1,
        frames: this.anims.generateFrameNumbers('gorgatron',{
            start: 3,
            end: 3
        })
    })
    }

  
  preload(){
  }

  create(){

  }

  update(intro, dead) {
    
    if(intro){
      this.play('walk', true)
    } else if(dead){
      this.play('dead', true)
    } else {
      this.play('idle', true)
    }
  }

}