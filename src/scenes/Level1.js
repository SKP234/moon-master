class Level1 extends Phaser.Scene {
    constructor() {
        super("Level1Scene")
        this.win = false
        this.played = false
    }
    preload(){
    }

    create() {
        
        this.sound.stopAll();
        this.car = new Car(this, game.config.width / 2, 60 , 'car')
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        this.cursors = this.input.keyboard.createCursorKeys()
        this.player = new Player(this, game.config.width / 2, 280 , 'knight')
    
        const lv1Map = this.add.tilemap('tilemapLevel1')
        const lv1tileset = lv1Map.addTilesetImage('terrain', 'tilesetImage')
        const terrainLayer = lv1Map.createLayer('Terrain', lv1tileset, 0, 0)

        terrainLayer.setCollisionByProperty({ collide: true })
        this.physics.add.collider(this.player, terrainLayer)


        //player audio
        this.stepsound = this.sound.add('playerstep')
        this.stepsound.setVolume(0.2)
        this.time.addEvent({
            delay: 55, 
            callback: () => {
                if(this.cursors.left.isDown || this.cursors.right.isDown || this.cursors.up.isDown || this.cursors.down.isDown){
                    this.stepsound.play({ loop: false })
                }
            },
            loop: true ,
        });
        this.attacksound = this.sound.add('attack')
        this.stepsound.setVolume(0.2)
        this.time.addEvent({
            delay: 144, 
            callback: () => {
                if(this.keyF.isDown){
                    this.attacksound.play({ loop: false })
                }
            },
            loop: true ,
        });


        this.time.addEvent({
            callback: () => {
                    this.sound.play('level1', { loop: false })
            },
        });
        this.time.addEvent({
            delay: 100, 
            callback: () => {
                if(this.win && !this.played){
                    this.played = true
                    this.sound.play('congrats', { loop: false })
                }
            },
            loop: true ,
        });

    }




    update() {
        this.player.update(this.cursors, this.keyF.isDown)

        
        this.physics.add.overlap(this.player, this.car, () =>{
            if(this.keyF.isDown){
                this.time.addEvent({
                    callback: () => {
                        this.win = true
                        this.time.addEvent({
                            delay: 2000, 
                            callback: () => {
                                this.scene.start('Level2Scene')
                            },
                        });
                    },
                });

            }
            
        })
      }



}