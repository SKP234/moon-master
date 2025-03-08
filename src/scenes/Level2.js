class Level2 extends Phaser.Scene {
    constructor() {
        super("Level2Scene")
        this.win = false
        this.played = false
    }
    preload(){
    }

    create() {
        this.sound.stopAll();
        this.car = new Car(this, 80, 115 , 'car')
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        this.cursors = this.input.keyboard.createCursorKeys()
        this.player = new Player(this, 305, 200, 'knight')
    
        const lv2Map = this.add.tilemap('tilemapLevel2')
        const lv2tileset = lv2Map.addTilesetImage('terrain', 'tilesetImage')
        const terrainLayer = lv2Map.createLayer('Terrain', lv2tileset, 0, 0)

        terrainLayer.setCollisionByProperty({ collide: true })
        this.physics.add.collider(this.player, terrainLayer)

        //score
        this.add.rectangle(10, 15, 130, 25,'#000000').setOrigin(0)
        this.add.text(10, 25, 'SCORE', {
            color: '#c6d248',
            fontSize: '16px'
        }).setOrigin(0)
        this.score = this.add.text(70, 24, '5280', {
            color: '#4cc42f',
            fontSize: '18px',
            align: 'right',
        }).setOrigin(0)

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
                    this.sound.play('level2', { loop: false })
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
                        this.score.text = '7734'
                        this.time.addEvent({
                            delay: 2000, 
                            callback: () => {
                                this.scene.start('Level3introScene')
                            },
                        });
                    },
                });
            }
        })
      }



}