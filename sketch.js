const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg, dieSound, shootSound, levelupSound
var ground, canvas

var enemy
var enemyAr = []

var bullets = []
var bullet
var player


function preload() {
  bgImg = loadImage("./images/bgimage.jpg")
  dieSound = loadSound("sounds/die.wav")
  shootSound = loadSound("sounds/shoot.wav")
  levelupSound = loadSound("sounds/levelup.wav")
}

function setup() {
  canvas = createCanvas(displayWidth - 100, displayHeight - 100);
  engine = Engine.create()
  world = engine.world;

  ground = createSprite(displayWidth / 2, displayHeight / 2, displayWidth, displayHeight)
  ground.addImage("bgImg", bgImg)
  ground.scale = 5
  ground.x = ground.width / 2
  ground.y = ground.height / 2
  player = new Player(width / 2, height - 50)

}

function draw() {
  background(255, 255, 255);

  Engine.update(engine)

  drawSprites();

  ground.velocityY = 2;

  if (ground.y > displayHeight - 30) {
    ground.y = ground.height / 2
  }

  //player
  player.display()

  if (keyDown(LEFT_ARROW)) {
    player.move(-10)

  }
  if (keyDown(RIGHT_ARROW)) {
    player.move(10)

  }


  //enemies
  if (frameCount % 40 === 0) {
    enemy = new Enemy(Math.round(random(20, windowWidth - 20)),Math.round(random(1,4)))
    enemyAr.push(enemy)
  }

  for (var j = 0; j < enemyAr.length; j++) {
    enemyAr[j].display();
    var bodyA = enemyAr[j].body
    var bodyB = player.body
    var collision = Matter.SAT.collides(bodyA, bodyB);
    if (collision.collided) {
      enemyAr.pop()
    }

  }

  //bullets
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].display();
    Matter.Body.setVelocity(bullets[i].body, { x: -0, y: -30 });
  }

  //collision between bullets and enemies using matter.js
  for (var i = 0; i < bullets.length; i++) {
    for (var j = 0; j < enemyAr.length; j++) {
      var bodyA = enemyAr[j].body
      var bodyB = bullets[i].body
      var collision = Matter.SAT.collides(bodyA, bodyB);
      if (collision.collided) {
        bullets.pop()
        enemyAr.pop()
        dieSound.play()
      }
    }
  }

}

function keyPressed() {
  if (keyCode === 32) {
    oneBullet = new Bullet(player.body.position.x, player.body.position.y - 50);
    bullets.push(oneBullet);
    shootSound.play()
  }
}