class Level3intro extends Phaser.Scene {
    constructor() {
        super("Level3introScene")
    }
    preload(){
    }

    create() {
        
        this.sound.stopAll();
        const lv3introMap = this.add.tilemap('tilemapLevel3intro')
        const lv3introtileset = lv3introMap.addTilesetImage('terrain', 'tilesetImage')
        const terrainLayer = lv3introMap.createLayer('Terrain', lv3introtileset, 0, 0)

        this.gorgatron = new Gorgatron(this, game.config.width / 2, game.config.height / 2 , 'gorgatron')
        this.gorgatron.setScale(12)

        this.gorgatronstep = this.sound.add('gorgatronstep')
        this.gorgatronstep.setVolume(0.2)
        this.time.addEvent({
            delay: 500, 
            callback: () => {
                this.gorgatronstep.play({ loop: false })
            },
            loop: true ,
        });
        this.time.addEvent({
            delay: 4000, 
            callback: () => {
                this.scene.start('Level3Scene')
            },
        });

        this.time.addEvent({
            callback: () => {
                    this.sound.play('beware', { loop: false })
            },
        });
    }




    update() {
        this.gorgatron.update(true)
      }



}