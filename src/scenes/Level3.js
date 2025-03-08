class Level3 extends Phaser.Scene {
    constructor() {
        super("Level3Scene")
        this.isFiring = false;
        this.turned = false;
        this.win = false;
    }
    preload(){
    }

    create() {
        this.sound.stopAll();
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        this.cursors = this.input.keyboard.createCursorKeys()
        this.player = new Player(this, game.config.width / 2, 275 , 'knight')
        
    
        const lv3Map = this.add.tilemap('tilemapLevel3')
        const lv3tileset = lv3Map.addTilesetImage('terrain', 'tilesetImage')
        const terrainLayer = lv3Map.createLayer('Terrain', lv3tileset, 0, 0)

        this.rocket = new Rocket(this, game.config.width / 2, 250, 10, 25, 0xf68a01)

        this.gorgatron = new Gorgatron(this, 330, 110 , 'gorgatron')
        this.gorgatron.setScale(2.5)

        terrainLayer.setCollisionByProperty({ collide: true })
        this.physics.add.collider(this.player, terrainLayer)

        
        //score
        this.add.rectangle(10, 15, 130, 25,'#000000').setOrigin(0)
        this.add.text(10, 25, 'SCORE', {
            color: '#c6d248',
            fontSize: '16px'
        }).setOrigin(0)
        this.score = this.add.text(70, 24, '7734', {
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
                    this.sound.play('level3', { loop: false })
            },
        });
        this.time.addEvent({
            delay: 100, 
            callback: () => {
                if(this.win && !this.played){
                    this.played = true
                    this.sound.play('ending', { loop: false })
                }
            },
            loop: true ,
        });

    }




    update() {
        this.player.update(this.cursors, this.keyF.isDown)
        this.rocket.update(Phaser.Input.Keyboard.JustDown(this.keyF), this.player.x, this.player.y)
        this.gorgatron.update(false, this.win)
        
        this.physics.add.overlap(this.rocket, this.gorgatron, () =>{
            this.time.addEvent({
                callback: () => {
                    this.rocket.setVisible(false)
                    this.win = true
                    this.score.text = '123456'
                    this.time.addEvent({
                        delay: 4000,
                        callback: () => {
                            this.scene.start('menuScene')
                        },
                    });
                },
            });
        })

    }



}