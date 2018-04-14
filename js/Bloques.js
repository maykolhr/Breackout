function Bloques(x, y) {
	this.x = x + 40
	this.y = y + 60
	this.w = 80 / 2
	this.h = 40 / 2
	this.top = this.x - this.w / 2
	this.bottom = this.x + this.w / 2
	this.color1 = random(255)
	this.color2 = random(255)
	this.color3 = random(255)

	this.show = function() {
		rectMode(CENTER)
		fill(this.color1, this.color2, this.color3)
		rect(this.x, this.y, this.w, this.h)
	}
}	