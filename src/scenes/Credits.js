class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene")
    }
    preload(){
    }

    create() {

        // https://www.fontspace.com/megatrans-font-f101762 font
        this.carCredits = new Car(this, game.config.width / 2, 240 , 'car')
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        this.cursors = this.input.keyboard.createCursorKeys()
        this.player = new Player(this, game.config.width / 2, 240 , 'knight')
    
        const CreditMap = this.add.tilemap('tilemapCredit')
        const Credittileset = CreditMap.addTilesetImage('terrain', 'tilesetImage')
        const terrainLayer = CreditMap.createLayer('Terrain', Credittileset, 0, 0)

        terrainLayer.setCollisionByProperty({ collide: true })
        this.physics.add.collider(this.player, terrainLayer)

        
        this.add.image(220, 220, 'returntext')

        this.add.text(game.config.width / 2, 130, 'fontspace.com/megatrans-font-f101762\nfor menu font\n\nRecreated all other assets\n\nAttempted recreation of Moon Master from\nAqua Teen Hunger Force(Season 3, Episode 8)', {
            color: '#3a34eb',
            align: 'center',
            fontSize: '14px',
        }).setOrigin(0.5)

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

        

    }




    update() {
        this.player.update(this.cursors, this.keyF.isDown)

        //scene change
        this.physics.add.overlap(this.player, this.carCredits, () =>{
            if(this.keyF.isDown){
                this.time.addEvent({
                    callback: () => {
                        this.scene.start('menuScene')
                    },
                });

            }
            
        })
      }



}