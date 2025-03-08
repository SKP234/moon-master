class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }
    preload(){
    }

    create() {
        this.car = new Car(this, 300, 240 , 'car')
        this.car2 = new Car(this, 100, 240 , 'car')
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        this.cursors = this.input.keyboard.createCursorKeys()
        this.player = new Player(this, game.config.width / 2, 240 , 'knight')


    
        const menuMap = this.add.tilemap('tilemapMenu')
        const menutileset = menuMap.addTilesetImage('terrain', 'tilesetImage')
        const terrainLayer = menuMap.createLayer('Terrain', menutileset, 0, 0)

        terrainLayer.setCollisionByProperty({ collide: true })
        this.physics.add.collider(this.player, terrainLayer)

        // menu text
        this.add.image(game.config.width / 2, 40, 'title')
        this.add.image(336, 225, 'playtext')
        this.add.image(118, 225, 'creditstext')
        this.add.text(game.config.width / 2, 130, 'Arrow keys to move\nF to attack\nDestroy junk on the moon', {
            color: '#3a34eb',
            align: 'center',
        }).setOrigin(0.5)


        //player audio
        this.stepsound = this.sound.add('playerstep')
        this.stepsound.setVolume(0.2)
        this.time.addEvent({
            delay: 55, 
            callback: () => {
                if(this.cursors.left.isDown || this.cursors.right.isDown || this.cursors.up.isDown || this.cursors.down.isDown){
                    this.stepsound.play({loop: false})
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
                    this.attacksound.play({loop: false})
                }
            },
            loop: true ,
        });

        this.level1sound = this.sound.add('level1')
        this.creditssound = this.sound.add('credits')

    }




    update() {
        this.player.update(this.cursors, this.keyF.isDown)

        //scene change
        this.physics.add.overlap(this.player, this.car, () =>{
            if(this.keyF.isDown){
                this.time.addEvent({
                    callback: () => {
                        this.scene.start('Level1Scene')
                    },
                });

            }
            
        })
        this.physics.add.overlap(this.player, this.car2, () =>{
            if(this.keyF.isDown){
                this.time.addEvent({
                    callback: () => {
                        this.scene.start('creditsScene')
                    },
                });

            }
            
        })
      }
      



}