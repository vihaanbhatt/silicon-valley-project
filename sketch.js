

var engine, world, dustbin, paper;
var gameState = 0
var count = 0


function preload(){
	tomImage = loadImage("tom running.png")
		jerryImage = loadImage("jerry cheese image.jpg")
	desertImage = loadImage("desert image.jpg")
	obstacleImage = loadImage("cactus image.png")
}

function setup(){
createCanvas(displayWidth,displayHeight);
rectMode(CENTER);




desert = createSprite(0,displayHeight-100,displayWidth*10,10)
desert.velocityX = -10
tom = createSprite(500,displayHeight-200)
jerry = createSprite(300,displayHeight-200)
desert.visible = false
tom.visible = false
jerry.visible = false

obstacleGroup = createGroup()

//tom.addImage(tomImage)
//jerry.addImage(jerryImage)
//desert.addImage(desertImage)



	
}

function draw() {
	if(gameState === 1){

	
	background(desertImage)
	
	if(keyDown("SPACE")){
		jerry.velocityY=-10

	}
	jerry.velocityY = jerry.velocityY+0.5
	jerry.collide(desert)

	if(desert.x<0){
		desert.x = displayWidth/2
	}
	camera.position.x = jerry.x
	tom.visible = true
	jerry.visible = true
	desert.visible = true
	
	tom.x = jerry.x-150
	if(frameCount%100 === 0){
		obstacle = createSprite(displayWidth -200, displayHeight -200,20,100)
		obstacle.velocityX = -10;
		obstacle.lifetime = displayWidth/10
		obstacleGroup.add(obstacle)

		

	}
		for(var i=0; i<obstacleGroup;i++){

		
	if(obstacleGroup.get(i).isTouching(tom)){
		count= count+1
console.log(count)
		obstacleGroup.get(i).destroy()
	}
}
if(obstacleGroup.isTouching(jerry)){
	gameState = 2

	obstacleGroup.destroyEach()
}
if(count === 3 && gameState === 1){
	gameState = 3
}



	}
	if(gameState === 2){
		background("red")
		desert.visible = false
		tom.visible = false
		jerry.visible = false
		textSize (45)
		text("Tom Caught You",500,500)
		
	}
	if(gameState === 3){
		background("green")
		desert.visible = false
		tom.visible = false
		jerry.visible = false
		textSize (45)
		text("Tom was Cut out",500,500)
		
	}
if(gameState === 0){
	background("cyan")
	textSize(15)
	text("Press SPACE to start the game",displayWidth/2,200)
	text("press space to make jerry jump",displayWidth/2,300)
	text("press right arrow to move jerry",displayWidth/2,500)
	
if(keyDown("SPACE")){
	gameState = 1
	fill("cyan")

	
}

	

}
drawSprites()
}


	


	
	





	
	






