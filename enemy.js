class Enemy {
  constructor(x,imageNum) {
    var options = {
      isStatic: false,
      friction: 0.2,
      density: 3
    }

    this.body = Bodies.circle(x, 30, 50, options)
    this.width = 30
    this.height = 50
    this.Visiblity = 255

    this.image1 = loadImage("./images/alien.png")
    this.image2 = loadImage("./images/alien2.png")
    this.image3 = loadImage("./images/alien3.png")
    this.image4 = loadImage("./images/alien4.png")


    this.imageSelect = 0

    this.shape
    World.add(world, this.body)
    this.imageNum = imageNum
  }
  display() {
    var pos = this.body.position    
    switch (this.imageNum) {
      case 1: image(this.image1, pos.x, pos.y, 50, 50)
        this.imageSelect = 1
        break;
      case 2: image(this.image2, pos.x, pos.y, 50, 50)
        this.imageSelect = 2
        break;
      case 3: image(this.image3, pos.x, pos.y, 50, 50)
        this.imageSelect = 3
        break;
      case 4: image(this.image4, pos.x, pos.y, 50, 50)
        this.imageSelect = 4
        break;
    }

  }
  destroy() {
    World.remove(world, this.body)
    
  }
}