class Player {
    constructor(x, y) {
        var options = {
            isStatic: true,
            friction: 0.3,
            density: 4
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options)
        this.width = 100
        this.height = 100
        this.image = loadImage("./images/ship.png")
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 4 / 3 * this.width, 4 / 3 * this.height)
    }
    move(x) {
        var pos = this.body.position
        Body.setPosition(this.body, { x: pos.x + x, y: pos.y })
    }
    spawnBullets() {
        var bullet = createSprite(this.body.position.x, this.body.position.y, 10, 30)
        bullet.velocityY = -5
        bullet.shapeColor = "yellow"
        bullet.lifetime = displayHeight / 5
        bulletGroup.add(bullet)
    }
}   