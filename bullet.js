class Bullet{
    constructor(x, y){
        var options = {
            isStatic: false,
            friction: 0.1,
            density: 1
        }
        this.body = Bodies.rectangle(x, y, 10, 30, options)
        this.body.velocity.y = -200
        this.width = 10
        this.height = 30

        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push()
        fill("yellow")
        rectMode(CENTER)
        rect(pos.x, pos.y, 10, 30)
        pop()
        if(this.body.position.y <= 0){
            World.remove(world, this.body)
        }
       
    }

    
}

