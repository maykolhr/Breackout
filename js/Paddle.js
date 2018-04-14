function Paddle() {
	this.x = width / 2
	this.y = height - 20
	this.w = 120
	this.h = 20
	this.speed = 10
	this.top = this.x - this.w / 2
	this.bottom = this.x + this.w / 2

	this.show = function() {
		rectMode(CENTER)
		fill(250, 131, 3)
		rect(this.x, this.y, this.w, this.h)
	}

	this.move = function() {
		if(mouseX > this.x)
			this.x += this.speed
		else
			if(mouseX < this.x)
				this.x -= this.speed

		this.top = this.x - this.w / 2
		this.bottom = this.x + this.w / 2	
	}
}