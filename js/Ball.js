function Ball() {
	this.x = Math.floor(width / 2)
	this.y = Math.floor(height / 2)// + 150
	this.radius = 20
	this.speedx = 5
	this.speedy = 5

	this.show = function() {
		fill(255)
		ellipse(this.x, this.y, this.radius, this.radius)
	}

	function reset() {
		this.x = Math.floor(width / 2)
		this.y = Math.floor(height / 2)

		this.speedx = 5
		this.speedy = 5
	}

	this.move = function() {
		this.x += this.speedx
		this.y += this.speedy
		if(this.x > width || this.x < 0)
			this.speedx = - this.speedx
	}

	this.collision = function(e) {
		if(this.y <= e.y + e.h / 2 && this.y >= e.y - e.h / 2)
			if(this.x >= e.top && this.x <= e.bottom)
			return true
		return false
	}
}