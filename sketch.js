let player
let blocks = []
let pelota
//let puntaje = 0
let vidas = 3
let nivel = 0

function preload() {
	imagen = loadImage('imagenes/fondo.jpg')
	//crash = loadSounds('sounds/Crash.mp3')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//x = width / 2 - 300 / 2;
	//y = height /2 - 260 / 2;
	player = new Paddle()
	pelota = new Ball()

	for(let i = 0; i < 8; i++)
		for(let j = 0; j < 24; j++)
			blocks.push(new Bloques(j*80,i*40))
}

function draw() {
	//background(0)
	image(imagen, 0, 0, width, height)
	player.move()
	player.show()
	pelota.move()
	for(let i = 0; i < blocks.length; i++){
		blocks[i].show()
		//let checkSocre = blocks.checkScore()
		if(pelota.collision(blocks[i])){
			pelota.speedy = - pelota.speedy
			blocks.splice(i,1)
			//crash.play()
		}
	}
	if(pelota.collision(player))
		pelota.speedy = - pelota.speedy
	if(pelota.y < 0)
		pelota.speedy = - pelota.speedy
	pelota.show()
	//drawScore()
	inforJuego()
}

function perderVida() {
	if(vidas > 0) {
		vidas--
	}else {
		finJuego()
	}
}

function inforJuego() {
	fill('254, 254, 254')
	textSize(28)
	text("Vidas: " + vidas, 8, 30)
	text("Nivel: "+ nivel, 1800, 30)
}

function finJuego() {
	document.location.reload()
}

function collision() {
	if(pelota.x <= pelota.radius || pelota.x >= createCanvas.windowWidth - pelota.radius) pelota.xdir = - pelota.xdir
		if(pelota.y <= 0) pelota.ydir = - pelota.ydir
			if(pelota.y >= createCanvas.windowHeight - pelota.radius) {
				pelota.ydir = - pelota.ydir
				if(!(pelota.x > player.x && pelota.x < player.x + player.w)) {
					perderVida()
				}
			}
}

/*function drawScore() {
	fill('254, 254, 254')
	textSize(28)
	text("Puntaje: " + puntaje, 8, 20)
}

function collisionDetection() {
	for(let i = 0; i < 8; i++) {
		for(let j = 0; j < 24; j++) {
			let b = blocks[i][j]
			if(b.status == 1) {
				if(x > b.x && x < b.x + blocks && y > b.y && y < b.y + blocks) {
					dy = -dy
					b.status = 0
					puntaje++
				}
			}
		}
	}
}*/